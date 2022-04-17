<template>
  <div>
    <Echart
      :options="options"
      height="350px"
      width="800px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  props: {
    dataDetail: []
  },
  watch: {
    dataDetail (val) {
      console.log('charts')
      console.log(val)
      let max = 0
      let min = 1000
      for (let i = 0; i < 4; i++) {
        this.options.series[0].data.splice(i, 1, parseInt(val[0].allSale[i]))
        if (parseInt(val[0].allSale[i]) > max) { max = parseInt(val[0].allSale[i]) }
        if (parseInt(val[0].allSale[i]) < min) { min = parseInt(val[0].allSale[i]) }
        this.options.series[1].data.splice(i, 1, parseInt(val[0].allComments[i]))
        if (parseInt(val[0].allComments[i]) > max) { max = parseInt(val[0].allComments[i]) }
        if (parseInt(val[0].allComments[i]) < min) { min = parseInt(val[0].allComments[i]) }
        this.options.series[2].data.splice(i, 1, parseInt(val[0].allCollection[i]))
        if (parseInt(val[0].allCollection[i]) > max) { max = parseInt(val[0].allCollection[i]) }
        if (parseInt(val[0].allCollection[i]) < min) { min = parseInt(val[0].allCollection[i]) }
        this.options.series[3].data.splice(i, 1, (parseFloat(val[0].abnormalScore[i]) * 100).toFixed(2))
      }
      if (min - 10 < 0) { this.options.yAxis[0].min = 0 } else { this.options.yAxis[0].min = min - 10 }
      this.options.yAxis[0].max = max + 20
      this.options.yAxis[0].interval = (max - min + 30) / 5
    }
  },
  data () {
    return {
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['异常得分', '销量', '评论', '收藏']
        },
        xAxis: [
          {
            type: 'category',
            data: ['June', 'July', 'August', 'September'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Item',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: 'Score',
            min: 50,
            max: 80,
            interval: 10,
            axisLabel: {
              formatter: '{value} '
            }
          }
        ],
        series: [
          {
            name: '销量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value
              }
            },
            data: [
              0, 0, 0, 0
            ]
          },
          {
            name: '收藏',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value
              }
            },
            data: [
              0, 0, 0, 0
            ]
          },
          {
            name: '评论',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value
              }
            },
            data: [
              0, 0, 0, 0
            ]
          },
          {
            name: '异常得分',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value
              }
            },
            data: [0, 0, 0, 0]
          }
        ]
      }
    }
  },
  components: {
    Echart
  }
}
</script>

<style lang="scss" scoped>
</style>
