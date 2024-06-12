const fs = require('fs')

// 1. 调用 unLink 方法 unLinkSync
fs.unlink('./资料/Z-fsTest.txt', (err) => {
  if(err){
    return console.log('删除失败')
  }
   console.log('删除成功')
})
 
// 2. rm (14) rmSync
fs.rm('./资料/Z-fsTest.txt', (err) => {
  if(err){
    return console.log('删除失败')
  }
   console.log('删除成功')
})