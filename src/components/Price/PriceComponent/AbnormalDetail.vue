<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
        <kmeans></kmeans>
            </el-col>
            <el-col :span="12">
        <result-table @watchDetail="watchDetail" :round="round"></result-table>
            </el-col>
        </el-row>
       <price-interval :item-detail="itemDetail"></price-interval>
       <el-row :gutter="20">
           <el-col :span="12">
               <abnormal-data-count :round="round"></abnormal-data-count>
           </el-col>
           <el-col :span="12">
               <abonormal-data-analyse :round="round"></abonormal-data-analyse>
           </el-col>
       </el-row>
    </div>
</template>
<script>
import Kmeans from './Kmeans.vue'
import ResultTable from './ResultTable.vue'
import PriceInterval from './PriceInterval.vue'
import AbnormalDataCount from './AbnormalDataCount.vue'
import AbonormalDataAnalyse from './AbnormalDataAnalyse.vue'
export default {
  components: {Kmeans, ResultTable, PriceInterval, AbnormalDataCount, AbonormalDataAnalyse},
  props: {
    round: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      itemDetail: Object
    }
  },
  methods: {
    watchDetail (row) {
      this.itemDetail = row
      console.log(this.itemDetail)
      console.log(this.itemDetail.allPrices)
    }
  },
  watch: {
    round (val) {
      console.log('abnormaldetail' + val)
    }
  }
}
</script>
<style scoped>
</style>
