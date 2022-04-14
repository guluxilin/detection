<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      :chartTheme="chartTheme"
      id="dataShowEchart"
      height="350px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
      chartTheme: 1
    }
  },
  components: {
    Echart
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255,255,255,0.1)',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#7B7DDC'
              }
            },
            textStyle: {
              color: '#ffff'
            }
          },
          legend: {
            data: ['价格', '销量', '收藏', '评论'],
            textStyle: {
              color: '#B4B4B4'
            },
            top: '0%'
          },
          grid: {
            x: '8%',
            width: '88%',
            y: '4%'
          },
          xAxis: {
            data: newData.category,
            axisLine: {
              lineStyle: {
                color: '#B4B4B4'
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: [
            {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: '#B4B4B4'
                }
              },

              axisLabel: {
                formatter: '{value} '
              }
            },
            {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: '#B4B4B4'
                }
              },
              axisLabel: {
                formatter: '{value} '
              }
            }
          ],
          series: [
            {
              name: '价格',
              type: 'line',
              smooth: true,
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 8,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: '#F02FC2'
                }
              },
              data: newData.PriceData
            },
            {
              name: '销量',
              type: 'line',
              smooth: true,
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 8,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: '#F02FC2'
                }
              },
              data: newData.SaleData
            },
            {
              name: '收藏',
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#956FD4' },
                    { offset: 1, color: '#3EACE5' }
                  ])
                }
              },
              data: newData.CollectionData
            },
            {
              name: '评论',
              type: 'bar',
              barGap: '-100%',
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(156,107,211,0.8)' },
                    { offset: 0.2, color: 'rgba(156,107,211,0.5)' },
                    { offset: 1, color: 'rgba(156,107,211,0.2)' }
                  ])
                }
              },
              z: -12,
              data: newData.CommentData
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
