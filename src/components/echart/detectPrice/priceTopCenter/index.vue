<template>
  <div>
    <Echart
      :options="options"
      height="380px"
      width="100%"
      :chartTheme="chartTheme"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import price from '@/mainData/price'
export default {
  mounted () {
    this.options.series[0].data[0].value = parseFloat(parseFloat(price.abnormalItem).toFixed(2))
    this.options.series[0].data[1].value = parseFloat(parseFloat(price.abnormalSortRate).toFixed(2))
    this.options.series[0].data[2].value = parseFloat(parseFloat(price.abnormalStoreRate).toFixed(2))
  },
  data () {
    return {
      chartTheme: 2,
      options: {
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: '#464646'
              }
            },
            axisLine: {
              lineStyle: {
                width: 40
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: [
              {
                value: 20,
                name: '商品',
                title: {
                  offsetCenter: ['0%', '-50%']
                },
                detail: {
                  valueAnimation: true,
                  offsetCenter: ['0%', '-30%']
                }
              },
              {
                value: 40,
                name: '类别',
                title: {
                  offsetCenter: ['0%', '-10%']
                },
                detail: {
                  valueAnimation: true,
                  offsetCenter: ['0%', '10%']
                }
              },
              {
                value: 60,
                name: '店铺',
                title: {
                  offsetCenter: ['0%', '30%']
                },
                detail: {
                  valueAnimation: true,
                  offsetCenter: ['0%', '50%']
                }
              }
            ],
            title: {
              fontSize: 14
            },
            detail: {
              width: 50,
              height: 14,
              fontSize: 14,
              color: 'auto',
              borderColor: 'auto',
              borderRadius: 20,
              borderWidth: 1,
              formatter: '{value}%'
            }
          }
        ]
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
