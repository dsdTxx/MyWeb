#!/bin/bash
read -p "请输入姓名:" name
echo $name

read -p "请输入年龄:" -s  age
echo -e  "\n"

echo $age

read -p  “请输入性别[F\M]:” -n 1  sex
echo -e "\n"
echo  $sex
