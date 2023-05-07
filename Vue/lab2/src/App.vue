<template>
  <navBar v-if="!$route.meta.hideNavbar" />
  <router-view></router-view>
</template>

<script setup>
import navBar from "./components/navbar.vue";
components: {
  navBar;
}
</script>

<style scoped></style>
