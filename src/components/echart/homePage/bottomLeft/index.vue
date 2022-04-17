<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  props: {
    item: []
  },
  watch: {
    item (val) {
      console.log('chart')
      console.log(val[0])
      for (let i = 0; i < 4; i++) {
        this.cdata.PriceData.splice(i, 1, parseInt(val[0].allPrice[i]))
        this.cdata.SaleData.splice(i, 1, parseInt(val[0].allSale[i]))
        this.cdata.CommentData.splice(i, 1, parseInt(val[0].allComments[i]))
        this.cdata.CollectionData.splice(i, 1, parseInt(val[0].allCollection[i]))
      }
    }
  },
  data () {
    return {
      cdata: {
        category: [
          'June',
          'July',
          'August',
          'September'
        ],
        PriceData: [0, 0, 0, 0
        ],
        SaleData: [0, 0, 0, 0
        ],
        CommentData: [0, 0, 0, 0],
        CollectionData: [0, 0, 0, 0]
      }
    }
  },
  components: {
    Chart
  },
  mounted () {
  },
  methods: {
    setData () {
      for (let i = 0; i < this.cdata.barData.length - 1; i++) {
        let rate = this.cdata.barData[i] / this.cdata.lineData[i]
        this.cdata.rateData.push(rate.toFixed(2))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
