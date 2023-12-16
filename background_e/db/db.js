// success:数据库连接成功的回调
// error:数据库连接失败的回调

// 导入配置文件
const {
    DBHOST,
    DBPORT,
    DBNAME
} = require('../config/config.js')

module.exports = function(success, error) {
    // 1.安装mongoose
    // 2.导入mongoose
    const mongoose = require('mongoose')

    // 3.连接mongodb服务
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    // 4.设置回调
    mongoose.connection.on('open', () => {
        success()
    })

    mongoose.connection.on('error', () => {
        error()
    })

    mongoose.connection.on('close', () => {
        console.log('连接关闭');
    })
}
