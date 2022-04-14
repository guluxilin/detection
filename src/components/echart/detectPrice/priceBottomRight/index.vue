<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import price from '@/mainData/price'
export default {
  props: {
    tableValue: {}
  },
  data () {
    return {
      drawTiming: null,
      cdata: {
        year: null,
        weekCategory: [],
        radarData: [],
        radarDataAvg: [],
        maxData: 1200,
        weekMaxData: [10, 10, 10, 10],
        weekLineData: [0, 0, 0, 0]
      }
    }
  },
  components: {
    Chart
  },
  watch: {
    tableValue (val) {
      /*  console.log('chart')
      console.log(val) */
      this.drawTimingFn(val)
    }
  },
  beforeDestroy () {
    clearInterval(this.drawTiming)
  },
  methods: {
    drawTimingFn (val) {
      this.setData(val)
    },
    setData (val) {
      // 清空轮询数据
      let priceData = []
      for (let i = 0; i < Object.keys(price.abnormalDetail).length; i++) {
        for (let j = 0; j < Object.keys(price.abnormalDetail[i].itemDetail).length; j++) {
          if (val.row[3] === price.abnormalDetail[i].itemDetail[j].itemName) {
            priceData.push(price.abnormalDetail[i].itemDetail[j].allPrice)
            break
          }
        }
      }
      let maxPrice = 0
      for (let i = 0; i < 4; i++) {
        if (parseInt(priceData[0][i]) > maxPrice) { maxPrice = parseInt(priceData[0][i]) }
      }
      this.cdata.maxData = maxPrice * 2
      this.cdata.weekCategory = []
      this.cdata.weekMaxData = []
      this.cdata.weekLineData = []
      this.cdata.radarData = []
      this.cdata.radarDataAvg = []

      let dateBase = new Date()
      this.cdata.year = dateBase.getFullYear()
      // 周数据
      for (let i = 0; i < 4; i++) {
        // 日期
        let date = new Date()
        this.cdata.weekCategory.unshift([date.getMonth() + 1, date.getDate() - i].join('/'))

        // 折线图数据
        this.cdata.weekMaxData.push(this.cdata.maxData)
        this.cdata.weekLineData.push(priceData[0][i])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
