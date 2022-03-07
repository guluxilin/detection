<template>
    <div>
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-row :gutter="20">
      <el-col :span="5">
    <i class="el-icon-s-shop"></i>
    <span>商铺</span>
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
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="名称"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="类别"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="价格"
      sortable>
    </el-table-column>
  </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      style="padding:10px 5px">
    </el-pagination>
</el-card>
    </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
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
  }
 div /deep/ .el-card__body {
    padding: 0px 20px;
}
div /deep/ .el-pagination__sizes {
    margin: 0 30% 0 0;
    font-weight: 400;
    color: #606266;
}
</style>
