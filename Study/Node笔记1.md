1. 狼叔，我对用Node.js来进行IOT的编写很感兴趣，其中前端、后端包括硬件Arduino、树莓派等等都是用Node.js编写，想问下你对Node.js深入到物联网当中怎么看

2. node.js 定义

   Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

   * node.js 不是语言也不是框架，是JavaScript**运行时环境**
   * 构建在Chrom's V8引擎上  V8使用C/C++ 效率高  js语法，转成C、C++调用，降低了学习成本
   * 事件驱动（event-driven）非阻塞I/O  (non-blocking I/O) 
   * Libuv
     - C/C++编写的事件循环处理库，事件循环将I/O处理分为多个线程，放入线程池中
     - 隐藏了非阻塞I/O的具体事件 简化了并发编程模型
     - 轻量级（lightweight） 高效（efficient）
   * npm package ecosytem 包管理生态系统

3. node.js 架构



   ![node.js结构](E:\Node.js\node笔记1附件\node.js结构.png)

   ![node.js结构2](E:\Node.js\node笔记1附件\node.js结构2.png)
​     * C/C++ 提供了API，可以处理后端服务
​     * Chrome V8解释并执行js代码 （浏览器可以执行js的原因）
​     * libuv 事件循环及线程池组成，负责所有I/O任务的分发与执行

4. 异步非阻塞I/O 

   * 类似排队改为取号机，取号后，等通知就行，这期间可以做自己的事

5. 异步

   异步是解决并发的最佳实践。

6. 单线程：

   * 写方法时，类似取号过程，有事件循环来接收处理，真正执行时操作的是libuv的线程池
   * 因为接收任务时时单线程的，不需要进程/线程切换上下文，所以说node是单线程的，维度不同
   * libuv 执行时是多线程的
   * **维度不同**

7. node.js 应用

   ![node.js应用场景](E:\Node.js\node笔记1附件\node.js应用场景.png)

   * web应用（低延时：API、即使聊天，RPC）
   * **微服务**
   * 前端构建（**Webpack,Vue,React使用node.js写的？！**）
   * 封装Api
   * 组装RPC服务 通过RPC调用封装对数据库的操作
   * **vscode 基于nodejs 'electron'模块构建的**

   - 1）跨平台：覆盖你能想到的面向用户的所有平台，传统的PC Web端，以及PC客户端 `nw.js/electron` 、移动端 `cordova`、HTML5、`react-native`、`weex`，硬件 `ruff.io` 等

      PC：web应用打包后可以在：mac ,linux ,windows

     移动：安卓  ios

   - 2）Web应用开发：网站、Api、RPC服务等

   - 3）前端：三大框架 React \ `Vue` \ `Angular` 辅助开发，以及工程化演进过程（使用`Gulp` /Webpack 构建 Web 开发工具）

   - 4）工具：`npm`上各种工具模块，包括各种前端预编译、构建工具 `Grunt` / `Gulp`、脚手架，命令行工具，各种奇技淫巧等

   - 1）初衷，server端，不想成了前端开发的基础设施
     2）命令行辅助工具，甚至可以是运维
     3）移动端：cordova，pc端：nw.js和electron
     4）组件化，构建，代理
     5）架构，前后端分离、api proxy
     6）性能优化、反爬虫与爬虫
     7) 全栈最便捷之路

## node调试

* 打日志 console.log
* 断点：node debugger/node inspector /vscode
* **测试驱动开发**（tdd|bdd）自己写测试

# 学习

* os
* 算法
* 数据结构
* 设计模式
* 编译原理
* 缓存 / 浏览器缓存

## 3个层次

* 跟人学
* 博客，关注大牛
* 自学 看书本

##  提高

* 质量跟眼界
* git上找好的项目练习  https://github.com/i5ting/Study-For-StuQ
* 坚持写文章 坚持看开源项目 
* 每日精进
* **上班要学习相关，下班学不相干的，别犯傻**
* 积极，遇到问题不怕不躲不避，要相信自己能解决
* 不要玻璃心，要有能力才行，没有人要照顾你的情绪
* 努力学习当前，并准备好下一阶段的应变，千万不要总想安逸，会死的很惨的
* **闲时要有吃紧的心思，忙里要有偷闲的乐趣**
* 坚持会产生自信，苦难会创造机会

