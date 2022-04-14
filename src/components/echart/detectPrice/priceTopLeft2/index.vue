<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import topsis from '@/mainData/topsis'
export default {
  mounted () {
    let sum = 0
    for (let i = 0; i < 5; i++) {
      sum = sum + parseFloat(topsis.factorWeight[i])
    }
    for (let i = 0; i < 5; i++) {
      topsis.factorWeight.splice(i, 1, (parseFloat(topsis.factorWeight[i]) / sum).toFixed(3))
      this.cdata.dataNum[0].splice(i, 1, parseFloat(topsis.factorWeight[i]))
    }
  },
  data () {
    return {
      cdata: {
        indicatorData: [
          { name: '销量', max: 0.5 },
          { name: '商品描述', max: 0.5 },
          { name: '服务', max: 0.5 },
          { name: '物流', max: 0.5 },
          { name: '开店时间', max: 0.5 }
        ],
        dataNum: [
          [0, 0, 0, 0, 0]
        ]
      }
    }
  },
  components: {
    Chart
  }
}
</script>
