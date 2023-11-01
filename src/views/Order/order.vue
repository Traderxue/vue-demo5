<script setup>
import { ref } from "vue";

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    acvotor:"https://avatars.githubusercontent.com/u"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    acvotor:"https://avatars.githubusercontent.com/u/128983356"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    acvotor:"http://127.0.0.1:5173/img_1.png"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    acvotor:"http://127.0.0.1:5173/img_2.png"
  },
];

</script>

<template>
  <div class="order">
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>开单记录</el-breadcrumb-item>
      </el-breadcrumb>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column label="头像">
          <template #default="scoped">
            <img :src="scoped.row.acvotor" alt="" class="acvotor">
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Address" />
        <el-table-column label="操作">
          <el-button size="small" type="danger">删除</el-button>
          <el-button size="small" type="warning">编辑</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.el-card {
  margin: 15px 0px;
}
.el-table{
  margin: 25px 0px;
}
.acvotor{
  width: 40px;
  height: 40px;  
}
</style>