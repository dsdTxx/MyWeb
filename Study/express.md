# Application

## app.set()&app.get()

* 设置属性 获取属性 

```js
app.set('title', 'My Site');
app.get('title'); // "My Site"
```

* 可以做环境的判断

```js
//开发环境 错误处理
// development error handler
// will print stacktrace  打印
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err               //返回堆栈跟踪记录
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}        //堆栈信息不回暴露给用户
    });
});
```

