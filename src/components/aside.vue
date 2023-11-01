<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMyStore } from '../stores/myStore';

const myStore = useMyStore()

const router = useRouter()
const route = useRoute()

</script>

<template>
  <div class="aside">
    <el-menu
      active-text-color="#409EFF"
      background-color="#364f6b"
      class="el-menu-vertical-demo"
      :default-active="route.path"
      text-color="#fff"
      :collapse="myStore.isCollapse"
      :collapse-transition="false"
      router
    >
      <el-menu-item index="home">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="order">
        <el-icon><document /></el-icon>
        <span>开单记录</span>
      </el-menu-item>
      <el-menu-item index="setting">
        <el-icon><setting /></el-icon>
        <span>设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.el-menu{
  border: 0;
}
</style>