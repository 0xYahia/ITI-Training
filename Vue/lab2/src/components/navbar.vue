<template>
  <header className="bg-dark d-flex justify-content-between p-2">
    <h3 className="text-light pt-1">Navbar</h3>
    <ul
      className="d-flex pt-2 bg-dark justify-content-center gap-5 list-unstyled me-5 "
    >
      <li>
        <router-link class="link-light text-decoration-none" to="/">
          All Users
        </router-link>
      </li>
      <li>
        <router-link class="link-light text-decoration-none" to="/add">
          Add User
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style scoped></style>
