

module.exports = {
  // 基本路径
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/yiyk/'
    : '/yiyk/',
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  },
  devServer: {
    port: 8081
  },
  css: undefined,
  lintOnSave: false,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true, //包含运行时编译器的 Vue 构建版本
  productionSourceMap: false,
  parallel: undefined
}
