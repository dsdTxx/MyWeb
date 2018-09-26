//01 + -符号会隐式转换数字和字符串
let str=32+'';
console.log(typeof str); //string

let num='32'-0;
console.log(typeof num); //number

//02 == 比较符号 会隐式转换类型再比较,只用于比较，变量类型不变
let str2='123';
console.log(str2==123);  //true
console.log(typeof str2); //string ，比较后 str2仍是字符串

