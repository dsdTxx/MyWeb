## Git

### 常用命令

* $ pwd 显示当前目录
* $ ls -ah 显示目录下文件
* $ rm file 删除文件
* $ cat readme.txt 查看文件内容
* $ git status 文件状态，哪些被改过，哪些需要提交
* $ git diff 查看文件修改内容

####  查看log 

- $ git log 查看历史版本信息  $ git log --pretty=oneline  （不包括回退之前的 oneline一行显示）
- $ git log --graph --pretty=oneline --abbrev-commit  (graph带合并的路径图示   --abbrev简化的版本号 )
- $ git  reflog 查看所有的版本信息（包括回退的）

###  创建仓库

* $ git init 创建仓库添加提交

### 添加文件

* $ git add <file>  提交单个文件
* $ git commit -m <message> 提交，并写入修改原因
* $ git add -A 提交所有变化
* $ git add -u 提交修改（modified）和  删除（delete）文件，不包括新文件（new）
* $ git add . 提交修改及新文件，但不包括删除文件

### 版本回滚

* $ git log 查看历史版本信息  $ git log --pretty=online  （不包括回退之前的）
* $ git  reflog 查看所有的版本信息（包括回退的）
* 版本号  字符串序列
* 恢复到历史版本
  - git reset --hard  head^ 
  - git reset --hard  head~20 往前推20个版本
  - git reset --hard 88ff25(版本号)

![1535697753932](C:\Users\TIANXI~1\AppData\Local\Temp\1535697753932.png)

### 工作区  版本库

![1535698306817](C:\Users\TIANXI~1\AppData\Local\Temp\1535698306817.png)

* master时git默认创建的

### 撤销文件修改

* $ git checkout -- file 放弃工作区间修改 ,修改了文件，并没有add
* $ git  reset head --file 放弃暂存区（stage）修改，已经add了，然后重复上一步，回到未修改状态
* $ git reset  --hard 版本号 master中 撤回到某一版本  工作区和暂存区都恢复

### 删除文件

* $ rm file 删除工作区的文件 

* $ git rm file 删除文件（暂存区的）delo
* $ git commit -m 'msg' 提交删除到master

### SSH

* Secure Sheell 安全外壳协议
* 明文--》密文
* 非对称加密
* 创建ssh key

```tex
$ ssh-keygen -t rsa -C "youremail@example.com"
```

* id_rsa 私钥  id_rsa.pub 公钥  

### 远程仓库

* 前提：新建远程仓库

* 将本地仓库同远程仓库关联，进入工作目录
* 本地推送至远程仓库   
* $ git remote add origin https://github.com/dsdTxx/learngit.git
* 克隆远程仓库内容至本地仓库，本地无需新建gitskills
* $ git clone https://github.com/dsdTxx/gitskills

* 推送本地master至服务器

```tex
$ git push -u origin master  //-u 第一次起关联作用
$ git push origin master //后续

$ git pull --rebase origin master
```

![1535979311777](C:\Users\TIANXI~1\AppData\Local\Temp\1535979311777.png)

###  分支

* 切换分支，合并只是移动指针，所以速度很快

![1535705963288](C:\Users\TIANXI~1\AppData\Local\Temp\1535705963288.png)

* 新建分支 $ git branch <name>  name:分支名dev\dev2
* 切换分支 $ git checkout dev2
* 查看所有分支 $ git branch (当前分支带*)
* 创建+切换 $ git checkout -b dev3

#### 合并分支

* $ git merge dev2 将dev2合并至当前分支

![1535966422723](C:\Users\TIANXI~1\AppData\Local\Temp\1535966422723.png)

* $ git merge --no-ff -m 'merge with no-ff' dev3 禁用fast-forward  

![1535966546956](C:\Users\TIANXI~1\AppData\Local\Temp\1535966546956.png)

* 删除分支 $ git branch -d dev2  （当前分支不为dev2）
* 强制删除分支 $ git branch -D dev2