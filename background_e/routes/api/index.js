var express = require('express');
var router = express.Router();
const ArticleModel = require('../../models/articleModel')

// 获取文章列表（所有文章）
router.get('/articlesList', function(req, res, next) {
    // res.send('成功！');
    // console.log(req.body);
    ArticleModel
    .find()
    .exec(
        (err, data) => {
            // 添加失败提醒
            if (err) {
                res
                .json({
                    code: '1001',
                    data: null
                })
                return
            }
            // 添加成功提醒
            // console.log(data);
            res
            .json({
                code: '0000',
                data: data //mongoDB中的数据转为json格式作为响应
            })
        }
    )
});

// 获取单篇文章
router.get('/article/:uniformId', function(req, res, next) {
    let {uniformId} = req.params
    ArticleModel
    .find({
        uniformId:uniformId
    })
    .exec(
        (err, data) => {
            // 获取失败提醒
            if (err) {
                res
                .json({
                    code: '1002',
                    data: null
                })
                return
            }
            // 获取成功提醒
            // console.log(data);
            res
            .json({
                code: '0000',
                data: data //mongoDB中的数据转为json格式作为响应
            })
        }
    )
});

module.exports = router;
