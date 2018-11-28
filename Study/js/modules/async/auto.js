let async=require('async')
let fs=require('fs')

/**
 * auto 异步执行 根据参数的依赖控制执行顺序，函数名就是results的属性名
 * 
 * tasks objects {funtion,array}
 *       fun: function(callback){...callback(null,xx)}  并行执行
 *       arr: ['依赖1','依赖2',function(results,callback){ ... callback }]  有依赖前提
 *            依赖的函数名,以此来控制执行顺序 
 *            resultes 当前执行完的task的结果对象 属性名是task的name  
 *       fun和arr中，所有方法 都必须调用 callback 跳出，否则async会认为未执行完成
 *            callback(null,args) 后面参数，制定当前方法的结果
 *            callback(null,str)             name:str 字符串
 *            callback(null,str1,str2)       name:[str1,str2] 数组
 *            callback(null,{key:value})     name: obj对象 
 * concurrency number 可同时执行异步函数的数量
 * callback(err,results)  发生错误或task中函数执行完后调用  results 对象 为当前执行完的函数的结果
 *       
 */
// async.auto({
//     // this function will just be passed a callback
//     // 
//     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
//     readData2: async.apply(fs.readFile, 'data.txt', 'utf-8'),
//     readData3: function(callback){ 
//         console.log('readData3 执行')
//         callback(null,null);
//     },
//     //
    
//     showData: ['readData','readData2', function(results, callback) {
//         console.log(results); //
//         callback(null,results);
//         // callback(null,null)  //只要有callback就执行最终的回调，但是回调函数的参数不受影响，始终都是所有函数的执行结果
//     }]
// }, function(err,results){
//     console.log("callback:"+results.readData2+" 3:"+results.readData3) //函数名就是属性名
// });
//执行结果
// { readData: 'hahaha', readData2: 'hahaha' }
// callback:hahaha


async.auto({
    get_data: function(callback) {
        console.log('in get_data');
        // async code to get some data
        callback(null, 'data', 'converted to array');
    },
    make_folder: function(callback) {
        console.log('in make_folder');
        // async code to create a directory to store a file in
        // this is run at the same time as getting the data
        callback(null, 'folder');
    },
    write_file: ['get_data', 'make_folder', function(results, callback) {
        console.log(results);
        console.log('in write_file', JSON.stringify(results));
        // once there is some data and the directory exists,
        // write the data to a file in the directory
        callback(null, 'filename');
    }],
    email_link: ['write_file', function(results, callback) {
        console.log('in email_link', JSON.stringify(results));
        // once the file is written let's email a link to it...
        // results.write_file contains the filename returned by write_file.
        callback(null, {'file':results.write_file, 'email':'user@example.com'});
    }]
}, function(err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
});