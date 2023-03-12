<template>
  <div class="loginDiv">
    <el-form
      label-width="100px"
      :rules="rules"
      ref="from"
      :model="loginForm"
      class="login-container">
      <h3>登录</h3>
      <el-form-item class="logininput" label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item class="logininput" label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="请输入账号" />
      </el-form-item>
      <el-form-item class="loginbtn">
        <el-button @click="commitform" show-password="true" type="primary"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElInput, ElForm, ElFormItem, ElButton, ElMessage } from "element-plus"
import router from "../../router"
import { reactive } from "vue"
import { onKeyUp } from "@vueuse/core"
const rules = reactive({
  username: [{ required: true, ttigger: "blur", message: "请输入用户名" }],
  password: [{ required: true, ttigger: "blur", message: "请输入密码" }],
})
const loginForm = reactive({
  username: "",
  password: "",
})
const commitform = (): void => {
  if (
    loginForm.username.trim() === "yao" &&
    loginForm.password.trim() === "yao123"
  ) {
    router.push("/home")
  } else {
    ElMessage.error("密码错误!")
    loginForm.username = ""
    loginForm.password = ""
  }
}
</script>
<style>
.loginDiv {
  background: url(../../assets/images/bgi.jpeg);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.login-container {
  margin: 30vh auto;
  box-sizing: border-box;
  width: 25em;
  display: felx;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  backdrop-filter: blur(5px);
  border: 1px solid #ccc;
  border-radius: 2em;
  box-shadow: 10px 10px 10px #333;
}
h3 {
  text-align: center;
  color: #fff;
}
.logininput {
  margin-right: 2em;
  color: #fff;
}
.loginbtn {
  align-self: center;
}
.el-form-item__label {
  color: #fff;
}
.el-button {
  margin-left: 5em;
}
</style>
