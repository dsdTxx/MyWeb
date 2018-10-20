#!/bin/bash
#判断分区使用率是否超过限定值
test=$(df -h |grep "/dev/sda5"| awk '{print $5}'|cut -d "%" -f 1)
if [ "$test" -ge 10  ]
	then
	echo "根分区的使用率超过了10%"
fi
