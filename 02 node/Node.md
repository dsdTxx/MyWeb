# Node

## 语言

### 1、单线程

* Node是单线程，没有线程切换及死锁的问题，简化了编程
* 实现多线程，开启多个Node实例

## 多进程

###  Cluster

* Node.js在单个线程中运行单个实例。 用户(开发者)为了使用现在的多核系统，有时候,用户(开发者)会用**一串Node.js进程去处理负载任务**。

```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);

  // 衍生工作进程。
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  // 工作进程可以共享任何 TCP 连接。
  // 在本例子中，共享的是一个 HTTP 服务器。
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('你好世界\n');
  }).listen(8000);

  console.log(`工作进程 ${process.pid} 已启动`);
}

```



