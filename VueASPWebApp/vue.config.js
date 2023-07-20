/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true
})*/
module.exports = {
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
}
