---
title: 从零搭建服务器配置
icon: fab fa-markdown
order: 2
category:
  - 运维
tag:
  - 云服务器
---
## 前情提要
###  关于防火墙的一些命令
:::tip 
firewall-cmd（适用于 CentOS/RHEL 7 及以上）

:::tabs
@tab:active shell
```shell
# 启动防火墙
sudo systemctl start firewalld  
# 停止防火墙
sudo systemctl stop firewalld    
# 查看防火墙状态
sudo systemctl status firewalld  
# 设置防火墙开机启动
sudo systemctl enable firewalld  
# 禁用防火墙开机启动 设置完以后重启服务就不需要重新设置关闭防火墙了
sudo systemctl disable firewalld 
# 查看端口规则
sudo firewall-cmd --zone=public --list-ports
# 添加端口规则
sudo firewall-cmd --add-port=8080/tcp --permanent  # 永久允许 TCP 端口 8080
sudo firewall-cmd --add-port=8080/udp --permanent  # 永久允许 UDP 端口 8080

# 删除端口规则
sudo firewall-cmd --remove-port=8080/tcp --permanent  # 永久移除 TCP 端口 8080 规则
sudo firewall-cmd --remove-port=8080/udp --permanent  # 永久移除 UDP 端口 8080 规则

# 重新加载规则
sudo firewall-cmd --reload

# 允许 SSH 服务  设置永久生效
sudo firewall-cmd --add-service=ssh --permanent

# 允许 HTTP 服务 设置永久生效
sudo firewall-cmd --add-service=http --permanent

# 允许 HTTPS 服务 设置永久生效
sudo firewall-cmd --add-service=https --permanent

# 重新加载规则 
sudo firewall-cmd --reload


# 查看当前区域
sudo firewall-cmd --get-active-zones

# 设置默认区域
sudo firewall-cmd --set-default-zone=public

# 查看可用区域
sudo firewall-cmd --get-zones

```
:::

>通过上述命令开启 开启系统内部防火墙端口规则 80 443  22 21
### Vim的常见命令
::: tip 
>在Linux环境下，Vim是一个极其强大的文本编辑器，它支持多种模式，包括命令模式、插入模式和可视模式等，在编辑过程中，我们经常需要清屏或者比较两个文件的差异，这就需要使用到Vim的一些快捷键，本文将详细介绍Vim的清屏快捷键和vimdiff快捷键。

#### 1. 模式切换

- **普通模式（Normal Mode）**：这是 Vim 启动后的默认模式。
- **插入模式（Insert Mode）**：用于输入文本。
  - 进入插入模式：`i`（在光标前插入）、`a`（在光标后插入）、`o`（在当前行下新开一行插入）、`O`（在当前行上新开一行插入）。
- **命令行模式（Command Line Mode）**：用于执行 Vim 命令。
  - 进入命令行模式：按 `:` 键。

#### 2. 移动光标

- `h`：向左移动一个字符。
- `j`：向下移动一行。
- `k`：向上移动一行。
- `l`：向右移动一个字符。
- `w`：移动到下一个单词的开头。
- `b`：移动到上一个单词的开头。
- `e`：移动到下一个单词的结尾。
- `0` 或 `^`：移动到行首。
- `$`：移动到行尾。
- `G`：移动到文件的最后一行。
- `gg`：移动到文件的第一行。
- `Ctrl+f`：向下翻一页。
- `Ctrl+b`：向上翻一页。
- `Ctrl+d`：向下滚动半页。
- `Ctrl+u`：向上滚动半页。
- `/pattern`：搜索 pattern。
- `?pattern`：反向搜索 pattern。
- `n`：重复搜索。
- `N`：反向重复搜索。
```md
> 普通模式下的搜索和显示行号
普通模式下，按 / 键后输入你想要搜索的词或短语，然后按 Enter 键进行搜索。
搜索后，你可以按 n 键跳转到下一个匹配项，或者按 N 键跳转到上一个匹配项。
例如，要在文档中搜索单词 "example"，你可以这样做 
  - 按键esc
  - 输入':/example'
  - 按键Enter
  - 搜索后，按 n 可以跳到下一个 "example"，按 N 可以跳到上一个 "example"。
  - 如果你想进行区分大小写的搜索，确保 Vim 设置了 ignorecase 和 smartcase：
    - `:set ignorecase`
    - `:set smartcase`
  - 如果你想搜索整个文档，你可以使用 `:g/example/`。
在 Vim 中永久显示行号，你需要在 Vim 的配置文件中添加一行来启用行号显示。Vim 的配置文件通常是 .vimrc，位于用户的主目录下。

打开 .vimrc 文件，在文件中添加以下内容： 
set number

这行配置会在 Vim 启动时自动开启行号显示。

如果你只是想要临时显示行号，你可以在 Vim 普通模式以下命令：
- `set number`：vim 本次显示行号。

```

