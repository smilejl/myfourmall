<template>
  <div id="app">
    <router-view></router-view>
    <main-Tabbar></main-Tabbar>
  </div>
</template>

<script>
  import mainTabbar from './components/content/mainTabbar/mainTabbar.vue'

export default {
  name: 'App',
  components: {
   mainTabbar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
