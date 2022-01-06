// 二维码生成
const QRCode = require('qrcode')

// base64解码保存
const base64 = require('base64-min');


//生成二维码
function getQRCode(params) { //params -- 参数
    QRCode.toString(params, function(err, url) {
        console.log(params + "该链接生成的二维码：");
        console.log(url);
    })
}

//保存二维码
function saveQRCode(params) { // params -- base64字符串
    QRCode.toDataURL(params, function(err, url) {
        let base = url.split(',')[1]
        let pictureName = url.split(":")[1].split(';')[0].split('/')
        pictureName = pictureName[0] + '.' + pictureName[1]
        let path = "/"

        //解码base64保存图片
        base64.decodeToFile(base, pictureName)
    })
}

module.exports = async(proname) => {
    // console.log(proname);
    getQRCode(proname)

    saveQRCode(proname)
}