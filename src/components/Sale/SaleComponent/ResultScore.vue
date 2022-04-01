<template>
    <div>
         <el-card class="box-card">
  <div slot="header" class="clearfix">
    <i class="el-icon-s-shop"></i>
    <span>异常得分柱状图</span>
  </div>
  <div class="text item">
     <div id="Mimelist301" ref="myChart301"></div>
  </div>
</el-card>
    </div>
</template>
<script>
import HistogramActive from '../../../data/HistogramActive'
import abnormalPrice from '../../../data/abnormalPrice'
export default {
  props: {
    round: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      option301: HistogramActive,
      abnormalPrice: abnormalPrice
    }
  },
  mounted () {
    for (let i = (this.round - 1) * 50; i < this.round * 50; i++) {
      this.option301.xAxis[0].data[i] = this.abnormalPrice.abnormalItemDetail[i].storeName
      this.option301.series[0].data[i] = this.abnormalPrice.abnormalItemDetail[i].itemSaleVolum
    }
    let myChart301 = this.$echarts.init(this.$refs.myChart301)
    myChart301.setOption(this.option301)
    window.onresize = () => {
    }
  },
  methods: {

  },
  watch: {
    round (val) {
      for (let i = (val - 1) * 50; i < val * 50; i++) {
        this.option301.xAxis[0].data[i] = this.abnormalPrice.abnormalItemDetail[i].storeName
        this.option301.series[0].data[i] = this.abnormalPrice.abnormalItemDetail[i].itemSaleVolum
      }
      let myChart301 = this.$echarts.init(this.$refs.myChart301)
      myChart301.setOption(this.option301)
      window.onresize = () => {
      }
    }
  }
}
</script>
<style scoped>
.text {
    font-size: 18px;
  }

  .item {
    margin-bottom: 30px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    margin-top:20px;
    height:600px;
  }
  #Mimelist301 {
  width: 400px;
  height:500px;
}
div /deep/ .el-pagination__sizes {
    font-weight: 400;
    color: #606266;
}
 div /deep/ .el-pager{
   width:20%
 }
 div /deep/ .el-pagination__jump{
   margin-left: 0px
 }
</style>
