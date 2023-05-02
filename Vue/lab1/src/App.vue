<template>
  <AdminComponent />
  <UserComponent />
  <button>Home</button>
  <button>Admin</button>
  <button>User</button>
  <form>
    <label for="name">Name <input id="name" type="text" /></label>
    <label for="age">Age <input id="age" type="number" /></label>
    <label for="address">Address <input id="address" type="text" /></label>
    <label for="cars">What is your role:</label>
    <select name="role" id="role">
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import AdminComponent from "./components/AdminComponent.vue";
import UserComponent from "./components/UserComponent.vue";

export default {
  name: "App",
  components: {
    AdminComponent,
    UserComponent,
  },
};
</script>

<style>
button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

form {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 20px;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
