#!/bin/bash
#判断输入的是yes 还no 
read -n1 -p "请输入y或n：" test
case $test in 
	y | Y)
	echo -e "\n yes"
	;;
	n | N)
	echo -e "\n no"
	;;
	*)
	echo -e "\n 不符合要求"
	;;
esac 
