<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
        <result-table @watchDetail="watchDetail" :round="round"></result-table>
        <result-detail :itemDetail="itemDetail" :round="round"></result-detail>
            </el-col>
            <el-col :span="12">
        <result-score :round="round"></result-score>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import ResultTable from './ResultTable.vue'
import ResultDetail from './ResultDetail.vue'
import ResultScore from './ResultScore.vue'
export default {
  components: {ResultScore, ResultDetail, ResultTable},
  props: {
    round: {
      type: Number,
      default: 1
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
    }
  },
  watch: {

  }
}
</script>
<style scoped>

</style>
