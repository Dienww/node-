// API
// path.resolve() 拼接规范的绝对路径 常用
// path.sep 获取操作系统的路径分隔符
// path.parse(路径) 解析路径并返回对象
// path.basename(路径) 获取路径的基础名称
// path.dirname(路径) 获取路径的目录名
// path.extname(路径) 获得路径的扩展名
const path = require('path');
console.log(path.resolve(__dirname, 'a'));
console.log(path.sep);