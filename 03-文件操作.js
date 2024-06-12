
// // 新建一个文件（为什要要用脚本实现效果 实现自动化操作）

// // 1、导入fs模块
// const fs = require('fs')

// // 2、异步写入文件
// // fs.writeFile(FilePath, FileContent, Options-可选, callback)
// fs.writeFile('./Z-fsTest.txt', '这是一个通过 fs 生成的文件', (err) => {
//   if (err) {   // err 写入成功是 null ，写入失败是一个错误对象
//     return console.log('写入失败' + err.message)
//   }
//   console.log('写入成功')
// })


// // 3、同步写入文件
// try {
//   fs.writeFileSync('./Z-fsTestSync.txt', '这是一个通过 fs 生成的同步文件')
//   console.log('同步写入成功')
// } catch (error) {
//   console.log('同步写入失败' + error.message)
// }

// // 4、追加文件-伊布
// fs.appendFile('./Z-fsTest.txt', '\n追加内容', (err) => {
//   if (err) {
//     return console.log('追加失败' + err.message)
//   }
//   console.log('追加成功')
// })

// // 5、追加文件-同步
// fs.appendFileSync('./Z-fsTestSync.txt', '\n追加同步内容')

// //  6、writeFile实现追加写入 { flag: 'a' }
// fs.writeFile('./Z-fsTest.txt', '\nwriteFile追加的内容', { flag: 'a' }, (err) => {
//   if (err) {
//     return console.log('追加失败' + err.message)
//   }
//   console.log('追加成功')
// })
