const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        logLevel: 'debug'
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }

  // apis: require.context('@/apis', true, /\.js$/),

  // chainWebpack: config => {
  //   config.resolve.alias.set('api', path.resolve('./src/apis/index.js'))
  //   config.plugin('provide').use(webpack.ProvidePlugin, [
  //     {
  //       api: 'api'
  //     }
  //   ])
  // }
})
