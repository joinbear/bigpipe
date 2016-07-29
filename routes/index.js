const express = require('express');
const router  = express.Router();
const ejs     = require('ejs');
const fs      = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Hello BigPipe!!!!' },function (err,html){
  	var count = 4;
  	if (err) return res.req.next(err)
    res.setHeader('content-type', 'text/html; charset=utf-8');
    setTimeout(function(){
    	res.write(html);
    	--count;
    	closePage(count,res);
    }, 1000);
    setTimeout(function(){
    	var test = renderTemplate('static','newPipe','../public/cache/news.html');
    	res.write(test);
    	--count;
    	closePage(count,res);
    }, 3000);
    setTimeout(function(){
		  var text = renderTemplate('dynamic','bigPipe','../views/big.ejs',{BigPipe : "Hello BigPipe!!!!"});
		  res.write(text);
		  --count;
		  closePage(count,res);
	  }, 10000);
	  setTimeout(function(){
	  	var nav = fs.readFileSync(require.resolve('../public/cache/pannel.js'), 'utf8');
      res.write('<script src="/javascripts/react.min.js"></script>');
      res.write('<script src="/javascripts/react-dom.min.js"></script>');
	  	res.write('<script>'+nav+'</script>');
	  	--count;
      closePage(count,res);
	  }, 2000);
  });
  
});
/**
 * [closePage 数据加载完毕关闭页面]
 * @param  {[type]} flag [数据加载完毕的标识]
 * @param  {[type]} res  [response对象]
 * @return {[type]}      [description]
 */
function closePage(flag,res){
  if(!flag){
    res.write(' </body></html>');
    res.end();
  }
}
/**
 * [renderTemplate 渲染模板]
 * @param  {[type]} tempType [bigpipe类型，分静态缓存和动态生成]
 * @param  {[type]} tempId   [页面模板对应id]
 * @param  {[type]} tempPath [模板文件路径]
 * @param  {[type]} tempData [动态模板数据]
 * @return {[type]}          [description]
 */
function renderTemplate(tempType,tempId,tempPath,tempData){
	var 
		fileContent = fs.readFileSync(require.resolve(tempPath), 'utf8'),
		htmlStr = '';
	htmlStr = (tempType == 'static') ? fileContent : ejs.render(fileContent,tempData);
	htmlStr = htmlStr.replace(/"/g, '\\"').replace(/\n/g,'').replace(/<\/script>/g, '<\\/script>');
	return '<script>document.getElementById("'+tempId+'").innerHTML = "'+htmlStr+'"</script>';
}
module.exports = router;
