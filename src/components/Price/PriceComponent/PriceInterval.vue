<template>
    <div>
    <el-row :gutter="20">
        <el-col :span="12">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>商品价格区间</span>
  </div>
  <div class="text item">
     <div id="Mimelist3" ref="myChart3"></div>
  </div>
</el-card>
        </el-col>
     <el-col :span="12">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>异常商品价格变化</span>
  </div>
  <div class="text item">
     <div id="Mimelist1" ref="myChart1"></div>
  </div>
</el-card>
     </el-col>
     </el-row>
    </div>
</template>
<script>
import priceDetail from '../../../data/priceDetail'
import priceInterval from '../../../data/priceInterval'
export default {
  props: {
    itemDetail: {
    }

  },
  data () {
    return {
      priceDetail: priceDetail,
      priceInterval: priceInterval
    }
  },
  mounted () {
    let myChart1 = this.$echarts.init(this.$refs.myChart1)
    let myChart3 = this.$echarts.init(this.$refs.myChart3)
    myChart1.setOption(this.priceDetail)
    myChart3.setOption(this.priceInterval)
    window.onresize = () => {
    }
  },
  watch: {
    itemDetail (val) {
      console.log('new')
      console.log(val.allPrices)
      for (let i = 0; i < 4; i++) {
        this.priceDetail.series[0].data[i] = parseInt(val.allPrices[i])
      }
      for (let i = 0; i < 2; i++) {
        this.priceInterval.series[0].data[i] = parseInt(val.normalPrice[0].range[i])
      }
      let myChart1 = this.$echarts.init(this.$refs.myChart1)
      let myChart3 = this.$echarts.init(this.$refs.myChart3)
      myChart1.setOption(this.priceDetail)
      myChart3.setOption(this.priceInterval)
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
    height:300px;
  }
  i{
    margin-right:10px;
    margin-left:20px;
  }
  #Mimelist1 {
  width: 300px;
  height:200px;
}
  #Mimelist3 {
  width: 300px;
  height:200px;
}
</style>
