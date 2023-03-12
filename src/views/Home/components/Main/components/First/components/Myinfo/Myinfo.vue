<template>
  <el-divider>
    <el-icon><star-filled /></el-icon>
  </el-divider>
  <el-descriptions class="myInfo" title="个人信息" style="margin-top: 3em">
    <el-descriptions-item label="姓名：">姚枫</el-descriptions-item>
    <el-descriptions-item label="电话：">13257280930</el-descriptions-item>
    <el-descriptions-item label="户口："
      >湖北省潜江市王场镇</el-descriptions-item
    >
    <el-descriptions-item label="教育背景：">云南财经大学</el-descriptions-item>
    <el-descriptions-item label="职业：">
      <el-tag size="small">Stuent</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="地址："
      >云南省昆明市五华区云南财经大学北院英华420</el-descriptions-item
    >
  </el-descriptions>
  <el-divider content-position="left">时间线</el-divider>
  <el-timeline>
    <el-timeline-item timestamp="2023/3/10" placement="top">
      <el-card>
        <h4>云南财经大学</h4>
        <p>时间：2020/9/1~至今</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2020/7/23" placement="top">
      <el-card>
        <h4>潜江市潜江中学</h4>
        <p>时间：2017/9/1~2020/7/9</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2017/7/30" placement="top">
      <el-card>
        <h4>潜江市王场中学</h4>
        <p>时间：2014/9/1~2017/7/6</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup lang="ts">
import { StarFilled } from "@element-plus/icons-vue"
import {
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElDivider,
  ElIcon,
  ElTimeline,
  ElTimelineItem,
  ElCard,
} from "element-plus"
</script>

<style lang="less">
.myInfo {
  opacity: 0.8;
  .el-descriptions__label {
    font-size: 16px;
    font-weight: bold;
  }
  .el-descriptions__content {
    font-size: 15px;
  }
  .el-descriptions__title {
    color: rgb(0, 0, 0);
    font-size: 25px;
  }
}
</style>
