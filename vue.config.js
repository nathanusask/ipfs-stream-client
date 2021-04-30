module.exports = {
    devServer: {
        proxy: {
            '^/live': {
                target: 'http://192.168.31.91:9090',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/live': '/static' },
            },
            '^/replay': {
                target: 'http://192.168.31.90:31090',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/replay': '/replay' },
            },
            '^/static': {
                target: 'http://192.168.31.90:31090',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/static': '/static' },
            },
        },
    },
}
