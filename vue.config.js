module.exports = {
    devServer: {
        port: 8888,
        host: '0.0.0.0',
        https: false,
        open: true,
        proxy: {
            '/dev-api': {
                //
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true,
                pathRewrite: {
                    '^/dev-api': ''
                }
            }
        }
    },
    lintOnSave: false,
    productionSourceMap: false
}