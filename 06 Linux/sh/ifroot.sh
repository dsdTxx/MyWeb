#!/bin/bash
#判断当前登录者是否是root用户
test=$(env | grep USER |cut -d "=" -f 2)
if [ "$test"=="root" ]
	then
	echo "is root"
fi
