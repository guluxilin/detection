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
    <el-radio-group v-model="radio" size="small" @change="sortChange">
      <el-radio label="1" value=1 border>类别</el-radio>
      <el-radio label="2" value=2 border>店铺</el-radio>
    </el-radio-group>
  </div>
      </el-col>
      <el-col :span="16">
        <el-table
    :data="abnormalPrice.abnormalSortDetail"
     :default-sort = "{prop: 'rate',order:'descending'}"
    border
    style="width: 100%"
    height="200"
     v-show="sortShow===true"
     ref='table1'>
    <el-table-column
      fixed
      prop="sortname"
      label="类别名称"
      width="135"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="rate"
      label="异常比例"
      :sortable="true"
      >
      <template slot-scope="scope">
                <span>{{ String(scope.row.rate*100).substring(0,4) }}%</span>
              </template>
    </el-table-column>
  </el-table>
          <el-table
    :data="abnormalPrice.abnormalStoreDetail.slice((this.round-1)*50,this.round*50)"
     :default-sort = "{prop: 'rate',order:'descending'}"
    border
    style="width: 100%"
    height="200"
     v-show="sortShow===false"
     ref='table2'>
    <el-table-column
      fixed
      prop="storename"
      label="店铺名称"
      width="135"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      prop="rate"
      label="异常数量"
      :sortable="true"
      >
      <template slot-scope="scope">
                <span>{{ String(scope.row.rate*100).substring(0,4) }}%</span>
              </template>
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
      :total="1000"
     >
    </el-pagination>
  </div>
</el-card>
    </div>
</template>
<script>
import abnormalPrice from '../../../data/abnormalPrice'
export default {
  props: {
    round: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      radio: '1',
      currentPage: 1,
      abnormalPrice: abnormalPrice,
      sortShow: true
    }
  },
  mounted () {
    this.initAbnormalPrice()
  },
  methods: {
    sortChange (val) {
      if (val === '1') {
        this.sortShow = true
        this.$nextTick(() => {
          this.$refs.table1.doLayout()
        })
      } else if (val === '2') {
        this.sortShow = false
        this.$nextTick(() => {
          this.$refs.table2.doLayout()
        })
      }
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    initAbnormalPrice () {
    }}
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
.el-table th.gutter{
     display: table-cell !important;
 }

</style>
