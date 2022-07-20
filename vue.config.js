const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  runtimeCompiler: true,
  transpileDependencies: true,
  // NOTE: set alias via `configureWebpack` or `chainWebpack`
  configureWebpack: {
    devServer : {
      proxy: {
        '/api': {
          target: 'http://localhost:8000'
        },
      },
    },
    resolve: {
      alias: {
        'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
        'balm-ui-css': 'balm-ui/dist/balm-ui.css'
      }
    }
  }
})
