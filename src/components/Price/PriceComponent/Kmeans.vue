<template>
    <div>
    <el-card class="box-card_1" style="color: #FFFF;">
  <div slot="header" class="clearfix">
    <span>价格聚类情况</span>
  </div>
  <div class="text item">
     <div id="Mimelist4" ref="myChart4"></div>
  </div>
</el-card>
    </div>
</template>
<script>
import kmeans from '../../../data/kmeans'
import abnormalPrice from '../../../data/abnormalPrice'
export default {
  data () {
    return {
      kmeans: kmeans,
      abnormalPrice: abnormalPrice
    }
  },
  mounted () {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 6; j++) {
        this.kmeans.series[i].data[j] = this.abnormalPrice.k_Img[i].kdetail[j].SSE
      }
    }
    let myChart4 = this.$echarts.init(this.$refs.myChart4)
    myChart4.setOption(this.kmeans)
    window.onresize = () => {
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

  .box-card_1 {
    width: 100%;
    margin-top:20px;
    background-image: url('~@/assets/backgroundPlus.png');
    background-size: 100% 100%;
    height:300px;
  }
  i{
    margin-right:10px;
    margin-left:20px;
  }
  span{
    opacity: 0.8;
  }
  #Mimelist4 {
  width: 300px;
  height:200px;
}
</style>
