<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";


const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

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

let chart

onMounted(() => {

  chart = ref(null);

  const myChart = echarts.init(chart.value);

  option && myChart.setOption(option);
});
</script>

<template>
    <div class="homepage">
      <div class="top">
        <el-card v-for="(item, index) in topData" :key="index">
          <div class="per">
            <p>{{ item.title }}</p>
            <div>
              <span class="span1">{{ item.price }}</span>
              <span class="span2">{{ item.parcent }}</span>
            </div>
            <span class="span3">{{ item.context }}</span>
          </div>
        </el-card>
      </div>
      <el-card>
        <div class="chart" ref="chart" style="width: 600px;height: 600px;"></div>
      </el-card>
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
.el-card{
    margin-top: 20px;
}
</style>