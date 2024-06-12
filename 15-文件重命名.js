const { log } = require('console')
const fs = require('fs')

const fsNameList =  fs.readdirSync('资料/文件重命名')

fsNameList.forEach((item)=>{
  const data = item.split('-')
  let [num,name] = data
  if(Number(num)<10){
    num = '0'+num
  }
  const newName = `${num}-${name}`
  fs.renameSync(`资料/文件重命名/${item}`,`资料/文件重命名/${newName}`)
})