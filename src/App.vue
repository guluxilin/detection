<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import LayOut from './components/Sort/LayOut.vue'
export default {
  name: 'App',
  components: {
    LayOut
  }
}
</script>
<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #020308;
  overflow: hidden;
}
</style>
