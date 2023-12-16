const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验工具
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: "http://localhost:3000",
        /* 开启跨域 */
        changeOrigin:true,
        pathRewrite:{                                                                               
          '^/api':'/api'
        }
      },
    },
  },
})
