<template>
  <navBar v-if="!$route.meta.hideNavbar" />
  <router-view></router-view>
</template>

<script setup>
import navBar from "./components/navbar.vue";
import homePage from "./components/pages/home.vue";
import newUser from "./components/pages/newUser.vue";
components: {
  homePage, newUser;
}
</script>

<style scoped></style>
