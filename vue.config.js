module.exports = {
    configureWebpack: {
        config: resolve.alias // 添加别名
        .set('@', resolve('src'))
        .set('@assets', resolve('src/assets'))
        .set('@common', resolve('src/common'))
        .set('@components', resolve('src/components'))
        .set('@views', resolve('src/views'))
      
        }
    }