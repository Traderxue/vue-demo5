<script setup>

const ip = window.localStorage.getItem('ip')
console.log(ip)
</script>

<template>
  <div class="setting">
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="box">
        <p>欢迎登录,您的IP为 {{ip}}</p>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.el-breadcrumb{
    margin: 20px 0px;
}
</style>
