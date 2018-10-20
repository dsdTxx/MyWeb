#!/bin/bash

#简易计算器
read -t 5 -p  "请输入一个整数num1:" num1
read -t 5 -p "请输入一个整数num2:" num2
read -n1 -t 5 -p  "请输入运算符 + - * /:" opr 
ret=0
#判断是否输入数据 是否为空
if [ -z "$num1" -o -z "$num2" ]
	then #至少有一个为空
	echo -e "\n有参数为空"
	exit 11
else 
	if [ "$opr" == "+"  ]
	    then 
		ret=$(($num1+$num2))
	elif [ "$opr" == "-"  ]
	    then
		ret=$(($num1-$num2))
	elif [ "$opr" == "*"  ]
	    then
		ret=$(($num1*$num2))
	elif [ "$opr" == "/"  ]
            then 
		if [ "$num2" -eq  0  ]
			then 
			echo -e “\n除数不可为0”
			exit 12
		 else 
			ret=$(($num1/$num2))
		fi
       else
	    echo -e "\n输入的操作符不符合规定"
	    exit 13
       fi   #一定要注意结尾
fi

echo -e  "\n$ret"	
