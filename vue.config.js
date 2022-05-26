const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://39.98.123.211',
        target: 'http://gmall-h5-api.atguigu.cn',

      },

    }
  }
})
