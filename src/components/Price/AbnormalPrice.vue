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
    <abnormal-detail></abnormal-detail>
    </el-main>
      </el-container>
      </el-container>
    </div>
</template>
<script>
import SideBar from './PriceComponent/SideBar.vue'
import NavMenu from './PriceComponent/NavMenu.vue'
import BreadCrumb from './PriceComponent/BreadCrumb.vue'
import AbnormalDetail from './PriceComponent/AbnormalDetail.vue'
export default {
  components: { SideBar, NavMenu, BreadCrumb, AbnormalDetail },
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
