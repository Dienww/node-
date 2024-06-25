// 导入http模块，用于创建HTTP服务器
const http = require('http');
const fs = require('fs');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  // 读取文件
  let html = fs.readFileSync(__dirname+'/08_testFs.html');
  // 发送响应
  res.end(html)
});

// 启动服务器，监听9000端口
server.listen(9000, () => {
    console.log('服务已经启动...');
});