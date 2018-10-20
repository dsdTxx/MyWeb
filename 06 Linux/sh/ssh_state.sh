#!/bin/bash
#判断ssh 服务是否开启
test=$( ps aux |grep sshd | grep -v grep | wc -l )
if [ "$test" -gt 0 ]
	then 
		#将数据输出至日志文件
		echo "ssh 服务已启动" >> /tmp/autostart-acc.log
	else
		#若服务未启动，则启动ssh服务
		/etc/rc.d/init.d/sshd start &>/dev/null
		#将重启信息记录到错误日志 >> 输出信息 追加 到文件
	        echo "ssh 服务已重启" >> /tmp/autostart-err.log
fi              
