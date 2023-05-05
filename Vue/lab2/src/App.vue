<template>
  <navBar v-if="!$route.meta.hideNavbar" />
  <router-view></router-view>
</template>

<script setup>
import navBar from "./components/navbar.vue";
</script>

<style scoped></style>
