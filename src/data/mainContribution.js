let Contribution = {
  title: [
    {
      text: ''
    }
  ],
  polar: {
    radius: [30, '80%']
  },
  angleAxis: {
    max: 4,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: ['价格', '评论', '收藏']
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [2, 1.2, 2.4],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  }
}
export default Contribution
