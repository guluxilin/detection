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
    <bread-crumb></bread-crumb>
    <store-card></store-card>
    <tag-card></tag-card>
     <el-row :gutter="20">
    <el-col :span="9">
     <data-count></data-count>
    </el-col>
    <el-col :span="15">
     <data-analyse></data-analyse>
    </el-col>
     </el-row>
    </el-main>
      </el-container>
      </el-container>
</div>
</template>

<script>

import SideBar from './SideBar.vue'
import BreadCrumb from './BreadCrumb.vue'
import DataAnalyse from './DataAnalyse.vue'
import DataCount from './DataCount.vue'
import NavMenu from './NavMenu.vue'
import StoreCard from './StoreCard.vue'
import TagCard from './TagCard.vue'
export default {
  name: 'LayOut',
  components: {
    SideBar,
    BreadCrumb,
    DataAnalyse,
    DataCount,
    NavMenu,
    StoreCard,
    TagCard
  },
  data () {
    return {

    }
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
