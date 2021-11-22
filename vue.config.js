//这里修改webpack配置
const path = require('path')
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  },
}
