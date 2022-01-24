//引入commander
const cli = require('cac')()
const path = require("path")

// 配置3个指令命令
const mapActions = {
    generate: {
        alias: "g",
        description: "generate QR code",
        examples: ["qrcode-cli generate <qrcode link>"],
    },
};

//获取版本号
const { version } = require('./constants.js')

cli
    .command('generate')
    .alias("g") // 命令的别名
    .action((option) => {
        require(path.resolve(__dirname, "generate"))(...process.argv.slice(3))
    })

cli.version(version);
cli.help()
cli.parse()