# 全栈

* UI /UE
* 浏览器工作原理
* http协议
* 设计模式
* 无障碍访问的方法
* 效率工具
* 知识库
* 提炼组件 插件

## 如何学习Node.js 

1. 书籍  多读多练 记忆力 理解这记忆

   * 《JavaScript权威指南》多看，列文档结构，概括知识点
   * 《JavaScript高级编程》
   * 《JavaScript设计模式》
   * node in action 
   * 深入浅出Node.js 朴灵  偏向原理
   * 实践类的  雷宗民 赵坤
   * **typescript**
   * thinkJs  eggJS

2. promise
   - Node.js最新技术栈之Promise篇  <https://cnodejs.org/topic/560dbc826a1ed28204a1e7de>
   - 理解 Promise 的工作原理 <https://cnodejs.org/topic/569c8226adf526da2aeb23fd>
   - Promise 迷你书 https://liubin.github.io/promises-book/

3. 查看离线文档，深入理解Api

   - https://kapeli.com/dash
   - https://zealdocs.org/download.html#windows  **windows下，一定要用起来**

4. node调试及vscode使用

5. node测试框架

   ​	ava 单元测试

   ​	集成测试

   ​	e2e  nightwatch

   ​	自动化测试：

6. JavaScipt友好语言 

   ​	使用其他语法实现，但最终编译为js语言

7. TypeScript 

   - 规模化编程  静态类型 面向对象
   - typescript+vscode =神器？？？
   - typesciprt、babel(es)
   - nestjs框架+tyeorm  

8. ES6

   - classs /extends / supper

9. node中try/catch无法捕获异步的异常，未来的错误，无法预知

10. 缓存 

11. 微服务 

    网关

    mq?

12. node怎么用在前端的？


## node.js 环境

   * nvm  version  控制node版本，可安装多个版本的node
   * nrm  registry 管理node的仓库地址
   * npm package 包管理

   nvm

   ```shell
   $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
   
   $ echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
   $ echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm' >> ~/.zshrc
   $ source ~/.zshrc
   
   $ nvm install 0.10
   $ nvm install 4
   $ nvm install 6
   $ nvm install 8
   
   ```

   nrm 

   ```shell
   $ npm install --global nrm --registry=https://registry.npm.taobao.org
   $ nrm use cnpm
   ```

   npm

   重点：会去验证一下

   ```shell
   npm i xx 安装，但不记录到package.json中 
   npm i --save 
   npm i -S
   npm i --save-dev
   npm i -D  
   npm i -g 全局安装 bin配置
   ```

## node.js异步流程控制

   * Api写法：Error-first Callback 和 EventEmitter

   - 中流砥柱：Promise 
   - 终极解决方案：Async/Await

5. EventEmitter

   - 观察者模式“发布/订阅” publish/subscribe 

   ```js
   var EventEmitter = require('events')
   var util = require('util')
   
   var MyEmitter = function () {
    
   }
   
   util.inherits(MyEmitter, EventEmitter)
   
   const myEmitter = new MyEmitter();
   
   myEmitter.on('event', (a, b) => {
     console.log(a, b, this);
       // Prints: a b {}
   });
   
   myEmitter.emit('event', 'a', 'b');
   
   ```

6. promise

   Promise意味着[许愿|承诺]一个还没有完成的操作，但在未来会完成的。

   与Promise最主要的交互方法是通过将函数传入它的then方法从而获取得Promise最终的值或Promise最终最拒绝（reject）的原因。

   要点有三个：

- 递归，每个异步操作返回的都是promise对象
- 状态机：三种状态转换，只在promise对象内部可以控制，外部不能改变状态
- 全局异常处理

定义：

每个Promise定义都是一样的，在构造函数里传入一个匿名函数，参数是resolve和reject，分别代表成功和失败时候的处理

```js
var promise = new Promise(function(resolve, reject) {
// do a thing, possibly async, then…
if (/* everything turned out fine */) {
resolve("Stuff worked!");
}
else {
reject(Error("It broke"));
}
});
```

调用

