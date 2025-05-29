# 使用指定版本 Node.js 基底映像
FROM node:18.14.0

# 安裝指定版本的 Angular CLI 與 npm
RUN npm install -g @angular/cli@17.3.6 \
    && npm install -g npm@9.8.1

# 建立工作目錄（這只是容器起始進入點，實際專案會掛載進來）
WORKDIR /usr/src/app

# 對外開放 4200 port
EXPOSE 4200

# 啟動後給 bash，讓你可手動進行 ng new、ng serve 等指令
CMD [ "bash" ]
