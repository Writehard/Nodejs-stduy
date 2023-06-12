
// 创建一个字符串
var str = 'hello哲';
// 将字符串转换成buffer 数据结构与数组类似
var buf = Buffer.from(str)
console.log(buf);
// {/* <Buffer 68 65 6c 6c 6f 20 77 6f 72 64> */}
//一个汉字三个字节
console.log(buf.length);
// 8
console.log(str.length);
//6
// 创建一个10个字节的buffer
var buf2 = Buffer.alloc(10);
// 可以通过索引，来操作buf2中的元素
buf2[0] = 87;
buf2[1] = 88;
buf2[2] = 89;
buf2[3] = 90;
console.log(buf2);