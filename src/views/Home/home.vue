<script setup>
import Aside from "@/components/aside.vue"
import Header from "@/components/header.vue"
import Main from "@/components/main.vue"
import {useMyStore} from "@/stores/myStore.js"

const myStore = useMyStore()

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="{width:!myStore.isCollapse?'180px':'60px'}">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <Main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout{
  width: auto;
  height: 100%;
}
.el-container{
  width: auto;
  height: 100%;
}
.el-aside{
  background: #364f6b;
}
.el-header{
  background: #a6e3e9;
}
.el-main{
  background: #c9d6df;
}
</style>