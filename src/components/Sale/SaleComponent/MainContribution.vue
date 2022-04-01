<template>
    <div>
         <el-card class="box-card">
  <div slot="header" class="clearfix">
     <i class="el-icon-s-shop"></i>
    <span>主成分贡献率</span>
  </div>
  <div class="text item">
     <div id="Mimelist302" ref="myChart302"></div>
  </div>
</el-card>
    </div>
</template>
<script>
import Contribution from '../../../data/mainContribution'
export default {
  data () {
    return {
      option302: Contribution
    }
  },
  mounted () {
    let myChart302 = this.$echarts.init(this.$refs.myChart302)
    myChart302.setOption(this.option302)
    window.onresize = () => {
    }
  },
  methods: {

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
  #Mimelist302 {
  width: 400px;
  height:200px;
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
