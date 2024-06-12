const fs = require('fs')
const process = require('process')

// 文件复制

// 1、readFileSync 读取文件
// 读取所有文件到内存中
const readData = fs.readFileSync('./Z-fsCopySource.txt')
fs.writeFileSync('./Z-fsCopyReadFile.txt', readData)
//获得内存占用
console.log(process.memoryUsage()) //rss，单位是字节 34045952

// 2、createReadStream 读取文件-所占资源少一些,文件越大越明显
// 读取速度通常大于写入速度
// 创建读取流对象
const readStreamData = fs.createReadStream('./Z-fsCopySource.txt')
// 创建写入流对象
const writeStreamData = fs.createWriteStream('./Z-fsCopyReadStreamData.txt')
// 绑定 data 事件
readStreamData.on('data', (chunk) => {
  writeStreamData.write(chunk)
})
readStreamData.on('end', () => {
  console.log("流式占用的内存大小",process.memoryUsage()) //rss，单位是字节
})
// 等同于
readStreamData.pipe(writeStreamData)