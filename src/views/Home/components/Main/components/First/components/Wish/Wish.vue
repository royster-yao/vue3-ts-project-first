<template>
  <el-divider>
    <el-icon><star-filled /></el-icon>
  </el-divider>
  <el-calendar>
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split("-").slice(1).join("-") }}
        {{ data.isSelected ? "✔️" : "" }}
      </p>
    </template>
  </el-calendar>
</template>

<script setup lang="ts">
import { StarFilled } from "@element-plus/icons-vue"
import { ElDivider, ElCalendar } from "element-plus"
</script>

<style>
.isSelected {
  color: #1989fa;
}
</style>
