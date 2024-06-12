const fs = require('fs')

// 相对路径
// bug：相对路径的参照物并不是js文件的所在目录，而是参造命令行的所在目录
fs.writeFileSync('./资料/a.txt', 'hello')
fs.writeFileSync('资料/b.txt', 'lalala')
 
// 绝对路径
fs.writeFileSync('/Users/duanyiwen/Desktop/测试.txt', 'hello')

// 绝对路径简写
// __dirname 始终保存所在文件的所在目录的绝对路径
console.log(__dirname)
