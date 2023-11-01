<script setup>
import { useRouter } from "vue-router";
import { useMyStore } from "../stores/myStore";

const router = useRouter()
const myStore = useMyStore();

const fold = () => {
  myStore.isCollapse = !myStore.isCollapse;
};

const logout = () =>{
  router.push("/login")
}

const refresh = () =>{
  window.location.reload()
}

</script>

<template>
  <div class="header">
    <div class="left" @click="fold">
      <el-icon v-if="myStore.isCollapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
    <div class="right">
      <div class="msg">
        <!-- <span>消息</span> -->
        <div class="refresh" @click="refresh">
        <el-icon><RefreshRight /></el-icon>
        </div>
        <el-badge is-dot class="item">
          <el-icon><ChatDotSquare /></el-icon>
        </el-badge>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          操作
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>项目地址</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    padding: 0px 15px;
    cursor: pointer;
    .el-icon {
      padding-top: 2px;
    }
  }
  .right {
    cursor: pointer;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .msg {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0px 20px;
      span {
        font-size: 15px;
        margin: 0px 5px;
      }
      .refresh{
        width: auto;
        height: 100%;
        margin-right: 15px;
      }
    }
    .el-dropdown-item {
      font-size: 15px;
    }
  }
}
:focus {
  outline: none;
}
</style>