const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // apis: require.context('@/apis', true, /\.js$/),

  chainWebpack: config => {
    config.resolve.alias.set('api', path.resolve('./src/apis/index.js'))
    config.plugin('provide').use(webpack.ProvidePlugin, [
      {
        api: 'api'
      }
    ])
  }
})
