#!/bin/bash
#批量解压文件q
read -t 10 -p "请输入文件目录：" dir
cd $dir
#files=$(ls *.tar.gz)
echo -e "\n" 
#echo $files
ls *.tar.gz > ls.log
for i in $(cat ls.log)
	do 
		tar -zxf $i &>/dev/null
	done
cat ls.log
rm -rf /lamp/ls.log
