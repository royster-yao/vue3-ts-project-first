<template>
  <div class="Aside">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button style="margin-right: 1em" :label="false"
        >展开</el-radio-button
      >
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      :default-active="activeItem"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><House /></el-icon>
          <span>主页 </span>
        </template>
        <el-menu-item-group>
          <template #title><span>详情 </span></template>
          <el-menu-item @click="getPath" index="1-1">我的</el-menu-item>
          <el-menu-item @click="getPath" index="1-2">目标 </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item @click="getPath" index="2">
        <el-icon><Star /></el-icon>
        <template #title>写一写 </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { House, Star } from "@element-plus/icons-vue"
import {
  ElRadioGroup,
  ElRadioButton,
  ElMenu,
  ElSubMenu,
  ElIcon,
  ElMenuItemGroup,
  ElMenuItem,
  MenuItemRegistered,
} from "element-plus"
import { ref, watch } from "vue"
import { isValidKey } from "@/utils"

const route = useRoute()
const router = useRouter()
const activeItem = ref<string>()
const menuRouteMap = {
  "/home": "1-1",
  "/home/wish": "1-2",
  "/home/write": "2",
}
watch(
  () => route.fullPath,
  (newRoute) => {
    activeItem.value = isValidKey(newRoute, menuRouteMap)
      ? menuRouteMap[newRoute]
      : "1-1"
  },
  { immediate: true }
)
const isCollapse = ref(false)
const handleOpen = (): void => {
  console.log("handleOpen")
}
const handleClose = (): void => {
  console.log("handleClose")
}

const getPath = (e: MenuItemRegistered): void => {
  if (e.index === "1-1") {
    router.push("/home")
  } else if (e.index === "1-2") {
    router.push("/home/wish")
  } else if (e.index === "2") {
    router.push("/home/write")
  }
}
</script>

<style lang="less">
.Aside {
  margin-top: 3em;
}
</style>
