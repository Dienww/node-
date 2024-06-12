const fs = require('fs')

// stat 获取文件信息
fs.stat('./资料/Z-fsTest.txt', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
  console.log(data.isFile())
  console.log(data.isDirectory())
})
