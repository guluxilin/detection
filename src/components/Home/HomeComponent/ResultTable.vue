<template>
    <div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
      <i class="el-icon-s-shop"></i>
    <span>异常商品信息</span>
  </div>
  <div class="text item">
    <el-table
    :data="abnormalPrice.abnormalItemDetail.slice((this.round-1)*50,this.round*50)"
    height="200"
    :default-sort = "{prop: 'storeName'}"
    border
    style="width: 100%">
    <el-table-column
      prop="storeName"
      label="店铺名称"
      sortable
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="sort"
      label="商品类别"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="itemName"
      label="商品名称"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
     >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  <el-pagination
      small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
      style="padding:10px 5px">
    </el-pagination>
</el-card>
    </div>
</template>
<script>
import abnormalPrice from '../../../data/abnormalPrice'
export default {
  props: {
    round: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      currentPage: 1,
      currentSize: 20,
      abnormalPrice: abnormalPrice
    }
  },
  methods: {
    handleClick (row) {
      this.$emit('watchDetail', row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.currentSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  },
  watch: {
    round (val) {
      console.log('resulttable' + val)
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
    height:300px;
    margin-top:20px;
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
