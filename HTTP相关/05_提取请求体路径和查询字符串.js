// 导入http模块，用于创建HTTP服务器
const http = require('http');
// 导入url模块，用于解析URL
const url = require('url');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  // 解析请求的URL，获取路径名和查询参数
  // 解析request.url
  let urlMsg = url.parse(req.url, true);
  let { pathname, query } = urlMsg;
  
  // 输出路径名和查询参数
  console.log('pathname:', pathname);
  console.log('query:', query);

  // 发送响应，表示请求处理成功
  res.end('request ok');
});

// 启动服务器，监听9000端口
server.listen(9000, () => {
    console.log('服务已经启动...');
});