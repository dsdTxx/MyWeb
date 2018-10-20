#!/bin/bash
#判断用户输入的是否为目录
read -p "请输入路径 绝对路径" path
if [ -e "$path" ]
	then
		echo "is dir"
	else
		echo "not a dir"
fi 
