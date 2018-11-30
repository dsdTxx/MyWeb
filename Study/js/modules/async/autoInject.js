let async=require('async')
/**
 * async.autoInject(tasks,callback)
 * 类似auto 控制tasks中方法执行逻辑顺序 后面的方法可以接收前面方法的结果
 * 区别  arry 中 funtion不是接收results 对象，而是接收参数列表 depends on are still spread into arguments
 *       funtion() 参数列表位置对应即可，参数可以简写为a b c 
 * tasks_obj function 或 array 
 *           array 前面是依赖项，最后一项是funtion(arg1,arg2,callback)
 */
async.autoInject({
    get_data:function(callback){
        console.log('get_data 开始执行')
        callback(null,'get_data_content','hahaha')
    },
    make_folder:function(callback){
        console.log('make_folder 开始执行')
        callback(null,'make_folder OK')
    },
    write_file:['get_data','make_folder',function(a,b,callback){
        console.log(a);
        callback(null,'write_file OK')
    }]
},function(err,results){
    console.log('callback')
    console.log(results)
})

// async.autoInject({
//     get_data: function(callback) {
//         // async code to get some data
//         callback(null, 'data', 'converted to array');
//     },
//     make_folder: function(callback) {
//         // async code to create a directory to store a file in
//         // this is run at the same time as getting the data
//         callback(null, 'folder');
//     },
//     write_file: function(get_data, make_folder, callback) {
//         // once there is some data and the directory exists,
//         // write the data to a file in the directory
//         callback(null, 'filename');
//     },
//     email_link: function(write_file, callback) {
//         // once the file is written let's email a link to it...
//         // write_file contains the filename returned by write_file.
//         callback(null, {'file':write_file, 'email':'user@example.com'});
//     }
// }, function(err, results) {
//     console.log('err = ', err);
//     console.log('email_link = ', results.email_link);
// });