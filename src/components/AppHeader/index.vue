<template>
  <div class="header">
    <a href="#/">
      <img src="../../assets/Daiwa.png" width="230px" alt="logo" />
    </a>
    <el-dropdown  @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" command="b">注销</el-dropdown-item>
    
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
    methods: {
        handleCommand(command){
            this.$message('点击了'+command)
        }
    }
};
</script>

<style scoped>
.el-dropdown {
    float: right;
    margin-right: 30px; 
}
.el-dropdown-link {
    color: aliceblue;
    cursor: pointer;
}
</style>