#### 3. 文本编辑

- `x` 或 `X`：删除当前字符（`X` 为向左删除）。
- `dd`：删除当前行。
- `1,$d`：删除整页内容，但是不擅长文件本身。
- `yy`：复制当前行。
- `p` 或 `P`：粘贴（`p` 为在光标后粘贴，`P` 为在光标前粘贴）。
- `u`：撤销上一步操作。
- `Ctrl+r`：重做上一步操作。
- `.`：重复上一个更改命令。
- `r`：替换当前字符。
- `R`：进入替换模式直到按下 `Esc` 返回普通模式。
- `cw`：改变当前单词。
- `c$`：改变到行尾。
- `cc`：改变整行。

#### 4. 保存和退出

- `:w`：保存文件。
- `:q`：退出 Vim。
- `:q!`：强制退出，不保存更改。
- `:wq` 或 `:x`：保存并退出。
- `ZZ`：保存并退出（与 `:wq` 相同）。

#### 5. 分割窗口

- `:vsplit filename`：垂直分割窗口打开文件。
- `:split filename`：水平分割窗口打开文件。
- `Ctrl+w + h/j/k/l`：在分割窗口间移动。
- `:close`：关闭当前窗口。

#### 6. 设置选项

- `:set nu`：显示行号。
- `:set nonu`：取消显示行号。
- `:set autoindent`：自动缩进。
- `:set noautoindent`：取消自动缩进。
- `:set tabstop=4`：设置制表符宽度为 4 个空格。
- `:set shiftwidth=4`：设置自动缩进时使用的空格数。
- `:set expandtab`：将 Tab 替换成空格。
- `:set noexpandtab`：不将 Tab 替换成空格。
#### 7. 清空文件

- `:%d`：一次性删除整个文件的所有行。
- `gg dG`：移动到文件第一行并删除从当前位置到文件末尾的所有内容。
- `:%s/.//g`：替换所有字符为空，从而清空文件内容。
- `:%y_`：将所有内容移到 `blackhole` 注册表中，相当于删除所有内容。
- `:e /dev/null`：通过重新读取一个空文件来清空当前文件的内容。

### 其他命令
- `pwd`：显示当前目录。
- `journalctl -xe`：报错信息。
- `netstat -tulnp`：查看端口占用情况。

:::
### 配置阿里云服务器
::: tip 

 操作系统：CentOS8.2
:::
#### 开启密码登录方式
![初始实例对密码登录有所限制，我们可以开启](/static/img/blog/屏幕截图-2024-09-23-180944.png "初始实例对密码登录有所限制，但我们可以开启她" =200x150)

![在线重置密码](/static/img/blog/屏幕截图-2024-09-23-182148.png "在线重置密码" =800x250)
 
