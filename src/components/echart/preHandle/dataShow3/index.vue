<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  props: {
    maxNum: [],
    dataNum: []
  },
  mounted () {
  },
  watch: {
    dataNum: {
      handler (val) {
        let rate = []
        let maxrate = 0
        for (let i = 0; i < 5; i++) { rate.push(val[i] / this.maxNum[i]) }
        for (let i = 0; i < 5; i++) {
          if (rate[i] > maxrate) { maxrate = rate[i] }
        }
        for (let i = 0; i < 5; i++) {
          let s = this.cdata.indicatorData[i]
          s.max = this.maxNum[i] * maxrate
          this.cdata.indicatorData.splice(i, 1, s)
        }
        for (let i = 0; i < 5; i++) {
          this.cdata.data[0].value.splice(i, 1, val[i])
        }
      },
      deep: true
    }
  },
  data () {
    return {
      cdata: {
        indicatorData: [
          { name: '月销售额指数', max: 100 },
          { name: '月销量指数', max: 100 },
          { name: '价格指数', max: 100 },
          { name: '收藏指数', max: 100 },
          { name: '评价指数', max: 100 }
        ],
        data: [
          {
            value: [0, 0, 0, 0, 0],
            name: 'Allocated Budget'
          }
        ]
      }
    }
  },
  components: {
    Chart
  }
}
</script>
