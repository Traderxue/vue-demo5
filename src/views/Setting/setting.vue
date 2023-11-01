<script setup>

const ip = window.localStorage.getItem('ip')

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
      <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.el-breadcrumb{
    margin: 20px 0px;
}
.box{
    margin: 20px 0px;
}
.el-card{
    height: 800px;
}
</style>
