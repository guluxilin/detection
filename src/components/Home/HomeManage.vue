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
       <data-sum></data-sum>
       <result-table></result-table>
    </el-main>
      </el-container>
      </el-container>
    </div>
</template>
<script>
import SideBar from './HomeComponent/SideBar.vue'
import NavMenu from './HomeComponent/NavMenu.vue'
import BreadCrumb from './HomeComponent/BreadCrumb.vue'
import DataSum from './HomeComponent/DataSum.vue'
import ResultTable from './HomeComponent/ResultTable.vue'
export default {
  components: {SideBar, NavMenu, BreadCrumb, DataSum, ResultTable},
  data () {
    return {

    }
  },
  methods: {
    continueClick () {

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
