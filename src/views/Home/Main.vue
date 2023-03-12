<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <router-view></router-view>
          <!-- <Main></Main> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ElContainer, ElHeader, ElAside, ElMain } from "element-plus"
import Aside from "./components/HomeAside"
import Header from "./components/HomeHeader"
import Main from "./components/Main"
</script>

<style lang="less"></style>
