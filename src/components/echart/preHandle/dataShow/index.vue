<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        category: [
          '6月',
          '7月',
          '8月',
          '9月'
        ],
        lineData: [
          18092,
          20728,
          24045,
          28348
        ],
        barData: [
          4600,
          5000,
          5500,
          6500
        ],
        rateData: []
      }
    }
  },
  components: {
    Chart
  },
  mounted () {
    this.setData()
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
      for (let i = 0; i < this.cdata.barData.length - 1; i++) {
        let rate = this.cdata.barData[i] / this.cdata.lineData[i]
        this.cdata.rateData.push(rate.toFixed(2))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
