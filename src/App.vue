<script setup>
// import{routerView} from 'vue-router'

import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
// import WhatsAppFloat from './components/Whatsapp.vue'
import Watsapp from './components/Watsapp.vue';
</script>

<template>
  <div>
    <Header />
    <router-view />   <!-- This shows the current page content (Home, Inventory, etc.) -->
    <Footer />
    <Watsapp />
  </div>
</template>

<style>
/* Optional global styles */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* background-color: #f8f9fa; */
}
</style>