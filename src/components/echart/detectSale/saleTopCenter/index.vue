<template>
  <div>
    <Echart
      :options="options"
      height="350px"
      width="600px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import * as echarts from 'echarts'
import sale from '@/mainData/sale'
export default {
  mounted () {
    for (let i = 0; i < Object.keys(sale.abnormalSortDetail).length; i++) {
      this.options.xAxis[0].data.push(sale.abnormalSortDetail[i].sortname)
      this.options.series[0].data.push(parseInt(sale.abnormalSortDetail[i].rate))
    }
  },
  data () {
    return {
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          }
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { show: true, type: ['line', 'bar'] }
          }
        },
        calculable: true,
        legend: {
          data: ['异常得分'],
          itemGap: 5
        },
        grid: {
          top: '12%',
          left: '1%',
          right: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'rate',
            axisLabel: {
              formatter: function (a) {
                a = +a
                return isFinite(a) ? echarts.format.addCommas(+a / 1000) : ''
              }
            }
          }
        ],
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            show: true,
            yAxisIndex: 0,
            filterMode: 'empty',
            width: 30,
            height: '80%',
            showDataShadow: false,
            left: '93%'
          }
        ],
        series: [
          {
            name: '店铺得分',
            type: 'line',
            data: []
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
