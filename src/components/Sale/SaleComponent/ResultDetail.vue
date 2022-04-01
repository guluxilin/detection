<template>
    <div>
         <el-card class="box-card">
  <div slot="header" class="clearfix">
    <i class="el-icon-s-shop"></i>
    <span>异常商品详情</span>
  </div>
  <div class="text item">
    <el-row >
      <el-col :span="2">
        <div>
         <i class="el-icon-s-shop" style="margin-top:10px;margin-left:10px"></i>
        </div>
      </el-col>
      <el-col :span="10">
        <el-row>
    <label>商品名称</label>
        </el-row>
        <el-row>
    <p>{{resultDetail.itemName}}</p>
        </el-row>
      </el-col>
     <el-col :span="2">
        <div>
         <i class="el-icon-s-shop" style="margin-top:10px;margin-left:10px"></i>
        </div>
      </el-col>
      <el-col :span="10">
        <el-row>
    <label>所属店铺</label>
        </el-row>
        <el-row>
    <p>{{resultDetail.storeName}}</p>
        </el-row>
      </el-col>
    </el-row>
  </div>
  <div class="text item">
    <el-row >
      <el-col :span="2">
        <div>
         <i class="el-icon-s-shop" style="margin-top:10px;margin-left:10px"></i>
        </div>
      </el-col>
      <el-col :span="10">
        <el-row>
    <label>商品类别</label>
        </el-row>
        <el-row>
    <p>{{resultDetail.sort}}</p>
        </el-row>
      </el-col>
     <el-col :span="2">
        <div>
         <i class="el-icon-s-shop" style="margin-top:10px;margin-left:10px"></i>
        </div>
      </el-col>
      <el-col :span="10">
        <el-row>
    <label>商品销量</label>
        </el-row>
        <el-row>
    <p>{{resultDetail.itemSaleVolum}}</p>
        </el-row>
      </el-col>
    </el-row>
  </div>
  <div class="text item">
    <el-row >
      <el-col :span="2">
        <div>
         <i class="el-icon-s-shop" style="margin-top:10px;margin-left:10px"></i>
        </div>
      </el-col>
      <el-col :span="10">
        <el-row>
    <label>商品异常得分</label>
        </el-row>
        <el-row>
    <p>{{resultDetail.itemSaleVolum}}</p>
        </el-row>
      </el-col>
     <el-col :span="2">
        <div>
        </div>
      </el-col>
      <el-col :span="10">
      </el-col>
    </el-row>
  </div>
</el-card>
    </div>
</template>
<script>
export default {
  props: {
    itemDetail: {

    }
  },
  data () {
    return {
      resultDetail: Object
    }
  },
  mounted () {
  },
  watch: {
    itemDetail (val) {
      this.resultDetail = val
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
    margin-bottom: 5px;
    height:100px
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
    height:350px;
  }
  label {
    font-size:12px;
    font-weight:1000;
  }
 p{
   font-size:12px;
    font-weight:500;
    margin-block-start: 0em;
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
