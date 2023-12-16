<template>
  <div>
    <Header/>
      <!-- 路由组件的出口 -->
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  // 引入非路由组件
  import Header from './components/Header' // Header组件
  import Footer from './components/Footer' // Footer组件

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    }
  }
</script>

<style>

</style>
