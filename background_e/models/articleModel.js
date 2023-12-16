const mongoose = require('mongoose')

let ArticleSchema = new mongoose.Schema({
    uniformId: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    article: {
        type: String,
        require: true
    }
})

// 创建模型对象
let ArticleModel = mongoose.model('articles', ArticleSchema)

module.exports = ArticleModel