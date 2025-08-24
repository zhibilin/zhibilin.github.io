#!/bin/bash
# 将打包后的文件解压到指定目录nginx/docs-zhibilin-coding/，同时配置nginx配置文件使之生效
# 部署脚本会在部署组的每台机器上执行。一个典型脚本逻辑如下：先将制品包（在下载路径中配置的下载路径）解压缩到指定目录中，再执行启动脚本（通常在代码中维护，如示例中deploy.sh）。关于这个例子的详细解释见 https://help.aliyun.com/document_detail/153848.html 
# mkdir -p /home/admin/app/docs-zhibilin-coding-app
# tar zxvf /home/admin/app/package.tgz -C /home/admin/app/docs-zhibilin-coding-app
# cd /home/admin/app/docs-zhibilin-coding-app
mkdir -p /usr/local/nginx/html/vue-app/docs-zhibilin-coding-app
cp -r ./dist/* /usr/local/nginx/html/vue-app/docs-zhibilin-coding-app

