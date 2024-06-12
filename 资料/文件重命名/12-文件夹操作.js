 const fs  = require('fs')

//  1.创建文件夹
// fs.mkdir('./资料/文件夹创建',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('创建成功')
//     }
// })

// // 2.递归创建文件夹
// fs.mkdir('./资料/文件夹递归/文件夹创建2/文件夹创建3/文件夹创建4',{recursive:true},(err)=>{
//   if(err){
//       console.log(err)
//   }else{
//       console.log('创建成功')
//   } 
// })

// 3.读取文件夹-得到目标文件夹中的文件列表
// fs.readdir('./资料/文件夹递归',(err,files)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(files)
//     }
// })

// 4.删除文件夹
// fs.rmdir('./a',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('删除成功')
//     }
// })

// 5.删除文件夹-递归(不推荐使用)
fs.rmdir('./资料/文件夹递归',{recursive:true},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('删除成功')
    }
})

// 6.删除文件夹-递归(推荐使用)
fs.rm('./资料/文件夹递归',{recursive:true},(err)=>{
  if(err){
      console.log(err)
  }else{
      console.log('删除成功')
  }
})

