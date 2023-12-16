<template>
    <div>
        <ul>
            <!--
                1. class属性应该写在每一个li中，这样才能得到正确的显示效果：
                每篇文章单独显示样式，而不是整块区域；
                2. 注意 v-for 的位置
            -->
            <li
                v-for="(article, index) in articlesList"
                :key="article._id"
                class="post" 
            >
                <header class="post-header">
                    <h1 id="title">{{article.title}}</h1>
                    <!-- 标题下方信息，包括发布时间、作者等 -->
                    <div
                        id="info"
                    >
                        <!-- 发布时间 -->
                        <span
                        >
                            <a>
                                <span>发表于</span>&nbsp<time>{{article.time}}</time>
                            </a>
                        </span>
                        <span id="split">|</span>
                        <!-- 作者 -->
                        <span>
                            <i></i>
                            <a id="author">{{article.author}}</a>
                        </span>
                    </div>
                </header>
                <p 
                    v-html="article.article"
                    style="
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    "
                >
                </p>
                <div
                    style="
                        display: flex;
                        justify-content: center;
                    "
                >   
                    <router-link  
                        class="readAll"
                        :to="{ // to前面别昂了：
                            name: 'wholeArticle',
                            params: {
                                uniformId: article.uniformId
                            }
                        }"
                    >阅读全文</router-link>
                </div>
                <hr 
                    style="
                        width: 50%;
                        margin: 30px auto 30px;
                    "
                >
            </li>
        </ul>
    </div>
</template>

<script>
import router from '@/router'

export default {
    name: "postedArticles",
    data() {
        return {
            articlesList: [],
        }
    },
    methods: {
        getArticleList() {
            this
            .$axios
            .get('/articlesList')
            .then(
                res => {
                    this.articlesList = res.data.data
                }
            )
        },
        // goToArticle() {
        //     let location = {
        //         name: "wholeArticle",
        //         params: {
                    
        //         }
        //     }
        //     this.$router.push(
        //         location
        //     )
        // }
    },
    components: {
        
    },
    created() {
        this.getArticleList()
        // console.log(this.articlesList)
    },
}
</script>

<style scoped lang="less">
    .post {
        // 字体
        font-family: "悠哉字体", "霞鹜文楷","微软雅黑", 'Courier New', Courier, monospace, sans-serif;
        width: 1000px;
        height: auto;
        font-weight: 400;

        // background-color: skyblue;
        border: 1px;
        margin: 0 auto 70px ;

        .post-header {
            font-family: "霞鹜文楷", 'Courier New';
            
            text-align: center;

            h2 {
                margin: 10px 10px;
            }

            span {
                margin: 0px 5px;
            }

            #info {
                color: grey;
                font-size: 14px;
            }
            #split {
                margin: 0px 15px;
            }
        }

        ::v-deep code {
            // 字体
            font-family: 'Operator Mono', 'Courier New', "霞鹜文楷", "微软雅黑", Courier, monospace, sans-serif;
            // color: black;
        }

        ::v-deep #title {
            // 字体
            font-family: 'Operator Mono', 'Courier New', "霞鹜文楷", "微软雅黑", Courier, monospace, sans-serif;
            font-weight: bold;
            font-size: 32px;
            // color: black;
        }

        .readAll {
            display: block;
            width: 100px;
            height: 25px;
            margin: 0px 20px;
            // border: black solid 5px;
            background-color: grey;
            padding: 0px;
            border-radius: 20px;
            // 文本水平居中
            text-align: center;
            // 文本上下居中（line-height == height）
            line-height: 25px;
            // 设置字体
            font-size: 14px;

            // 去掉链接的下划线
            text-decoration: none;
            color: black;
        }
    }
</style>