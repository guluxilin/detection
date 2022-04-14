<template>
  <div>
    <Echart
      :options="options"
      height="300px"
      width="300px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import kImg from '@/mainData/kImg'
import * as echarts from 'echarts'
export default {
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.options = {
      color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['6月', '7月', '8月', '9月']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['k=1', 'k=2', 'k=3', 'k=4', 'k=5', 'k=6']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '6月',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgb(1, 191, 236)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [5, 6, 7, 8, 8, 1]
        },
        {
          name: '7月',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(0, 221, 255)'
              },
              {
                offset: 1,
                color: 'rgb(77, 119, 255)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [0, 0, 0, 0, 0, 0]
        },
        {
          name: '8月',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(55, 162, 255)'
              },
              {
                offset: 1,
                color: 'rgb(116, 21, 219)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [1, 2, 3, 4, 5, 60]
        },
        {
          name: '9月',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 0, 135)'
              },
              {
                offset: 1,
                color: 'rgb(135, 0, 157)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [4, 5, 7, 3, 2, 1]
        }
      ]
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 6; j++) {
        this.options.series[i].data[j] = parseInt(String(kImg.kmeans[i].kdetail[j].SSE / 10000000000).split('.')[0])
      }
    }
  },
  components: {
    Echart
  },
  props: {
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
</style>
