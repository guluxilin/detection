<template>
    <div>
      <el-card class="box-card" style="color: #FFFF;">
  <div slot="header" class="clearfix">
    <span>分类结果统计</span>
  </div>
  <div class="text item">
     <i class="el-icon-goods"></i>
    <span>商品类别</span>
  </div>
   <div class="text item">
     <i class="el-icon-aim"></i>
    <span>结果准确度</span>
  </div>
</el-card>
    </div>
</template>
<script>
export default{
  name: 'DataCount',
  date () {
    return {
    }
  }
}
</script>
<style scoped>
 .text {
    font-size: 14px;
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
    background-image: url('../assets/backgroundPlus.png');
    background-size: 100% 100%;
  }
  i{
    margin-right:10px;
    margin-left:20px;
  }
  span{
    opacity: 0.8;
  }
</style>
