// 1 引入 http 模块
const http = require('http');

// 2 创建 http 服务对象
const server = http.createServer((req, res) => {
   // 3 设置相应体
   // 获取请求的方法
  console.log(req.method)  
  // 获取请求的url
  console.log(req.url)// 只包含url中的路径和查询字符串（不包含协议、域名、端口）
  // 获取 HTTP 协议的版本号
  console.log(req.httpVersion)
  // 获取请求头信息
  console.log(req.headers)
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end('Hello World');  
});

// 4 监听端口号，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
});

// 意事项：
// 1.request.url 只能获取路径以及查询字符串，无法获取 URL 中的域名以及协议的内容
// 2.request.headers 将请求信息转化成一个对象，并将属性名都转化成了 『小写』
// 3．关于路径：如果访问网站的时候，只填写了 IP 地址或者是域名信息，此时请求的路径为『1』
// 4. 关于favicon.ico：这个请求是属于浏览器自动发送的请求