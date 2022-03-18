<template>
    <div>
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-row :gutter="20">
      <el-col :span="5">
    <i class="el-icon-s-shop"></i>
    <span>商品信息</span>
      </el-col>
      <el-col :span="17" >
        <div style="float:right">
    <el-button style="padding:5px 15px">上传</el-button>
    <el-button style="padding:5px 15px">添加</el-button>
    <el-button style="padding:5px 15px">移动</el-button>
    <el-button style="padding:5px 15px">删除</el-button>
        </div>
      </el-col>
      <el-col :span="2">
    <el-button style="float: right; padding: 3px 0" type="text">
      <i class="el-icon-refresh-right"></i>
      <span>刷新</span>
    </el-button>
      </el-col>
    </el-row>
  </div>
  <el-table
    :data="sortJune.detail.slice((currentPage-1)*currentSize,currentPage*currentSize)"
    style="width: 100%"
    height="300"
    :default-sort = "{prop: 'information.itemCate', order: 'descending'}"
    :cell-style="{'text-align':'center'}"
    :header-cell-style="{'text-align':'center'}"
    >
    <el-table-column
      prop="store_name"
      label="店铺"
      sortable
      width="180"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="information.itemName"
      label="商品名称"
      sortable
      width="180"
      :show-overflow-tooltip="true">
    </el-table-column>
     <el-table-column
      prop="information.itemCate"
      label="商品类别"
      sortable
      width="180"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="information.itemPrice"
      label="价格"
      sortable
      width="180"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="information.itemSaleAmount"
      label="销量"
      sortable
      width="180"
      :show-overflow-tooltip="true">
      <template slot-scope="scope">
        {{parseInt(scope.row.information.itemSaleAmount)}}
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="Object.keys(sortJune.detail).length"
      style="padding:10px 5px">
    </el-pagination>
</el-card>
    </div>
</template>
<script>
import sortJune from '../../../data/sortJune'
import sortJuly from '../../../data/sortJuly'
import sortAugust from '../../../data/sortAugust'
import sortSeptember from '../../../data/sortSeptember'
export default {
  data () {
    return {
      sortJune: sortJune,
      sortJuly: sortJuly,
      sortAugust: sortAugust,
      sortSeptember: sortSeptember,
      sortSumDetail: [],
      currentPage: 1,
      currentSize: 20
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.currentSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  },
  created () {
    this.sortSumDetail = this.sortSumDetail.concat(sortJune.detail)
    this.sortSumDetail = this.sortSumDetail.concat(sortJuly.detail)
    this.sortSumDetail = this.sortSumDetail.concat(sortAugust.detail)
    this.sortSumDetail = this.sortSumDetail.concat(sortSeptember.detail)
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
  }
 div /deep/ .el-card__body {
    padding: 0px 20px;
}
div /deep/ .el-pagination__sizes {
    margin: 0 25% 0 0;
    font-weight: 400;
    color: #606266;
}
</style>
