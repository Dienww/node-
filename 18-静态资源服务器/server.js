const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url,'http://127.0.0.1' );
  const filePath = __dirname+'/page' + pathname
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
    res.end(data);
  });
});

server.listen(9000, () => {
  console.log('server is running...');
});