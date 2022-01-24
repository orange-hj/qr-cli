// 二维码生成
const QRCode = require('qrcode')

// base64解码保存
const base64 = require('base64-min');

// 
const readline = require("readline");
const question = ["是否保存二维码(Y/N)? ", "请输入保存路径(默认为当前路径): "];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `${question[0]} `,
});



//生成二维码
function getQRCode(params) { //params -- 参数
    QRCode.toString(params, function(err, url) {
        console.log("该链接生成的二维码：");
        console.log(url);
    })
}

//保存二维码
function saveQRCode(params, path) { // params -- base64字符串
    let savePath = path
    QRCode.toDataURL(params, function(err, url) {
        let base = url.split(',')[1]
        let pictureName = url.split(":")[1].split(';')[0].split('/')
        pictureName = pictureName[0] + '.' + pictureName[1]
        let path = "/"

        //解码base64保存图片
        base64.decodeToFile(base, savePath + pictureName)
    })
}

module.exports = async(proName) => {
    getQRCode(proName)
    rl.prompt();
    rl.on("line", (line) => {
        if (line == 'y' || line == "yes" || line == "Y") {
            rl.setPrompt(`${question[1]}`)
            rl.prompt();
            rl.on("line", (line) => {
                let path = line
                saveQRCode(proName, path)
                setTimeout(() => {
                    console.log("保存成功");
                    rl.close()
                }, 1000)
            })
        } else if (line == 'n' || line == "no" || line == "N") {
            console.log("感谢使用！");
            rl.close()
        }
    }).on("close", () => {
        process.exit(0);
    });
}