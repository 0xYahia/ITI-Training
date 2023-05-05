<template>
  <h1>App</h1>
  <allUsers />
  <userDetails />
  <errorPage />
</template>

<script setup>
import errorPage from "./components/pages/errorPage.vue";
import allUsers from "./components/pages/allUsers.vue";
import userDetails from "./components/pages/userDetails.vue";
components: {
  errorPage, allUsers, userDetails;
}
</script>

<style scoped></style>
