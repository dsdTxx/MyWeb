/*
 *Object.defineProperty(obj,prop,descriptor) 
 对象obj ; 添加或修改的属性 prop 属性名 ;  descriptor 对象，拥有6个属性 是对该属性的描述
 descriptor
value: 属性值
writable:  默认false(是否可以修改value的值)
enumerable:默认是false  设置属性是否可以被遍历到
configurable：默认是false  属性是否可被删除   除writeable 其他属性是否可被修改 
get():获取属性值时调用
set():设置属性值时调用

data property  数据属性  value writable 
accessor property 存取属性 get set 
属性中 value  writable 通 set get 不可共存
//Cannot both specify accessors and a value or writable attribute

属性定义方式对比
o.a = 1;  <=>  通过defineProperty 定义 
Object.defineProperty(o, "a", {
  value : 1,
  writable : true,
  configurable : true,
  enumerable : true
});

 *  */

'use strict'
 let obj={};
//可以显示定义属性特性
 Object.defineProperty(obj,"name",{
     value:'xxtian',
     writable:true,
     enumerable:true,
     configurable:false
 });

console.log(obj.propertyIsEnumerable('name'))  //false 默认是不可枚举的

//writable为false时，重新赋值，
//非严格模式下 不会报语法错误，但是value值不会被修改
//严格模式下  会报  Cannot assign to read only property 'name' of object '#<Object>'
obj.name="zhangsan";
console.log(obj.name)