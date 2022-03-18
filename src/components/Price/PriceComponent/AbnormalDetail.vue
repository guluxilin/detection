<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
        <kmeans></kmeans>
            </el-col>
            <el-col :span="12">
        <result-table></result-table>
            </el-col>
        </el-row>
       <price-interval></price-interval>
       <el-row :gutter="20">
           <el-col :span="12">
               <abnormal-data-count></abnormal-data-count>
           </el-col>
           <el-col :span="12">
               <abonormal-data-analyse></abonormal-data-analyse>
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
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
