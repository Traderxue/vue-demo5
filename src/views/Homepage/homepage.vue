<script setup>
import { ref } from "vue";

const topData = ref([
  {
    title: "Sales",
    price: "$23465",
    parcent: "+2.16%",
    context: "Component past",
  },
  {
    title: "Sales",
    price: "$23465",
    parcent: "+2.16%",
    context: "Component past",
  },
  {
    title: "Sales",
    price: "$23465",
    parcent: "+2.16%",
    context: "Component past",
  },
  {
    title: "Sales",
    price: "$23465",
    parcent: "+2.16%",
    context: "Component past",
  },
  {
    title: "Sales",
    price: "$23465",
    parcent: "+2.16%",
    context: "Component past",
  },
]);
</script>

<template>
  <div class="homepage">
    <div class="top">
      <el-card v-for="(item,index) in topData" :key="index">
        <div class="per">
          <p>{{item.title}}</p>
          <div>
            <span class="span1">{{item.price}}</span>
            <span class="span2">{{item.parcent}}</span>
          </div>
          <span class="span3">{{item.context}}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homepage {
  .top {
    display: flex;
    justify-content: space-around;
    .per {
      width: auto;
      height: 120px;
      margin: 0px 10px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      p {
        font-weight: 600;
      }
      div {
        .span1 {
          font-size: 24px;
          font-weight: 600;
          padding-right: 10px;
        }
        .span2 {
          color: #14ffec;
          font-weight: 600;
        }
      }
      .span3 {
        font-size: 15px;
        color: #555;
        font-weight: 600;
      }
    }
  }
}
</style>