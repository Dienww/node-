const fs = require('fs')

// 1、异步读取
fs.readFile('./Z-fsTest.txt',(error,data)=>{
  if(error){
    return console.log("文件读取失败")
  } else {
    console.log(data.toString())
  }
})

// 2、同步读取
let data = fs.readFileSync('./Z-fsTestSync.txt')
console.log(data.toString())