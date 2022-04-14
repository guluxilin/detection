<template>
  <div>
    <Echart
      :options="options"
      id="dataShowEchart"
      height="300px"
      width="400px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {}
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
        // 固定样式数据
        this.options = {
          title: {
            text: ''
          },
          legend: {
            data: ['Actual Spending']
          },
          radar: {
            // shape: 'circle',
            indicator: newData.indicatorData
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: newData.data
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
