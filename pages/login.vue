<template>
  <div class="page-login">
    <div class="login-header">
        <a href="/" class="logo"/>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img src="http://img4.imgtn.bdimg.com/it/u=1788883716,3051888626&fm=26&gp=0.jpg" width="480" height="370" alt="美团网"/>
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{ error }}</h4>
        <p>
          <span>Login</span>
        </p>
        <el-input v-model="username" prefix-icon="profile"></el-input>
        <el-input v-model="password" prefix-icon="password" type="password"></el-input>
        <div class="foot">
          <el-checkbox v-model="checked">Auto login in 7 days</el-checkbox>
          <b>Fogotten Password</b>
        </div>
        <el-button class="btn-login" round size="mini" @click="login">Login</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import CryptoJS from "crypto-js";
export default {
  layout: "blank",
  data() {
    return {
      username: "",
      password: "",
      error: "",
      checked: ""
    };
  },
  methods: {
    login() {
      const self = this;
      self.$axios
        .post("/users/signin", {
          username: window.encodeURIComponent(self.username),
          password: CryptoJS.MD5(self.password).toString()
        })
        .then(({ status, data }) => {
          if (status === 200) {
            if (data && data.code === 0) {
              location.href = "/";
            } else {
              self.error = data.msg;
            }
          } else {
            self.error = `服务器出错，错误码${status}`;
          }
          setTimeout(function() {
            self.error = "";
          }, 1500);
        });
    }
  }
};
</script>
<style lang="scss">
    @import "@/assets/css/login/index.scss";
</style>