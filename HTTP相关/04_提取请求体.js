// 1 引入 http 模块
const http = require('http');

// 2 创建 http 服务对象
const server = http.createServer((req, res) => {
   // 声明变量
   let body = ''
   // 绑定 data 事件 
   req.on('data', chunk => {
      body += chunk
   })
   // 绑定 end 事件
   req.on('end', () => {
      console.log(body)
      // 相应结果
      res.end('ok')
   })
});

// 4 监听端口号，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
});
