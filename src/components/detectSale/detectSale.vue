<template>
    <div>
      <el-row :gutter="30">
        <el-col :span="8">
          <sale-top-left></sale-top-left>
        </el-col>
        <el-col :span="10">
          <sale-top-center></sale-top-center>
        </el-col>
        <el-col :span="6">
            <dv-border-box-13>
          <sale-top-right></sale-top-right>
            </dv-border-box-13>
        </el-col>
      </el-row>
        <el-row :gutter="30" style="margin-top:30px">
        <el-col :span="6">
            <dv-border-box-13>
         <sale-bottom-left @sendMessage="getMessage"></sale-bottom-left>
            </dv-border-box-13>
        </el-col>
        <el-col :span="18">
            <dv-border-box-13>
       <sale-bottom-right :table-value="tableValue"></sale-bottom-right>
            </dv-border-box-13>
        </el-col>
      </el-row>
    </div>
</template>
<script>
import SaleBottomLeft from './views/saleBottomLeft.vue'
import SaleBottomRight from './views/saleBottomRight.vue'
import SaleTopCenter from './views/saleTopCenter.vue'
import saleTopLeft from './views/saleTopLeft.vue'
import SaleTopRight from './views/saleTopRight.vue'
export default {
  components: { saleTopLeft, SaleTopCenter, SaleTopRight, SaleBottomLeft, SaleBottomRight },
  data () {
    return {
      tableValue: {}
    }
  },
  methods: {
    getMessage (val) {
      this.tableValue = val
      /* console.log('detectPrice')
      console.log(this.tableValue) */
    }
  }
}
</script>
