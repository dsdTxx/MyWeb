#!/bin/bash
#接收参数
read -p "请输入整数num1: " num1
read -p "请输入整数num2: " num2
#求和 (( ))
sum=$(($num1+$num2))
echo $sum
