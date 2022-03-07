<template>
  <div style="margin-top:20px">
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <i class="el-icon-s-shop"></i>
    <span>语义库</span>
  </div>
      <transition name="el-fade-in-linear" v-for="item in numList" :key="item.id">
        <div v-show="show" class="transition-box">
        <span>卫衣</span>
          </div>
      </transition>
</el-card>
    </div>
</template>
<script>
export default {
  name: 'TagCard',
  data () {
    return {
      show: true,
      numList: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}]
    }
  }
}
</script>
<style scoped>
.transition-box {
 color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    border: 1px solid #DCDFE6;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
      margin-right: 20px;
       margin-bottom: 10px;
  }
   div /deep/ .el-card__body {
    padding: 5px 20px;
}
</style>