:::tip 
简化文档操作：以下部分均由root账号操作 : 需设置允许root远程密码登录 
```shell
[root@localhost ~]# vim /etc/ssh/sshd_config
配置项 PermitRootLogin yes
```
#### 开启云服务器的外部防火墙
>在阿里云服务器中，我们可以通过云服务器的外部防火墙来控制访问权限。 
开启端口规则 80 443  22 21

![](/static/img/blog/屏幕截图-2024-09-23-190934.png "开启云服务器的外部防火墙")

:::
## 1、Env 环境配置

### 1.1、配置公网访问（http,https）
:::tabs
@tab ssh隧道
>SSH隧道是一种利用SSH协议建立的安全通道，它允许你在不安全的网络上安全地传输数据。SSH隧道常用于绕过防火墙限制、访问内网服务或者为不安全的连接提供加密保护。SSH隧道主要有两种类型：本地端口转发（Local Port Forwarding）和远程端口转发（Remote Port Forwarding）。

本地端口转发 (Local Port Forwarding)
```shell
#本地端口转发允许你将本地机器上的某个端口的数据转发到远程服务器上的另一个端口。这种类型的转发通常用于访问远程服务器上的服务，而这些服务可能没有暴露给外部网络。
ssh -L 8080:localhost:80 user@remote.server.com
```

