import * as echarts from 'echarts'
let HistogramActive = {
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
      data: ['商品1', '商品2', '商品3', '商品4']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'score',
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
      name: '异常得分',
      type: 'bar',
      data: [100, 200, 300, 400]
    }
  ]
}
export default HistogramActive
