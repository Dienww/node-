const fs = require("fs")

//1、 创建读取流对象
const rs = fs.createReadStream('./Z-fsWriteStream心态陷阱.txt')

//2、绑定 data 事件
rs.on('data', (chunk) => {
  console.log(chunk.length) // 字节转 kb
  console.log(chunk.toString())
})

//3、end 可选事件
rs.on('end',()=>{
  console.log('读取完毕')
})