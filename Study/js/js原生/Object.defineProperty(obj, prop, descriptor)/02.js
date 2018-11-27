/*
 *Object.defineProperty(obj,prop,descriptor) 
 对象obj ; 添加或修改的属性 prop 属性名 ;  descriptor 对象，拥有6个属性 是对该属性的描述
 descriptor
value: 属性值
writable:  默认false(是否可以修改value的值)
enumerable:默认是false  设置属性是否可以被遍历到
configurable：属性是否可被删除   除writeable 其他属性是否可被修改 
get():获取属性值时调用
set():设置属性值时调用

data property  数据属性  value writable 
accessor property 存取属性 get set 
属性中 value  writable 通 set get 不可共存
 *  */


'use strict'
 let obj={};
//可以显示定义属性特性
 Object.defineProperty(obj,"name",{
     value:'xxtian',
     get(){
         return obj.name;
     }
 });

 //属性中 value  writable 通 set get 不可共存
 //Cannot both specify accessors and a value or writable attribute
