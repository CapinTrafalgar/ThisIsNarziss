<template>
    <div class="header">
        <router-link 
            class="nav"
            to="/home"
        >
            <i class="el-icon-s-home"></i>
            {{ navs[0] }}
        </router-link>
        <router-link 
            class="nav"
            to="/AboutMe"
        >
            <i class="el-icon-user-solid"></i>
            {{ navs[1] }}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                navs: [
                    '主页', 
                    '关于我',
                ],
            }
        }
    }
</script>

<style scoped lang="less">
    .header {
        // position: relative;
        .nav {

            width: 100px;
            margin: 5px 20px;
            border: black solid 5px;
            padding: 10px;
            border-radius: 20px;

            // 字体
            font-family: "霞鹜文楷", 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-weight: bold;
            color: black;
            // 去掉下划线
            text-decoration: none;

            // 让div中的文本居中
            text-align: center;
            
            // 动画
            // 
            
        }

        // 让这几个div居中
        display: flex;
        justify-content: center;
        // text-align: center;
    }
</style>