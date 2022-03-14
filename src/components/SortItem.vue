<template>
    <div>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>补全类别的商品信息</span>
  </div>
  <el-table
    :data="sortJuneADD.detail"
    style="width: 100%"
     height="300"
    :default-sort = "{prop: 'store_name'}"
    :cell-style="{'text-align':'center'}"
    :header-cell-style="{'text-align':'center'}"
    >
    <el-table-column
      prop="store_name"
      label="店铺名称"
      sortable
      width="150"
      :show-overflow-tooltip="true">
    </el-table-column>
     <el-table-column
      prop="information.itemName"
      label="商品名称"
      sortable
      width="150"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="information.itemCate"
      label="预测类别"
      sortable
      :show-overflow-tooltip="true">
    </el-table-column>
  </el-table>
</el-card>
    </div>
</template>
<script>
import sortJuneADD from '../data/sortJuneAdd'
export default {
  name: 'SortItem',
  data () {
    return {
      sortJuneADD: sortJuneADD
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
</style>
