const fs = require('fs')

// 1. 调用 rename 方法，将文件重命名为 fsWriteStream心态陷阱.txt 
// fs.rename('./Z-fsWriteStream心态陷阱 copy.txt', './Z-fsWriteStream心态陷阱.txt', (err) => {
//   if(err){
//     return console.log('重命名失败')
//   }
//    console.log('重命名成功')
// })

// 2. 移动文件
// fs.rename('./资料/Z-fsTest.txt', './资料/移动/Z-fsTest.txt', (err) => {
//   if(err){
//     return console.log('移动失败')
//   }
//    console.log('移动成功')
// })

// 3.同步方法
// fs.renameSync()