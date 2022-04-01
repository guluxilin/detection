<template>
<div style="height:60px">
  <el-row :gutter="20">
    <el-col :span="20">
      <el-dropdown>
        <i class="el-icon-s-unfold" style="margin-right: 10px;cursor:pointer"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>首页管理</span>
    </el-col>
    <el-col :span="4">
      <div style="float:right">
      <i class="el-icon-user-solid" style="margin-right: 10px"></i>
      <el-dropdown @command="clickDropdown">
        <span style="font-size:13px;cursor:pointer">{{user}}</span>
  <span class="el-dropdown-link">
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="管理员">管理员</el-dropdown-item>
    <el-dropdown-item command="用户">用户</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script>
export default{
  name: 'NavMenu',
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    this.user = '管理员'
  },
  methods: {
    clickDropdown (command) {
      this.user = command
    }
  }
}
</script>
<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
