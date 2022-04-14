<template>
  <div>
    <Chart :cdata="cdata" :bdata="bdata" :adata="adata"/>
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  props: {
    adata: {
      type: Number,
      default: 0
    },
    bdata: {
      type: Number,
      default: 0
    },
    cdata: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  components: {
    Chart
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