远程端口转发 (Remote Port Forwarding)
```shell
#远程端口转发则是将远程服务器上的端口流量转发到本地机器或另一个远程服务器。这种方式通常用于在远程服务器上提供一个服务，而这个服务实际上是托管在另一台机器上的。
ssh -R 8080:localhost:80 user@remote.server.com
```
@tab 本地环境+内网穿透
[花生壳8客户端是一款用于实现远程访问和管理设备的工具，无需依赖公网IP，简单易用、高安全性、支持多平台使用。为用户提供了简单而安全的远程访问和管理设备的方式。无论是个人用户还是企业用户，都可以通过该客户端轻松地实现设备的远程访问和管理。
花生壳8客户端可进行远程文件、端口、域名管理等功能。数据传输稳定性强、安全性高，轻松搭建各类映射场景。](https://service.oray.com/question/15507.html)
@tab 云服务器
[阿里云服务器如何设置公网](https://startup.aliyun.com/info/1074728.html)
:::
:::warning 注意事项
- 在使用SSH隧道时，请确保SSH服务已经启用端口转发功能。
- 如果网络环境中有防火墙，可能需要额外配置防火墙规则以允许特定端口的流量。
- 长时间运行的SSH隧道可能会因为网络波动而断开，可以使用工具如autossh来帮助维持连接。
- SSH隧道是一个非常有用的工具，可以帮助解决许多网络访问的问题，但使用时也需要注意安全性和网络性能的影响。
:::
### 1.2、安装npm
:::tabs

@tab:active Shell
```shell
# installs nvm (Node Version Manager)
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# 校验安装nvm
source ~/.bashrc
command -v nvm
# 如果安装成功会显示
# nvm
# download and install Node.js 
nvm install 20
# 配置NVM镜像
# 为了提高下载速度，可以配置NVM使用国内镜像。编辑~/.nvm/nvm.sh文件，找到设置镜像的部分，并修改为：
>export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
# 然后重新加载NVM配置：
source ~/.nvm/nvm.sh
# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
# 如果你发现Node.js版本是20，但npm版本是10，这可能是因为Node.js 20捆绑了一个较旧版本的npm。你可以通过以下步骤升级npm版本。
nvm exec npm install -g npm

# 配置npm镜像
npm config set registry https://registry.npmmirror.com
# 如果之前有缓存问题，可以清理npm缓存：
npm cache clean --force
# 验证版本和镜像设置是否生效：
npm -v
npm config get registry
```
:::
### 1.3、安装git
:::tabs
@tab:active Shell
```shell
# 安装Git  
sudo yum install git
#配置 Git 用户信息
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
#配置 Git 编辑器
git config --global core.editor "vim"
# 配置 Git 别名
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
# 配置 Git 颜色 使 Git 输出更易读，可以启用颜色支持。
git config --global color.ui true
# 配置 SSH 密钥 如果你打算使用 SSH 方式访问 Git 仓库，需要生成 SSH 密钥对。默认存放位置/root/.ssh/id_rsa
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
# 生成密钥后，到生成目录下需要将公钥添加到 GitHub 上，才能使用 SSH 方式访问 Git 仓库。
ssh -T git@github.com  # 测试  根据平台选择不同命令
ssh -T git@gitlab.com # 测试  
ssh -T git@gitee.com # 测试
# 如果一切正常，你应该看到类似下面的输出：
#You've successfully authenticated, but GitHub does not provide shell access.
```
:::

### 1.4、安装jdk
::: info 
JDK 17 是 Java 开发工具包的一个重要版本，提供了许多新特性和改进。在 Linux 系统上安装 JDK 17 可以通过多种途径实现，首先，确定要从哪个源下载 JDK 17。常见的下载源有：
- [Oracle](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [Adoptium (Eclipse Temurin)](https://adoptium.net/)

这里我们以 [Adoptium (Eclipse Temurin)](https://adoptium.net/) 为例进行下载。
:::

:::tabs
@tab:active Shell
```shell
# 下载 JDK 17
wget https://download.oracle.com/java/17/archive/jdk-17.0.11_linux-x64_bin.tar.gz

#解压 JDK 17
tar -xzf jdk-17.0.11_linux-x64_bin.tar.gz
#创建一个目录来存放 JDK，并移动解压后的JDK文件夹到该目录：
mkdir -p /usr/lib/jvm/jdk17
mv jdk-17.0.11 /usr/lib/jvm/jdk17/
#设置环境变量，在 /etc/profile 中添加以下内容：
echo 'export JAVA_HOME=/usr/lib/jvm/jdk17/jdk-17.0.11' >> /etc/profile
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> /etc/profile
#使更改生效：
source /etc/profile
#验证安装
java -version
#如果一切正常，你应该看到类似下面的输出：
#plaintext
#openjdk version "17.0.7" 2023-04-18
#OpenJDK Runtime Environment (build 17.0.7+7)
#OpenJDK 64-Bit Server VM (build 17.0.7+7, mixed mode, sharing)
#通过上述步骤，你可以在 Linux 系统上成功安装和配置 JDK 17。 
:::


### 1.5、安装maven

:::tabs 
@tab Shell
```shell
# 下载maven
sudo  wget https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz --no-check-certificate

# 解压maven

sudo tar -xzvf apache-maven-3.9.6-bin.tar.gz 

#移动解压后的maven到指定目录/usr/local/maven/

sudo mkdir -p /usr/local/maven/
sudo mv apache-maven-3.9.6 /usr/local/maven/

#配置maven环境变量

#编辑环境变量，让系统能够识别Maven的安装位置。编辑/etc/profile.d/maven.sh文件（如果不存在，则创建它)
sudo vim /etc/profile.d/maven.sh
sudo echo "export M2_HOME=/usr/local/maven/apache-maven-3.9.6" >> /etc/profile.d/maven.sh
sudo echo "export PATH=$M2_HOME/bin:$PATH" >> /etc/profile.d/maven.sh
#为了让环境变量生效，运行以下命令：
source /etc/profile
# 验证是否安装成功
mvn -v
#如果成功，则输出类似如下内容：
#Apache Maven 3.9.6 (bc0240f3c744dd6b6ec2920b3cd08dcc295161ae)
#Maven home: /usr/local/maven/apache-maven-3.9.6
#Java version: 17.0.11, vendor: Oracle Corporation, runtime: /usr/lib/jvm/jdk17/jdk-17.0.11
#Default locale: en_US, platform encoding: UTF-8
#OS name: "linux", version: "4.18.0-193.28.1.el8_2.x86_64", arch: "amd64", family: "unix"
```

:::
> 配置settings.xml
- 配置maven仓库地址，参考[maven仓库配置](https://maven.apache.org/settings.html#repositories)
- 配置maven镜像地址，参考[maven镜像配置](https://maven.apache.org/settings.html#mirrors)
### 1.6、安装nginx
>安装依赖，确保Nginx编译和运行正常，打开终端执行以下命令
```shell
yum install -y wget gcc-c++ pcre-devel zlib-devel openssl-devel
```
>下载Nginx
```shell
# 例如，下载Nginx 1.24.0版本
wget https://nginx.org/download/nginx-1.24.0.tar.gz
# 如果当前目录为 ~
```
>解压Nginx
```shell
tar -zxvf nginx-1.24.0.tar.gz
```
>编译和安装
```shell
# 切换到 Nginx 解压目录
cd nginx-1.24.0
```
>创建nginx日志目录
```
mkdir /var/log/nginx/access.log
```
>安装 OpenSSL 库
```shell
sudo yum install epel-release
sudo yum install pcre-devel openssl-devel zlib-devel
```
# 编译前的配置和依赖检查

```shell
./configure --prefix=/usr/local/nginx --with-http_ssl_module

```
![](/static/img/blog/屏幕截图-2024-09-23-184311.png )

```shell
# 编译安装
make && make install
```
![](/static/img/blog/屏幕截图-2024-09-23-184749.png "出现上述画面表示成功:")


>Nginx安装完成后，会默认自动创建 /usr/local/nginx 目录，并创建必要的文件和目录，包括配置文件、日志文件等防火墙设置

:::tip 启动Nginx（如要配置Nginx自动启动则跳过这步接着看下面关于配置 Nginx 为系统服务）
```shell
# 进入Nginx的安装目录
cd /usr/local/nginx/sbin

```
```shell
./nginx
```
:::

>配置 Nginx 为系统服务

:::info
将 Nginx 制作成系统服务让你无需手动到 Nginx 安装目录下执行命令来启动它，
而是系统会在开机时自动启动 Nginx 配置 Nginx 服务文件
:::
>首先在 /etc/systemd/system/ 目录下创建一个新的服务文件，例如 nginx.service
```shell
vim /etc/systemd/system/nginx.service
```
>将以下内容复制，输入i进入编辑模式，粘贴后按esc键输入 :wq 保存并退出
```shell
[Unit]
Description=Nginx HTTP Server
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
PrivateTmp=true

[Install]
WantedBy=multi-user.target

```
>执行以下命令重新加载 systemd 配置文件 
```shell
# 后台重新加载服务
systemctl daemon-reload
```
>设置开机自启动
```shell
systemctl enable nginx
```
>执行一下命令启动Nginx服务
```shell
systemctl start nginx

```
>我的启动失败了，因为我的环境有程序使用了相同的端口
```shell
# >查看端口占用情况
netstat -tulnp
>发现JAVA应用占用了8080端口
>更改Nginx访问的8080端口(我的之前改成了8080，默认是80端口)
```
>更改Nginx访问的8080端口,只修改listen这个参数即可
```shell
vim /usr/local/nginx/conf/nginx.conf
```
>nginx.conf 参考示例
```shell
# /etc/nginx/nginx.conf 或 /etc/nginx/conf.d/default.conf
  events {
       worker_connections  1024;
   }
http {
    include       mime.types;
    default_type  application/octet-stream;

    # 日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    # 日志文件
    access_log  /var/log/nginx/access.log  main;
    error_log   /var/log/nginx/error.log;

    # 设置最大上传文件大小
    # client_max_body_size 50m;
   
   

    # 服务器块
    server {
        listen       80;
        server_name  example.com www.example.com;

        # 重定向 HTTP 到 HTTPS
        return 301 https://$host$request_uri;
    }

    server {
        listen       443 ssl;
        server_name  example.com www.example.com;

        # SSL 证书
        ssl_certificate ".pem的文件绝对路径";
   	    ssl_certificate_key ".key.pem的文件绝对路径";

        # SSL 配置
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        # 根目录
        root /usr/share/nginx/html;

        # 索引文件
        index index.html index.htm;
         # 重定向根路径 / 到 /docs
        location / {
            rewrite ^ /docs permanent;
        }
        location /docs {
            proxy_pass http://localhost:8083;  # docs vue文档：服务监听的端口
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Host $host;
            proxy_set_header X-Forwarded-Port $server_port;
            proxy_set_header Content-Length "";
            proxy_buffering off;	
        }
        # 处理根路径
        location /API {
            proxy_pass http://localhost:8080;  # JavaWeb API 服务监听的端口
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Host $host;
            proxy_set_header X-Forwarded-Port $server_port;
            proxy_set_header Content-Length "";
            proxy_buffering off;	
        }

        # 静态文件缓存
        location ~* \.(jpg|jpeg|gif|png|css|js|ico|xml)$ {
            expires max;
            log_not_found off;
        }

        # 错误页面
        error_page 404 /404.html;
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root /usr/share/nginx/html;
        }
    }
}
```
>检查Nginx 配置文件的有效性
>
```shell
cd /usr/local/nginx/sbin
sudo ./nginx -t
# 如果配置文件有效，输出应为：
# nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
# nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
```

>更改Nginx访问的8080端口,只修改listen这个参数即可
```shell
systemctl stop nginx
```

### 1.8、安装mysql
:::tabs
@tab 清除mysql
```shell
# 查看系统是否安装mysql软件
rpm -qa|grep -i mysql
# 卸载历史软件
yum remove '软件名'
```

@tab 下载mysql yum源
```shell
# 查看系统版本
cat /etc/redhat-release
# 显示CentOS Linux release 8.2.2004 (Core) 
# 获取 mysql官方yum源
```
[mysql官方yum源](http://repo.mysql.com/)

![mysql官方yum源](/static/img/blog/屏幕截图-2024-09-24-041305.png)
```shell
# 下载源
wget http://repo.mysql.com/mysql80-community-release-el6.rpm
# 安装源
yum -y install mysql80-community-release-el6.rpm
#安装yum工具包
yum -y install yum-utils
# 配置mysql 的yum源
vim /etc/yum.repos.d/mysql-community.repo  
# //修改如下
# [mysql57-community]
# name=MySQL 5.7 Community Server
# baseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch
# enabled=0   #主要是把这里修改成0
# ...
# [mysql80-community]
# name=MySQL 8.0 Community Server
# baseurl=http://repo.mysql.com/yum/mysql-8.0-community/el/7/$basearch
# enabled=1   #主要是把这里修改成1
# ...
# 或者
# [root@mysql-server ~]# yum-config-manager --enable mysql57-community    //将禁用的yum源库启用
# [root@mysql-server ~]# yum-config-manager --disable mysql80-community   //将启用的yum源库禁用
# //这种方式可以用在安装mysql脚本中，非常方便！！
 
# //1表示开启，0表示关闭



```

@tab 正式安装数据库
```shell
# 安装mysql (首先看下面改完配置文件在进行安装，要不然会报错)
yum install mysql-server
yum install mysql-devel
yum install mysql
# 查看是否安装成功
rpm -qa | grep -i mysql
 
# 如果安装完成后 启动发现Unit mysql.service could not be found.
# 或者如下信息：warning: /var/cache/yum/x86_64/7/mysql57-community/packages/mysql-community-libs-compat-5.7.37-1.el7.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID 3a79bd29: NOKEY
# 从 file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql 检索密钥
# 源 "MySQL 5.7 Community Server" 的 GPG 密钥已安装，但是不适用于此软件包。请检查源的公钥 URL 是否配置正确。
# 失败的软件包是：mysql-community-libs-compat-5.7.37-1.el7.x86_64 GPG  密钥配置为：file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
 
# # 解决方案：
# 1. 到mysql官网下载校验文件
# 2. 修改配置跳过校验
# 	vim /etc/yum.repos.d/mysql-community.repo
# 	修改对应安装版本的gpgcheck=0即可,默认值为1
# ex: （一定要修改对应版本）
# [mysql57-community]
# name=MySQL 5.7 Community Server
# baseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch/
# enabled=1
# gpgcheck=0
# gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
 
# 再次安装

```
@tab 开机自启
```shell
# 启动mysql
service mysqld start
systemctl start mysqld
 
# 停止mysql
service mysqld stop
systemctl stop mysqld
 
# 重启mysql
service mysqld restart
systemctl restart mysqld
 
# 查看mysql状态
service mysqld status
systemctl status mysqld
 
# 设置mysql开机启动
systemctl enable mysqld
```
@tab 常见问题
>解决不知道密码问题
```shell
# 1. 修改/etc/my.cnf文件
	vim /etc/my.cnf 
	# 文件末尾添加skip-grant-tables
	# skip-grant-tables：的作用就是跳过了mysql的用户验证
	port=3307
	# 修改默认端口
# 2. 重启mysql
	service mysqld restart
	# 然后直接输入mysql，不需要带任何登录参数直接回车就可以登陆上数据库
# 3. 使用mysql数据库
	use mysql;
# 4. 查看所有表
	show tables;
# 5. 查看账户信息
	select user,authentication_string from user;
	# 由于mysql数据库中的密码是加密的，不可逆的
# 6. 修改root用户的密码
	update mysql.user set authentication_string=password('your password') where user='root';
# 7. 修改密码之后，删除所有权限
	flush privileges;
# 8. 退出数据库
	exit
# 9. 恢复/etc/my.cnf文件
	# 注释掉 skip-grant-tables
# 10. 重启mysql
	service mysqld restart
# 11. 验证是否成功
	mysql -uroot -ppwd
```
>重置密码问题
```shell
# 安装完mysql 之后，登陆以后，不管运行任何命令，总是提示这个错误：
# You must reset your password using ALTER USER statement before executing this statement
# 处理步骤如下：
1. SET PASSWORD = PASSWORD('your new password');
2. ALTER USER 'root'@'localhost' PASSWORD EXPIRE NEVER;
3. flush privileges;
# 这里要注意的是your new password 必须包含数字，字母包含大小写，标点符号。不然好像是不能通过的。
# 完成以上三步退出再登，使用新设置的密码就行了，以上除了 your new password 需要修改成新密码外，其他原样输入即可。
```
>远程登录权限问题
```shell
# root权限登录
mysql -u root -p
# 使用mysql库
use mysql;
# 查看mysql库中的user表的host值(即可进行连接访问的主机/IP名称)
select host,user from user;
# 修改host值(以通配符%的内容增加主机/IP地址),当然也可以直接增加IP地址
update user set host = '%' where user ='root';
# 刷新MySQL的系统权限相关表
flush privileges;
# 再重新查看user表
select host,user from user;
# 重启服务
service mysqld restart
# 远程登录 端口P是大写 密码p是小写
mysql -h <IP/域名> -u <username> -P <port> -p
# Enter password:
示例：mysql -h 0.0.0.0 -u root -P 3307 -p
```
:::
### 1.9、 安装docker（可选）
### 1.10、安装 rabbitmq（可选）
### 1.11、安装redis（可选）
### 1.12、安装eleasticsearch(可选)
### 1.13、安装jenkins(可选)
### 1.14、安装k8s(可选)
## 2、简化部署示例
:::tabs 


@tab 前期准备
- 创建制品仓库
  - npm 仓库
  - maven 仓库
  - 普通制品仓库
- 配置本地制品仓库登录/认证
- 创建代码仓库（同上）
- 配置本地代码仓库登录/认证
- 创建流水线
- 编写deploy.yml
- 编写deploy.sh
- 运行流水线
@tab deploy.yml
```yml
sources:
  my_repo:
    type: codeup
    name: NodeJS示例代码源
    endpoint: https://atomgit.com/flow-example/node-expressjs.git
    branch: master
    triggerEvents:
      - push
      - mergeRequestMerged
    certificate:
      type: serviceConnection
      serviceConnection: "xphizc5qut19ybb8"
stages:
  java_script_code_scan_stage:
    name: "测试"
    jobs:
      java_script_code_scan_job:
        name: "JavaScript 代码扫描"
        steps:
          java_script_code_scan_step:
            name: "JavaScript 代码扫描"
            step: "JavaScriptCodeScan"
            with:
              localDependencies: "*"
              useLocalRules: false
              customNodeVersion: "20.17.0"
              incrementalScan: false
              exclusion: "test/\nbuild/\nnode_modules/\nvendor/\ndist/\n**/*.min.js\n\
                **/*-min.js\n**/*.bundle.js\n"
      node_unit_test_job:
        name: "Node.js 单元测试"
        steps:
          node_unit_test_step:
            name: "Node.js 单元测试"
            step: "NodeUnitTest"
            with:
              reportFile: "mochawesome.json"
              reportDir: "mochawesome-report"
              reportIndex: "mochawesome.html"
              versionType: "predefined"
              customNodeVersion: "20.17.0"
              run: "cnpm install && npm run test\n"  
  node_build_stage:
    name: "构建"
    jobs:
      node_build_job:
        name: "Node.js 构建"
        steps:
          node_build_step:
            name: "Node.js 构建"
            step: "NodeBuild"
            with:
              versionType: custom
              customNodeVersion: "20.17.0"
              run: "cnpm install \n cnpm install pnpm \n pnpm install \n pnpm add  dashjs hls.js \n pnpm add markmap-common \n pnpm run docs:build \n"
          artifact_upload_step:
            name: "构建物上传"
            step: "ArtifactUpload"
            with:
              uploadType: flowPublic
              artifact: "Artifacts_${PIPELINE_ID}"
              filePath: "."
  vm_deploy_stage:
    name: "部署"
    jobs:
      vm_deploy_job:
        name: "主机部署"
        component: "VMDeploy"
        with:
          downloadArtifact: true
          useEncode: false
          machineGroup: "UaJbvfrfYndefrfRXdnwFOa"
          run: "mkdir -p /home/admin/app/docs-zhibilin-coding-app/\n tar zxvf /home/admin/app/package.tgz\
            \ -C /home/admin/app/docs-zhibilin-coding-app/\n cd /home/admin/app/docs-zhibilin-coding-app/\n sh /deploy.sh restart\n"
          artifactDownloadPath: "/home/admin/app/package.tgz"
          executeUser: "root"
          artifact: $[stages.node_build_stage.node_build_job.artifact_upload_step.artifacts.Artifacts_${PIPELINE_ID}]


```
@tab deploy.sh
```sh
#!/bin/bash
# 将打包后的文件解压到指定目录nginx/docs-zhibilin-coding/，同时配置nginx配置文件使之生效
# 部署脚本会在部署组的每台机器上执行。一个典型脚本逻辑如下：先将制品包（在下载路径中配置的下载路径）解压缩到指定目录中，再执行启动脚本（通常在代码中维护，如示例中deploy.sh）。关于这个例子的详细解释见 https://help.aliyun.com/document_detail/153848.html 
# mkdir -p /home/admin/app/docs-zhibilin-coding-app
# tar zxvf /home/admin/app/package.tgz -C /home/admin/app/docs-zhibilin-coding-app
# cd /home/admin/app/docs-zhibilin-coding-app
mkdir -p /usr/local/nginx/html/vue-app/docs-zhibilin-coding-app
cp -r ./dist/* /usr/local/nginx/html/vue-app/docs-zhibilin-coding-app

```
:::


