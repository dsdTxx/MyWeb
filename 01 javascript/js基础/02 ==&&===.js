//01 数字和字符串比较
console.log('123'==123); //true

//02 boolean值同其他
console.log("========数字 及 字符串==========")
console.log(Boolean(12)); //true
console.log(Boolean(-12)); //true
console.log(Boolean(0));  //false

console.log(0==false); //true
console.log(1==true); //true

console.log(12==true) //false
console.log(12==false) //false

console.log(Boolean('123')); //true
console.log(Boolean('')); //false

console.log('123'==true); //false
console.log('123'==false); //false

console.log(''==false); //true


//03 null undefiend
console.log("========null undefined==========")
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false

//这种即不为true 也不为false怎么来的
console.log(null==true); //false
console.log(null==false); //false

console.log(undefined==true); //false
console.log(undefined==false); //false

console.log(null==undefined); //true

//04 对象 引用类型
console.log("========数组==========")
console.log(Boolean(new Object())); //true
console.log(new Object()==new Object()); //false
console.log([1,2]==[1,2]); //false


//严格相等
console.log("***********  === **********  ")
console.log(NaN===NaN); //false
console.log(null===undefined) //false

