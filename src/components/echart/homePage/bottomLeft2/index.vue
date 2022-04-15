<template>
  <div>
    <Echart
      :options="options"
      id="dataShowEchart"
      height="350px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  props: {
    item: []
  },
  watch: {
    item (val) {
      for (let i = 0; i < 4; i++) {
        val[0].allPrice[i] = Math.round(Math.random() * 100 + 200)
        val[0].allSale[i] = Math.round(Math.random() * 100 + 200)
        if (val[0].whichAbnormal === '0') { val[0].allPrice[i] = Math.round(Math.random() * 400 + 50) }
        if (val[0].whichAbnormal === '1') { val[0].allSale[i] = Math.round(Math.random() * 400 + 50) }
        if (val[0].whichAbnormal === '01') { val[0].allPrice[i] = Math.round(Math.random() * 400 + 50); val[0].allSale[i] = Math.round(Math.random() * 400 + 50) }
        val[0].allComments[i] = Math.round(Math.random() * 1800 + 200)
        val[0].allCollection[i] = Math.round(Math.random() * 1800 + 200)
      }
      for (let i = 0; i < 4; i++) {
        this.options.series[2].data.splice(i, 1, parseInt(val[0].allPrice[i]))
        this.options.series[3].data.splice(i, 1, parseInt(val[0].allSale[i]))
        this.options.series[1].data.splice(i, 1, parseInt(val[0].allComments[i]))
        this.options.series[0].data.splice(i, 1, parseInt(val[0].allCollection[i]))
      }
    }
  },
  data () {
    return {
      options: {
        color: ['#5470C6', '#91CC75', '#EE6666', '#E6A23C'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%',
          left: '20%'
        },
        legend: {
          data: ['收藏', '评论', '价格', '销量']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            // prettier-ignore
            data: ['Jun', 'Jul', 'Aug', 'Sep']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '收藏',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#5470C6'
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '评论',
            position: 'right',
            alignTicks: true,
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#91CC75'
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '价格',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#EE6666'
              }
            },
            axisLabel: {
              formatter: '{value} 元'
            }
          },
          {
            type: 'value',
            name: '销量',
            position: 'left',
            offset: 80,
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#E6A23C'
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          }
        ],
        series: [
          {
            name: '收藏',
            type: 'bar',
            data: [
              0, 0, 0, 0
            ]
          },
          {
            name: '评论',
            type: 'bar',
            yAxisIndex: 1,
            data: [
              0, 0, 0, 0
            ]
          },
          {
            name: '价格',
            type: 'line',
            yAxisIndex: 2,
            data: [0, 0, 0, 0]
          },
          {
            name: '销量',
            type: 'line',
            yAxisIndex: 3,
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
