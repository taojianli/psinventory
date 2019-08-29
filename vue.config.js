const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:2019',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('@', resolve('src'))
      .set('util', resolve('@/util'))
      .set('asset', resolve('@/asset'))
  }
}
