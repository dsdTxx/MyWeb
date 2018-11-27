# Object

## 方法

### Object.defineProperty(obj, prop, descriptor)

* 定义或修改对象的属性，然后返回这个对象，可以对属性的描述进行设定
* obj 要处理的对象
* prop 要添加或修改的属性名
* descriptor 属性描述 
  - value 属性值
  - writable:  默认false(是否可以修改value的值)
  - enumerable:默认是false  设置属性是否可以被遍历到
  - configurable：默认是false  属性是否可被删除   除writeable 其他属性是否可被修改 
  - get():获取属性值时调用
  - set():设置属性值时调用
* 数据属性 writable value  存取属性 set get  属性只能是其中一种，不可并存
* 属性定义方式 obj.name="xxtian"  等价于定义数据属性，且writable/enumerable/configuarble为true

```js
 // 没有get和set
        let obj = {

        }
        Object.defineProperty(obj, 'a', {
            value: 123, // 该属性值为123
            enumerable: false, // 不可被遍历得到
            writable: false, // 不可被重新写入
            configurable: false // 不可被删除，且enumerable和value不能通过Object.defineProperty重新定义
        })

  // 使用get和set
        let obj = {
            // 设定默认值
            _data: {
                a: 123
            }
        }
        Object.defineProperty(obj, 'a', {
            get() {
                // 当获取a时执行
                console.log('a被获取了')
                return obj._data.a
            },
            set(value) {
                // 当修改a时执行
                obj._data.a = value
                console.log('a的值被修改了')
            }
        })
```


## 属性的类别

 data property  数据属性

 accessor property 存取属性

#  严格模式

'use strict'  语法更加严谨，多用