# es6

* promise 使用 

  - 适用于一次执行多个异步操作，异步之间无先后顺序（逻辑）
  - 解决回调地狱

  -  ajax也是promise
  - new promise(function(resolve,reject){ }).then(function(data){},function(err){})
  - 创建promise构造函数，返回return promise对象 
  - promise.all([]).then(fun1,fun2)
  - promise.race

* generator   yield

  - 函数执行过程中可以暂停，分多次执行(next()一次，执行一步)
  - 定义function * show(){}  
  - 创建 let obj=show();
  - 执行 obj.next() 
  - 传参next(a)
  - 返回值  let data1=yield $.ajax()
  - obj.next()的返回值，世纪就是yield之前代码的返回值，函数区域划分（多个线）
  - 若想直接next()到最后，需使用runner函数

* async  await

  - 代替runner 和yield
  - 可以使用箭头函数
  - KOA中很多异步操作，使用async promise await 类似同步书写

#  模块

* 模块-->元件-->组件
* 分类
  - sea.js  require.js 
  - nodejs
  - ES6
* 优势
  - 按需引入（ajax异步加载）
  - 模块间的依赖

##  sea.js require.js

* 定义模块 define

* 模块内(容  define(function(require,exports,module){}))

  - require 引入其他模块
  - exports 多次暴露
  - module 批量暴露

* 使用

  - 引入sea.js require.js文件

  * sea.js  require.js 解决了模块化（按需引入，模块之间依赖）

  - html->js  use
  - js->js        require

## node模块化

* 没有define ,node自身解决了定义语法步骤

* require 

  - 绑定npm 包下载及管理

  - 直接写名称，会自动检测，加载node_modules的包

  - 自身文件加路径，检测node_modules
  - 自己包，放到node_modules下，可以不加路径

* exports/module暴露

* --save--dev  保存开发配置下的依赖（版本等信息，便于恢复）

* 自己写包，调用试试  package.json的配置

##  es6模块化

* import 引入  import mod1 from './路径'
* export 暴露
* 浏览器未兼容，babel/webpack

###  babel使用

* 写一个es6文件（非模块化），查找babel官网说明，进行转兼容代码
* 写一个es6文件（模块化），测试babel后是否可用，尝试使用webPack
* babel离线安装

### webPack 使用



