<template>
    <div>
      <el-row :gutter="20">
    <el-col :span="17">
      <el-steps  :active="0" simple style="background-color: rgb(238, 241, 246);padding:10px 4%" space="25%" >
      <el-step title="主成分分析" ></el-step>
      <el-step title="孤立森林" ></el-step>
      <el-step title="检测异常比例" ></el-step>
      </el-steps>
    </el-col>
       <el-col :span="7">
      <el-button type="primary" style="float:right" @click="continueClick">运行</el-button>
       </el-col>
    </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    continueClick () {
      this.$emit('continueClick')
    }
  }
}
</script>
