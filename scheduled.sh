#!/bin/bash
# 检测java程序,如果程序挂了，就执行重启
while true; do
    ps aux | grep java | grep -v grep > /dev/null
   if [ $? -ne 0 ]; then
        echo "Spring Boot application (name:ippool) not running, restarting..."
        nohup java -jar ./target/ip-pool-0.0.1-SNAPSHOT.jar  &
    fi
    sleep 60
done

