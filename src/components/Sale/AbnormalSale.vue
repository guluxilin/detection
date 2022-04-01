<template>
    <div>
        <el-container style="width:80%; border: 1px solid #eee;margin:auto">
  <el-aside width="220px">
    <side-bar></side-bar>
  </el-aside>
  <el-container>
     <el-header style="text-align: left; font-size: 13px;width:100%">
    <nav-menu></nav-menu>
     </el-header>
     <el-main  style="background-color: rgb(238, 241, 246)">
    <bread-crumb @continueClick="continueClick"></bread-crumb>
    <abnormal-detail :round="round"></abnormal-detail>
    <el-row :gutter="20">
      <el-col :span="12">
      <main-contribution></main-contribution>
      </el-col>
      <el-col :span="12">
      <abnormal-data-analyse></abnormal-data-analyse>
       </el-col>
    </el-row>
    </el-main>
      </el-container>
      </el-container>
    </div>
</template>
<script>
import SideBar from './SaleComponent/SideBar.vue'
import NavMenu from './SaleComponent/NavMenu.vue'
import BreadCrumb from './SaleComponent/BreadCrumb.vue'
import AbnormalDetail from './SaleComponent/AbnormalDetail.vue'
import MainContribution from './SaleComponent/MainContribution.vue'
import AbnormalDataAnalyse from './SaleComponent/AbnormalDataAnalyse.vue'
export default {
  components: {SideBar, NavMenu, BreadCrumb, AbnormalDetail, MainContribution, AbnormalDataAnalyse},
  data () {
    return {
      round: 1
    }
  },
  methods: {
    continueClick () {
      this.round++
    }
  },
  watch: {

  }
}
</script>
<style scoped>
.el-header {
    background-color: #FFFF;
    color: #333;
    line-height: 60px;
  }
</style>
