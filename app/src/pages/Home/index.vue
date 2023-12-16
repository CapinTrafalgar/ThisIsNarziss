<template>
    <div>
        <main>
            <div
                class="this-is"
            >
                <!-- 这是Home页 -->
            </div>
            <article
            >
                <Post/>
            </article>
        </main>
    </div>
</template>

<script>
    // 引入组件
    import Post from './Post'

    export default {
        name: "Home",
        components: {
            Post,
        }
    }
</script>

<style scoped lang="less">
    .this-is {
        // background-color: black;

        text-align: center;

        font-family: 'Courier New', Courier, monospace;

        color: rgb(93, 105, 116);
    }
</style>