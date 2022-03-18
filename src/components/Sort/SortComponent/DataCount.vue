<template>
    <div>
      <el-card class="box-card" style="color: #FFFF;">
  <div slot="header" class="clearfix">
    <el-row :gutter="20">
    <el-col :span="7">
    <span>分类结果统计</span>
    </el-col>
    <el-col :span="17">
    <el-radio-group v-model="radio1">
      <el-radio-button label="信息统计" style="opacity: 0.8;" @click.native="showChange(1)"></el-radio-button>
      <el-radio-button label="结果准确度" style="opacity: 0.8;" @click.native="showChange(2)"></el-radio-button>
    </el-radio-group>
    </el-col>
    </el-row>
  </div>
  <div v-show="judge==true">
  <div class="text item">
     <i class="el-icon-goods"></i>
    <span>商品数量: {{sumItem}}</span>
  </div>
   <div class="text item">
     <i class="el-icon-aim"></i>
    <span>店铺数量: {{sumStore}}</span>
  </div>
   <div class="text item">
     <i class="el-icon-aim"></i>
    <span>补全类别商品的数量: {{missItem}}</span>
  </div>
  </div>
      <div v-show="judge==false">
  <div class="text item">
     <i class="el-icon-goods"></i>
    <span>商品类别缺失率: {{missRate}}</span>
  </div>
   <div class="text item">
     <i class="el-icon-aim"></i>
    <span>类别预测准确度: {{accuracy}}</span>
  </div>
      </div>
</el-card>
    </div>
</template>
<script>
import sortJuneCount from '../../../data/sortJuneCount'
export default{
  name: 'DataCount',
  data () {
    return {
      radio1: '信息统计',
      sortJuneCount: sortJuneCount,
      missItem: 0,
      sumItem: 0,
      sumStore: 0,
      missRate: 0,
      accuracy: 0,
      judge: true
    }
  },
  created () {
    this.missItem = String(parseInt(parseFloat(this.sortJuneCount.missing_rate) * parseFloat(this.sortJuneCount.sumItem) / 100))
    this.sumItem = this.sortJuneCount.sumItem
    this.sumStore = this.sortJuneCount.shopNum
    this.missRate = this.sortJuneCount.missing_rate.substring(0, 5) + '%'
    this.accuracy = this.sortJuneCount.accuracy.substring(0, 5) + '%'
  },
  methods: {
    showChange (val) {
      if (val === 1) {
        this.judge = true
      } else if (val === 2) {
        this.judge = false
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
</style>
