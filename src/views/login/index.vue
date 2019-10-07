<template>
  <div class="login-container">
    <el-form :rules="rules" ref="form" :model="form" label-width="80px" class="login-form">
      <h2 class="title">管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
        <el-button>忘记密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, getUserInfo } from "@/api/login";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号名称", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码名称", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          login(this.form.username, this.form.password).then(resp => {
            if (resp.data.flag) {
              localStorage.setItem(
                "usertoken",
                JSON.stringify(resp.data.data.token)
              );
              //true验证成功，通过token获取用户信息
              getUserInfo(resp.data.data.token).then(resp => {
                if (resp.data.flag) {
                  localStorage.setItem(
                    "userinfo",
                    JSON.stringify(resp.data.data)
                  );
                  this.$router.push("/");
                  console.log(resp.data);
                }
                //获取用户的信息
                
              });
            } else {
              this.$message({
                message: resp.data.message,
                type: "warning"
              });
            }
          });
        } else {
          console.log("验证失败");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-form {
  width: 350px;
  margin: 160px auto;
  background-color: #ccc;
  padding: 30px;
  border-radius: 20px;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  background: url("../../assets/Daiwa.png") no-repeat top;
}
.title {
  text-align: center;
}
</style>