let async=require('async')


var count=0;
async.whilst(
    //test  
    function(){
        return count<5;
    },
    //iteratee,接收callback函数，当结束循环或发生错误时执行 
    // 1s 后直接输出  5  判断后执行的else 没有setTimeout 等待
    function(callback){
        count ++;
        if(count>=5){
            setTimeout(function(){
                callback(null,count)
            },1000)
        }else{
            callback(null,null);
        }
    },
    //callback 结束时处理结果或错误的方法
    function(err,data){
        console.log(data); //5s后返回结果
    }
)

