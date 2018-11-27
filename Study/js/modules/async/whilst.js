let async=require('async')


var count=0;
async.whilst(
    //test  
    function(){
        return count<5;
    },
    //iteratee,接收callback函数，当结束循环或发生错误时执行 
    //5s 后输出5 每一次执行都要等待1s 
    function(callback){
        count ++;
        setTimeout(function(){
            callback(null,count)
        },1000)
    },
    //callback 结束时处理结果或错误的方法
    function(err,data){
        console.log(data); //5s后返回结果
    }
)

