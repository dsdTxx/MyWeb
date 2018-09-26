let str="hello";

let strObj=new String(str);

console.log(str); //hello
console.log(strObj);//[String: 'hello']

console.log(typeof str); //string
console.log(typeof strObj); //object

console.log(str.length); //5 隐式转换为包装类型，所以取到length
str.t=10;      //赋值完成后 立刻销毁包装类型
console.log(str.t) //undefined 

