## 二维码生成工具
描述：使用命令行工具将字符串（链接）转化成二维码

### 使用方法
qr-cli --help  查看指令/命令

qr-cli generate 参数（字符串） // 生成二维码 可选保存二维码


### 目录结构
--qr-cli
    --bin
        --cli.js
    --node_modules
    --src
        --main.js
        --...
    --package.json
    --README.md

### 需求分析
##### 1.创建工具
过程看文章 ： "  "
##### 2.添加命令
- 使用cac -- 添加依赖  npm i cac
- 引用cac -- const cli = require('cac')()
- 添加命令 -- cli.command('generate') 
##### 3.获取参数
- cli.action()=>{require(path.resolve(__dirname, "generate"))(...process.argv.slice(3))}
- process.argv -- 获取参数
##### 4.生成二维码和显示
- 引用QECode -- npm i qrcode
- 显示 -- QRCode.toString()
##### 5.保存二维码
- 引用base64-min -- npm i base64-min
- 生成base64编码 -- QRCode.toDataURL()
- 保存 -- base64.decodeToFile()


### 设计思路
不太会写
