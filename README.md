## bigpipe
1.定义  

    - BigPipe是一个重新设计的基础动态网页服务体系。大体思路是，分解网页成叫做Pagelets的小块，然后通过Web服务器和浏览器建立管道并管理他们在不同阶段的运行。这是类似于大多数现代微处理器的流水线执行过程：多重指令管线通过不同的处理器执行单元，以达到性能的最佳。

2.原理

    - HTTP协议1.1分块传输编码（Chunked transfer encoding）可以实现内容的分块传输。在bigpipe中，html标签先不闭合，待所有模块加载完毕后，在闭合html标签  

3.优势和不足  

    优势：  
    (1)发送一个请求后多次返回数据，减少请求数量，降低服务器压力  
    (2)客户端和服务端并行工作，客户端无需等待所有资源加载完毕才渲染
    (3)缩短了页面ready时间
    (4)服务端可以控制展现的顺序   
    不足：
    (1) JavaScript的执行会阻塞页面渲染，所以为了保证页面的渲染，JavaScript的加载优先级会被滞后  
    (2) 由于内容是动态生成的，不利于搜素引擎的SEO

4.基于nodejs的demo预览

    - git clone https://github.com/joinbear/bigpipe.git
    - cd bigpipe && npm install
    - node bin/www
    - 访问 http://localhost:3000/ 即可看到效果
