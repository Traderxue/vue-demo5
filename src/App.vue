<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

const getIPAddress = async () => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    const clientIP = response.data.ip;
    window.localStorage.setItem('ip',clientIP)
  } catch (error) {
    console.error('Error:', error);
  }
};

onMounted(()=>{
  getIPAddress()
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
