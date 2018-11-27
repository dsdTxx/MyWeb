let async=require('async')


var count=0;
async.whilst(
    //test  
    function(){
        return count<5;
    },
    //iteratee,接收callback函数，当结束循环或发生错误时执行
    //函数直接退出，因为<5时没有调用任何callback 直接执行完了
    function(callback){
        count ++;
        if(count>=5){
            setTimeout(function(){
                callback(null,count)
            },1000)
        }
    },
    //callback 结束时处理结果或错误的方法
    function(err,data){
        console.log(data); //5s后返回结果
    }
)

