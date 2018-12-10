let async=require('async')
/**
 * async.series(tasks,callback)
 * tasks 数组 返回 results 数组
 *       对象 返回 results 对象
 * async.series([fun,fun],callback(err,results)) ['one','two']  
 * async.series({one:fun,two:fun},callback(err,results)) {one:1,two:2}
 * 
 * 所有函数按顺序依次执行，执行完成或发生错误调用callback函数，results为fun执行的结果
 * series 后面函数不能获取前面函数的执行结果
 * 
 */
async.series([
    function(callback) {
        // do some stuff ...
        setTimeout((callback) => {
            console.log('one被执行')
            callback(null, 'one');
        }, 200,callback);

        // setTimeout((callback) => {       //报错callback not  a function 
        //     console.log('one被执行')
        //     callback(null, 'one');
        // }, 200);
        
    },
    function(callback) {
        // do some more stuff ...
        setTimeout(() => {
            console.log('two被执行')
            callback(null, 'two');
        }, 100);
        
    }
],
// optional callback
function(err, results) {
    console.log("callback执行...")
    console.log(results)
    // results is now equal to ['one', 'two']
});

// async.series({
//     one: function(callback) {
//         setTimeout(function() {
//             console.log('one执行...')
//             callback(null, 1);
//         }, 200);
//     },
//     two: function(callback){
//         setTimeout(function() {
//             console.log('two执行...')
//             callback(null, 2);
//         }, 100);
//     }
// }, function(err, results) {
//     // results is now equal to: {one: 1, two: 2}
//     console.log('callback执行')
//     console.log(results)
// });