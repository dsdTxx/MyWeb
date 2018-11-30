const xlsx=require('node-xlsx');
const fs=require('fs')

/**
 * 将数据导出到excel
 */
//构建数据 arr
const data = [[1, 2, 3], [true, false, null, 'sheetjs'],
 ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
//build 将arr构建为excel数据 返回buffer 
//build([{name:"",data:data},{}]) 每个对象是一个sheet页 
const buffer=xlsx.build([{name:"mySheetName",data:data},{name:"mySheet2",data:data}])
//将buffer写入到文件中 
// fs.writeFile('../data/test.xlsx',buffer,(err)=>{

// })


/**
 * 解析excel数据 将buffer/file 解析为Object
 */

const objFromFile=xlsx.parse('../data/test.xlsx');
console.log(objFromFile);

const objFromBuffer=xlsx.parse(buffer);
console.log(objFromBuffer);

/**
 * [ { name: 'mySheetName',
    data: [ [Array], [Array], [Array], [Array] ] },
  { name: 'mySheet2',
    data: [ [Array], [Array], [Array], [Array] ] } ]
 */

/**
 * 跨行合并
 * s 起始的行和列 
 * e 结束的行和列
 */

const range = {s: {c: 1, r:0 }, e: {c:3, r:0}}; //合并  s 起始的行和列  e 结束的行和列
const option = {'!merges': [ range ]};

let buffer2 = xlsx.build([{name: "mySheetName", data: data}], option);

fs.writeFile('../data/test2.xlsx',buffer2,(err)=>{

})