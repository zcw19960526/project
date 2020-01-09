<template>
  <div class="navbar">
    <el-menu :router="true"
             default-active="/"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">

      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/member/">
        <i class="el-icon-message"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/supplier/">
        <i class="el-icon-document"></i>
        <span slot="title">供应商</span>
      </el-menu-item>
      <el-menu-item index="/staff/">
        <i class="el-icon-star-on"></i>
        <span slot="title">人员管理</span>
      </el-menu-item>
      <el-menu-item index="/goods/">
        <i class="el-icon-bell"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu {
  border-right: none;
}
</style>