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
    <el-col :span="12">
     <data-count></data-count>
    </el-col>
    <el-col :span="12">
      <sort-item></sort-item>
    </el-col>
     </el-row>
    </el-main>
      </el-container>
      </el-container>
</div>
</template>

<script>

import SideBar from './SortComponent/SideBar.vue'
import BreadCrumb from './SortComponent/BreadCrumb.vue'
import DataAnalyse from './SortComponent/DataAnalyse.vue'
import DataCount from './SortComponent/DataCount.vue'
import NavMenu from './SortComponent/NavMenu.vue'
import StoreCard from './SortComponent/StoreCard.vue'
import TagCard from './SortComponent/TagCard.vue'
import SortItem from './SortComponent/SortItem.vue'
import sortJune from '../../data/sortJune'
import sortJuly from '../../data/sortJuly'
import sortAugust from '../../data/sortAugust'
import sortSeptember from '../../data/sortSeptember'
export default {
  name: 'LayOut',
  components: {
    SideBar,
    BreadCrumb,
    DataAnalyse,
    DataCount,
    NavMenu,
    StoreCard,
    TagCard,
    SortItem
  },
  data () {
    return {
      sortJune: sortJune,
      sortJuly: sortJuly,
      sortAugust: sortAugust,
      sortSeptember: sortSeptember
    }
  },
  mounted () {
  },
  methods: {
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
