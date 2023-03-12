<template>
  <div class="header">
    <h2 class="wel">{{ author }}的个人主页</h2>
    <el-dropdown @command="handleClick">
      <span class="el-dropdown-link">
        <img src="../../../../assets/images/user.jpg" alt="" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">我的</el-dropdown-item>
          <el-dropdown-item command="b">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router"
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus"
import { ref } from "vue"
const router = useRouter()
const author = ref("姚")
const handleClick = (command: string): void => {
  if (command === "a") {
    router.push("/home")
  } else {
    router.push("/login")
  }
}
</script>

<style lang="less">
.header {
  display: flex;
  width: 100em;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid #666;
  background-image: linear-gradient(
    to right,
    rgb(130, 235, 172),
    rgb(17, 128, 62),
    rgb(185, 185, 42)
  );
  h2 {
    margin-left: 1em;
    color: rebeccapurple;
  }
  img {
    width: 5em;
    border-radius: 50%;
  }
}
</style>
