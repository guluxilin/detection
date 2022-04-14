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
    console.log(2)
    console.log(this.maxNum)
    console.log(this.maxNum[0])
    for (let i = 0; i < 5; i++) {
      let s = this.cdata.indicatorData[i]
      s.max = this.maxNum[i]
      this.cdata.indicatorData.splice(i, 1, s)
    }
    for (let i = 0; i < 5; i++) {
      this.cdata.data.splice(i, 1, 0)
    }
    console.log('cdata')
    console.log(this.cdata)
  },
  watch: {
    dataNum: {
      handler (val) {
        for (let i = 0; i < 5; i++) {
          let s = this.cdata.indicatorData[i]
          s.max = this.maxNum[i]
          this.cdata.indicatorData.splice(i, 1, s)
        }
        for (let i = 0; i < 5; i++) {
          this.cdata.data.splice(i, 1, val[i])
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
          [10, 10, 10, 10, 10]
        ]
      }
    }
  },
  components: {
    Chart
  }
}
</script>
