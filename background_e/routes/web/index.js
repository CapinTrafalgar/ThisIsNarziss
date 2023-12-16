var express = require('express');
var router = express.Router();
const ArticleModel = require('../../models/articleModel')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/', function(req, res, next) {
    // res.send('成功！');
    // console.log(req.body);
    ArticleModel
    .create( // 往数据库中添加数据
        {
            ...req.body
        },
        (err, data) => {
            // 添加失败提醒
            if (err) {
                console.log(err);
                res
                .status(500)
                .send('添加失败！')
                return
            }
            // 添加成功提醒
            // console.log(data);
            res
            .send('添加成功')
        }
    )
});

module.exports = router;
