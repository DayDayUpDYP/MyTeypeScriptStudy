const path = require('path');

//webpack中的所有配置信息都应该写在moudle.exports中
module.exports = {
    //指定入口文件
    entry:"./src/index.ts",

    //指定打包文件所在目录
    output:{ 
        //指定打包后的目录
        path:path.resolve(__dirname,'dist'),
        //打包后的文件名字
        filename:'boundle.js'
    },

    //指定webpack打包时需要使用的模块
    module: {
        //指定要加载的规则
        rules:[
            {
                //test指定的是规则生效的文件
                test:/\.ts$/,  //正则表达式 表示匹配所有ts结尾的文件
                use:'ts-loader',   //需要使用的loader
                //排除那些文件
                exclude:/node-modules/
            }
        ]
    }
}