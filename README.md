## 二维码生成工具
描述：使用命令行工具将字符串（链接）转化成二维码

### 使用方法
qrcode-cli --help  查看指令/命令

qrcode-cli -v      查看版本号

qrcode-cli  generate/g   xxx（字符串） // 生成二维码 可选保存二维码

### 注意事项
如果参数存在特殊字符请加上 " " (双引号)


## 保存二维码
生成二维码后会询问是否保存二维码图片   是 y/yes   否 n/no

需要手动输入保存图片的路径（默认为当前路径）
