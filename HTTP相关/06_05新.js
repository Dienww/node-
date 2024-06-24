// 导入http模块，用于创建HTTP服务器
const http = require('http');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  // 路径
  console.log(requestUrl.pathname);
  // 查询字符串
  console.log(requestUrl.searchParams.get('key'))
  // 发送响应，表示请求处理成功
  res.end('request ok');
});

// 启动服务器，监听9000端口
server.listen(9000, () => {
    console.log('服务已经启动...');
});