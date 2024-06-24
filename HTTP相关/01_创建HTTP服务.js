// 1 引入 http 模块
const http = require('http');

// 2 创建 http 服务对象
const server = http.createServer((req, res) => {
   // 3 设置相应体
  //  res.end('Hello World');  
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end("直接返回中文会乱码")
});

// 4 监听端口号，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
});

// 注意事项
// 1.命令行 ctrl + c 停止服务
// 2．当服务启动后，更新代码 必须重启服务才能生效
// 3. 响应内容中文乱码的解决办法
// response.setHeader ('content-type', 'text/html;charset=utf-8');
// 4. 端口号被占用
// Error: Listen EADDRINUSE : address already in use : ::9000
// 1）关闭当前正在运行监听端口的服务（使用较多）
// 2）修改其他端口号
// 5. HTTP协议默认端口是 80。 HTTP 服务开发常用端口有 3000，8080，8090，9000 等
// 如果端口被其他程序占用，可以使用 资源监视器 找到占用端口的程序，然后使用任务管理器关闭对应的程序
// 6. 服务端默认端口 443