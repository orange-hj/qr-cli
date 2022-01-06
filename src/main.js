//引入commander
const cli = require('cac')()
const path = require("path")

//获取版本号
const { version } = require('./constants.js')

cli
    .command('generate')
    .option('-g, --generate', 'generate qrcode')
    .action((option) => {
        require(path.resolve(__dirname, "generate"))(...process.argv.slice(3))
    })

cli.help()
cli.parse()