<template>
<div id="side-bar">
  <div class="sideHead">
  </div>
      <el-row class="tac" >
    <el-menu
      default-active="4"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#012143"
      text-color="#fff"
      active-text-color="#ffd04b"
      :style="'height:'+autoHeight.height">
      <router-link to="/home">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">管理首页</span>
      </el-menu-item>
       </router-link>
 <router-link to="/sort">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">商品分类</span>
      </el-menu-item>
       </router-link>
       <router-link to="/price">
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">价格异常检测</span>
      </el-menu-item>
       </router-link>
         <router-link to="/sale">
      <el-menu-item index="4" >
        <i class="el-icon-document"></i>
        <span slot="title">销量异常检测</span>
      </el-menu-item>
        </router-link>
    </el-menu>
</el-row>
</div>
</template>
<script>
export default {
  name: 'SideBar',
  data () {
    return {
      windowHeight: 0,
      autoHeight: {
        height: ''
      }
    }
  },
  created () {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },
  destroyed () {
    window.removeEventListener('resize', this.getHeight)
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    getHeight () {
      this.windowHeight = window.innerHeight
      this.autoHeight.height = (this.windowHeight + 300) + 'px'
    }
  }
}
</script>
<style scoped>
.sideHead{
  height:60px;
   background-image: url('~@/assets/sideHead.png');
   background-size: 100% 100%;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
