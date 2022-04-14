<template>
    <div id="detectPrice">
      <el-row :gutter="30">
        <el-col :span="10">
          <dv-border-box-13>
          <price-top-left></price-top-left>
          </dv-border-box-13>
        </el-col>
        <el-col :span="8">
           <dv-border-box-13>
             <price-top-center></price-top-center>
          </dv-border-box-13>
        </el-col>
        <el-col :span="6">
           <dv-border-box-13>
         <price-top-right @sendMessage="getMessage"></price-top-right>
          </dv-border-box-13>
        </el-col>
      </el-row>
       <el-row :gutter="30" style="margin-top:30px">
         <el-col :span="10">
            <dv-border-box-13>
              <price-bottom-left></price-bottom-left>
          </dv-border-box-13>
         </el-col>
         <el-col :span="8">
            <dv-border-box-13>
             <price-bottom-center></price-bottom-center>
          </dv-border-box-13>
         </el-col>
         <el-col :span="6">
            <dv-border-box-13>
              <price-bottom-right :table-value="tableValue"></price-bottom-right>
          </dv-border-box-13>
         </el-col>
       </el-row>

    </div>
</template>
<script>
import PriceBottomCenter from './views/priceBottomCenter.vue'
import PriceBottomLeft from './views/priceBottomLeft.vue'
import PriceBottomRight from './views/priceBottomRight.vue'
import PriceTopCenter from './views/priceTopCenter.vue'
import priceTopLeft from './views/priceTopLeft.vue'
import PriceTopRight from './views/priceTopRight.vue'
export default {
  components: { priceTopLeft, PriceTopCenter, PriceTopRight, PriceBottomLeft, PriceBottomRight, PriceBottomCenter },
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
<style scoped>

</style>
