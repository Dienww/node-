// 导入http模块，用于创建HTTP服务器
const http = require('http');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  // 设置响应状态码
  res.statusCode = 200;

  // 设置响应状态描述
  res.statusMessage = 'Is OK';

  // 响应头
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.setHeader('Server', 'Node.js');
  res.setHeader('Connection', 'keep-alive');
  // 自定义响应头
  res.setHeader('my_header', 'lalaluludududu')

  // 设置响应体
  res.write("1 ")
  res.write("2 ")
  res.write("3 ")
  res.write('good good you are good')

  // 发送响应
  res.end()
});

// 启动服务器，监听9000端口
server.listen(9000, () => {
    console.log('服务已经启动...');
});