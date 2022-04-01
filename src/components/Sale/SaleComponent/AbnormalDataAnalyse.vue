<template>
    <div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
       <i class="el-icon-s-shop"></i>
    <span>异常比例扇形图</span>
  </div>
  <div class="text item">
    <el-row :gutter="20">
      <el-col :span="8">
         <div style="margin-top: 20px">
    <el-radio-group v-model="radio" size="small">
      <el-radio label="1" border>店铺比例</el-radio>
      <el-radio label="2" border>类别比例</el-radio>
      <el-radio label="3" border>商品比例</el-radio>
    </el-radio-group>
  </div>
      </el-col>
      <el-col :span="16">
        <div id="Mimelist2" ref="myChart"></div>
      </el-col>
    </el-row>
  </div>
</el-card>
    </div>
</template>
<script>
import option from '../../../data/Pie chart'
export default {
  props: {
    round: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      radio: '1',
      currentPage: 1,
      option: option
    }
  },
  mounted () {
    let myChart = this.$echarts.init(this.$refs.myChart)
    myChart.setOption(this.option)
    window.onresize = () => {
    }
  }
}
</script>
<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
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
  div /deep/ .el-radio.is-bordered+.el-radio.is-bordered {
     margin-left: 0px;
     margin-top: 10px
}
#Mimelist2 {
  width: 300px;
  height:250px;
}
</style>