它的主要交互方式是通过then函数，如果Promise成功执行resolve了，那么它就会将resolve的值传给最近的then函数，作为它的then函数的参数。如果出错reject，那就交给catch来捕获异常就好了

```js
promise.then(function(text){
console.log(text)// Stuff worked!
return Promise.reject(new Error('我是故意的'))
}).catch(function(err){
console.log(err)
})
```

8. async await

```
exports.list = async (ctx, next) => {
try {
let students = await Student.getAllAsync();
await ctx.render('students/index', {
students : students
})
} catch (err) {
return ctx.api_error(err);
}
};
```

它做了3件事儿
- 通过await Student.getAllAsync();来获取所有的students信息。
- 通过await ctx.render渲染页面
- 由于是同步代码，使用**try/catch**做的异常处理

# node框架

| 框架名称           | 特性                             | 点评                                                         |
| ------------------ | -------------------------------- | ------------------------------------------------------------ |
| Express            | 简单、实用，路由中间件等五脏俱全 | 最著名的Web框架                                              |
| Derby.js && Meteor | 同构                             | 前后端都放到一起，模糊了开发便捷，看上去更简单，实际上上对开发来说要求更高 |
| Sails、Total       | 面向其他语言，Ruby、PHP等        | 借鉴业界优秀实现，也是 Node.js 成熟的一个标志                |
| MEAN.js            | 面向架构                         | 类似于脚手架，又期望同构，结果只是蹭了热点                   |
| Hapi和Restfy       | 面向Api && 微服务                | 移动互联网时代Api的作用被放大，故而独立分类。尤其是对于微服务开发更是利器 |
| ThinkJS            | 面向新特性                       | 借鉴ThinkPHP，并慢慢走出自己的一条路，对于Async函数等新特性支持，无出其右，新版v3.0是基于Koa v2.0的作为内核的 |
| Koa                | 专注于异步流程改进               | 下一代Web框架                                                |
| Egg                | 基于Koa，在开发上有极大便利      | 企业级Web开发框架                                            |

# Web编程核心

- 异步流程控制（前面讲过了）
- 基本框架 Koa或Express，新手推荐Express，毕竟资料多，上手更容易。如果有一定经验，推荐Koa，其实这些都是为了了解Web编程原理，尤其是中间件机制理解。
- 数据库 mongodb或mysql都行，mongoose和Sequelize、bookshelf，TypeOrm等都非常不错。对于事物，不是Node.js的锅，是你选的数据库的问题。另外一些偏门，想node连sqlserver等估计还不成熟，我是不会这样用的。
- 模板引擎， ejs，jade，nunjucks。**理解原理**最好。尤其是extend，include等高级用法，理解布局，复用的好处。其实前后端思路都是一样的。

# 移动端开发

native < hybrid < rn/weex < h5

# web开发概览

![web开发](E:\Node.js\node笔记1附件\web开发.png)

# nginux



# 模块

* util
  - inherits方法
* Bluebird  Promise/a+规范的实现模块
  - 避免Node.js内置Promise实现 问题，使用与所有版本兼容
  - 避免Node.js 4曾经出现的内存泄露问题
  - 内置更多扩展，timeout、 promisifyAll等，对Promise/A+规范提供了强有力的补充
* Promise/a+规范



## 名词

LTS：Long Term Support 长期支持

DIRT：data-intensive real-time  数据敏感实时应用

#  MAC常用软件

### 常用软件

- 1）oh my zsh是我最习惯的shell，终端下非常好用

配合iterm2分屏 + spectacle全屏，几乎无敌

- 2）brew是mac装软件非常好的方式，和apt-get、rpm等都非常类似

安装4个必备软件

- brew install git 最流行的SCM源码版本控制软件
- brew install wget 下载、扒站神器
- brew install ack  搜索代码神器
- brew install autojump 终端下多目录跳转神器

- 3）vim

我虽然不算vim党，但也深爱着。janus是一个非常好用的vim集成开发环境。比如ctrl-p、nerdtree等插件都集成了，对我这种懒人足够了。

# 网站

http://i5ting.github.io/Study-For-StuQ/        开源项目学习介绍

https://github.com/trending/javascript?since=daily       开源项目排行榜  可以按时间及语言分类