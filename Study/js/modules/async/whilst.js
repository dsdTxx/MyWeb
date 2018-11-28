let async=require('async')
/**
 * while 
 * 循环执行iteratee中的async funtion
 * 循环条件 test 返回 true
 * iteratee 函数接受callback  函数的所有分支都要调用callback，否则不会循环
 */

// var count=0;
// async.whilst(
//     //test  
//     function(){
//         return count<5;
//     },
//     //iteratee
//     function(callback){
//         count ++;
//         setTimeout(function(){
//             callback(null,count)
//         },1000)
//     },
//     //callback  结束时处理结果或错误的方法
//     function(err,data){
//         console.log(data); 
//     }
// )
//5s后输出 5


// //iteratee中一定要调用callback 否则不循环
// var count2=0;
// async.whilst(
//     //test  
//     function(){
//         return count2<5;
//     },
//     //iteratee,
//     function(callback){
//         count2 ++;
//         if(count2>=5){
//             setTimeout(function(){
//                 callback(null,count2)
//             },1000)
//         }else{
//             console.log(count2);
//         }
//     },
//     //callback 结束时处理结果或错误的方法
//     function(err,data){
//         console.log(data); 
//     }
// )
// //直接输出 1 后结束


//注意iteratee中函数的处理方式
// var count3=0;
// async.whilst(
//     //test  
//     function(){
//         return count3<5;
//     },
//     //iteratee,接收callback函数，当结束循环或发生错误时执行 
//     // 1s 后直接输出  5  判断后执行的else 没有setTimeout 等待
//     function(callback){
//         count3 ++;
//         if(count3>=5){
//             setTimeout(function(){
//                 callback(null,count3)
//             },1000)
//         }else{
//             console.log(count3)
//             callback(null,null);
//         }
//     },
//     //callback 结束时处理结果或错误的方法
//     function(err,data){
//         console.log(data); //5s后返回结果
//     }
// )
/**
 * 1
 * 2
 * 3
 * 4
 * 5(等待1s后输出)
 */


 //没有callback 进行错误处理也可以
var count4=0;
async.whilst(
    //test  
    function(){
        return count4<5;
    },
    //iteratee,接收callback函数，当结束循环或发生错误时执行 
    // 1s 后直接输出  5  判断后执行的else 没有setTimeout 等待
    function(callback){
        count4 ++;
        setTimeout(function(){
            console.log(count4)
            callback(null,count4)
        },1000)
    }
)
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 */






