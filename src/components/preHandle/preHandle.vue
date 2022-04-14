<template>
 <div id="preHandle" >
   <el-row :gutter="70">
     <el-col :span="8">
    <dv-border-box-13>
              <absence :absenceSort="absenceSort" :absenceData="absenceData"></absence>
              </dv-border-box-13>
     </el-col>
     <el-col :span="16">
        <dv-border-box-13>
        <data-analyse
        :adata="parseFloat(parseFloat(preHandle.sortabsenceRate).toFixed(2))"
        :bdata="parseFloat(parseFloat(preHandle.valueabsenceRate).toFixed(2))"
        :cdata="parseFloat(parseFloat(preHandle.accuracy).toFixed(2))"></data-analyse>
         </dv-border-box-13>
     </el-col>
   </el-row>
   <div style="margin-top:10px">
     <el-row :gutter="70">
     <el-col :span="8">
    <dv-border-box-13>
              <filled :absenceData="absenceData" @sendMessage="getMessage"></filled>
              </dv-border-box-13>
     </el-col>
     <el-col :span="16">
        <dv-border-box-13>
        <data-show :tableValue="tableValue" :preHandle="preHandle"></data-show>
         </dv-border-box-13>
     </el-col>
   </el-row>
   </div>
 </div>
</template>
<script>
import dataAnalyse from './views/dataAnalyse.vue'
import absence from './views/absence.vue'
import DataShow from './views/dataShow.vue'
import Filled from './views/filled.vue'
import preHandle from '@/mainData/preHandle'
export default {
  components: { absence, dataAnalyse, DataShow, Filled },
  data () {
    return {
      preHandle: preHandle,
      absenceSort: [],
      absenceData: [],
      tableValue: {}
    }
  },
  created () {
  },
  mounted () {
    for (let i = 0; i < Object.keys(preHandle.absence).length; i++) {
      if (preHandle.absence[i].sort === '') { this.absenceSort.push(preHandle.absence[i]) } else { this.absenceData.push(preHandle.absence[i]) }
    }
  },
  methods: {
    getMessage (val) {
      this.tableValue = val
    }
  }
}
</script>
<style scoped>
</style>
