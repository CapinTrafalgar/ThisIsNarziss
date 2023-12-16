<template>
  <div
    class="post"
  >
    <header class="post-header">
        <h2 id="title">{{article.title}}</h2>
        <!-- 标题下方信息，包括发布时间、作者等 -->
        <div
            id="info"
        >
            <!-- 发布时间 -->
            <span
                class=""
            >
                <a>
                    <span>发表于</span>&nbsp<time>{{article.time}}</time>
                </a>
            </span>
            <span id="sx">|</span>
            <!-- 作者 -->
            <span>
                <i></i>
                <a id="author">{{article.author}}</a>
            </span>
        </div>
    </header>
    <p 
        v-html="article.article"
    >
    </p>
  </div>
</template>

<script>
export default {
    name: "wholeArticle",
    data() {
        return {
          article: {},
        }
    },
    methods: {
      getArticle(uniformId) {
            this
            .$axios
            .get(`/article/${uniformId}`)
            .then(
                res => {
                    this.article = res.data.data[0];
                }
            )
        },
    },
    created() {
        
    },
    mounted() {
        this.getArticle(this.$route.params.uniformId)
    }
}
</script>

<style scoped lang="less">
    .post {
        // 字体
        font-family: "霞鹜文楷", "微软雅黑", 'Courier New', Courier, monospace, sans-serif;
        width: 1000px;
        height: auto;

        // background-color: skyblue;
        border: 1px;
        margin: 0 auto 70px ;

        .post-header {
            font-family: "霞鹜文楷", "微软雅黑", 'Courier New';

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
            #sx {
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
            // color: black;
            font-size: 32px;
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