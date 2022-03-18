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
