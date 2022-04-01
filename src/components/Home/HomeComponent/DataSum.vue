<template>
<div>
    <el-row :gutter="20">
        <el-col :span="12">
    <el-card class="box-card_1">
        <el-row>
            <el-col :span="10">
        <div class="text item">
     <span>异常商品比例</span>
  </div>
   <div class="text item">
     <label>30%</label>
  </div>
     </el-col>
    <el-col :span="14">
    </el-col>
    </el-row>
</el-card>
        </el-col>
        <el-col :span="12">
     <el-card class="box-card_2">
        <el-row>
            <el-col :span="10">
        <div class="text item">
     <span>商品识别正确率</span>
  </div>
   <div class="text item">
     <label>50%</label>
  </div>
     </el-col>
    <el-col :span="14">
    </el-col>
    </el-row>
</el-card>
        </el-col>
    </el-row>
  <el-row :gutter="20">
        <el-col :span="12">
       <el-card class="box-card_3">
        <el-row>
            <el-col :span="10">
        <div class="text item">
     <span>识别商品总数</span>
  </div>
   <div class="text item">
     <label>20000</label>
  </div>
     </el-col>
    <el-col :span="14">
    </el-col>
    </el-row>
</el-card>
        </el-col>
        <el-col :span="12">
     <el-card class="box-card_4">
        <el-row>
            <el-col :span="10">
        <div class="text item">
     <span>识别商品所用时间</span>
  </div>
   <div class="text item">
     <label>200.0</label>
  </div>
     </el-col>
    <el-col :span="14">
    </el-col>
    </el-row>
</el-card>
        </el-col>
    </el-row>
</div>
</template>
<script>
export default {
  data () {
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
    margin-left: 25px;
    margin-top:30px
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
    background-image: url('~@/assets/purple.png');
    background-size: 100% 100%;
    height:300px;
  }
  .box-card_2 {
    width: 100%;
    margin-top:20px;
    background-image: url('~@/assets/orange.png');
    background-size: 100% 100%;
    height:300px;
  }
  .box-card_3 {
    width: 100%;
    margin-top:20px;
    background-image: url('~@/assets/deepBlue.png');
    background-size: 100% 100%;
    height:300px;
  }
  .box-card_4 {
    width: 100%;
    margin-top:20px;
    background-image: url('~@/assets/blue.png');
    background-size: 100% 100%;
    height:300px;
  }
  span {
      color: #ffff;
      font-weight: 500;
      font-size: 18px;
  }
  label {
      color: #ffff;
      font-weight: 500;
      font-size: 20px;
      margin-left:20px;
  }
</style>
