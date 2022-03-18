<template>
    <div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
       <i class="el-icon-s-shop"></i>
    <span>异常比例数据</span>
  </div>
  <div class="text item">
    <el-row :gutter="20">
      <el-col :span="8">
        <div style="margin-top: 20px">
    <el-radio-group v-model="radio" size="small">
      <el-radio label="1" border>店铺</el-radio>
      <el-radio label="2" border>类别</el-radio>
    </el-radio-group>
  </div>
      </el-col>
      <el-col :span="16">
        <el-table
    :data="tableData"
     :default-sort = "{prop: 'name'}"
    border
    style="width: 100%"
    height:="200">
    <el-table-column
      fixed
      prop="date"
      label="店铺名称"
      width="135">
    </el-table-column>
    <el-table-column
      prop="name"
      label="异常比例"
      sortable
      >
    </el-table-column>
  </el-table>
      </el-col>
    </el-row>
  </div>
  <div class="text item">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="100"
      :pager-count="5"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</el-card>
    </div>
</template>
<script>
export default {
  data () {
    return {
      radio: '1',
      currentPage: 1
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
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
</style>
