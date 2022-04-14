<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
    <Echart
      :options="options[0]"
      :chartTheme="chartTheme"
      id="centreLeft1Chart"
      height="260px"
      width="350px"
    ></Echart>
      </el-col>
      <el-col :span="8">
    <Echart
      :options="options[1]"
      :chartTheme="chartTheme"
      id="centreLeft2Chart"
      height="260px"
      width="350px"
    ></Echart>
      </el-col>
      <el-col :span="8">
    <Echart
      :options="options[2]"
      :chartTheme="chartTheme"
      id="centreLeft3Chart"
      height="260px"
      width="350px"
    ></Echart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      list: [1, 2, 3],
      options: [],
      chartTheme: 2
    }
  },
  components: {
    Echart
  },
  props: {
    adata: {
      type: Number,
      default: 0
    },
    bdata: {
      type: Number,
      default: 0
    },
    cdata: {
      type: Number,
      default: 0
    }
  },
  watch: {
    adata: {
      handler (newData) {
        this.options[0] = {
          darkMode: true,
          series: [
            {
              type: 'gauge',
              center: ['50%', '60%'],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              splitNumber: 10,
              itemStyle: {
                color: '#FFAB91'
              },
              progress: {
                show: true,
                width: 30
              },
              pointer: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width: 30
                }
              },
              axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                  width: 2,
                  color: '#999'
                }
              },
              splitLine: {
                distance: -52,
                length: 14,
                lineStyle: {
                  width: 3,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 20
              },
              anchor: {
                show: false
              },
              title: {
                show: false
              },
              detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 30,
                fontWeight: 'bolder',
                formatter: '{value} ',
                color: 'auto'
              },
              data: [
                {
                  value: newData
                }
              ]
            }
          ]
        }
      },
      immediate: true,
      deep: true
    },
    bdata: {
      handler (newData) {
        this.options[1] = {
          darkMode: true,
          series: [
            {
              type: 'gauge',
              center: ['50%', '60%'],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              splitNumber: 10,
              itemStyle: {
                color: '#FFAB91'
              },
              progress: {
                show: true,
                width: 30
              },
              pointer: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width: 30
                }
              },
              axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                  width: 2,
                  color: '#999'
                }
              },
              splitLine: {
                distance: -52,
                length: 14,
                lineStyle: {
                  width: 3,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 20
              },
              anchor: {
                show: false
              },
              title: {
                show: false
              },
              detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 30,
                fontWeight: 'bolder',
                formatter: '{value} ',
                color: 'auto'
              },
              data: [
                {
                  value: newData
                }
              ]
            }
          ]
        }
      },
      immediate: true,
      deep: true
    },
    cdata: {
      handler (newData) {
        this.options[2] = {
          darkMode: true,
          series: [
            {
              type: 'gauge',
              center: ['50%', '60%'],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              splitNumber: 10,
              itemStyle: {
                color: '#FFAB91'
              },
              progress: {
                show: true,
                width: 30
              },
              pointer: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width: 30
                }
              },
              axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                  width: 2,
                  color: '#999'
                }
              },
              splitLine: {
                distance: -52,
                length: 14,
                lineStyle: {
                  width: 3,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 20
              },
              anchor: {
                show: false
              },
              title: {
                show: false
              },
              detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 30,
                fontWeight: 'bolder',
                formatter: '{value} ',
                color: 'auto'
              },
              data: [
                {
                  value: newData
                }
              ]
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

<style lang="scss" scoped>
</style>
