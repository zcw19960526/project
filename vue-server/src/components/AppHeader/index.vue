<template>
  <div class="header">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit"
                          command="a">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button"
                          command="b">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { logout } from '@/api/login.js';
export default {
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'a':
          this.$message('点击修改密码')
          break;
        case 'b':
          logout(localStorage.getItem("usertoken")).then(resp => {
            if (resp.data.flag) {
              localStorage.removeItem("usertoken")
              localStorage.removeItem("userinfo")
              this.$router.push('/login')
            } else {
              this.$message({
                message: resp.data.message,
                type: 'warning'
              })
            }
          })
          break;
        default:
          break;
      }
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