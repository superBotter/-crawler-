const fs = require('fs');
/**
 * 异步: 非阻塞模式
 *  代码执行的时候在遇到比较耗时的操作时
 *    不会停止后面代码的继续执行
 *    在耗时的操作执行完成之后会通过事件触发或者回调函数方式告知操作完成
 * 同步: 阻塞模式
 *  代码会一步一步往后执行
 *    遇到比较耗时的操作时会等待操作完成
 */

 /**
  * readFile 异步方式读取文件
  */
// fs.readFile('./goods.json',function(err,data){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(data);
//   }
// })
// console.log('文件读取操作完成!');

/**
 * readFileSync 同步方式读取文件
 */
var data = fs.readFileSync('./goods.json');
console.log(data);
console.log('文件读取操作完成!');