<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";


const option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: 'Gradient Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 402, 231, 134, 190, 230, 120]
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 302, 181, 234, 210, 290, 150]
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
let chartRef

onMounted(() => {
  chartRef = ref(null);

  const myChart = echarts.init(chartRef.value);

  optionData && myChart.setOption(optionData);
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
        <div class="chart" ref="chartRef" style="width: 100%;height: 600px;"></div>
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