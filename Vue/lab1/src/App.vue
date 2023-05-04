<template>
  <h1>Home</h1>
  <button @click="showHome">Home</button>
  <button @click="showAdmin">Admins</button>
  <button @click="showUser">Users</button>
  <form @submit.prevent="addAdminOrUser" v-if="homeForm">
    <input v-model="name" type="text" placeholder="Name" />
    <input v-model="age" type="number" placeholder="Age" />
    <input v-model="address" type="text" placeholder="Address" />
    <label for="cars">What is your role:</label>
    <select v-model="role">
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
  <adminC :admins="admins" @deleteAdmin="deleteAdmin" v-if="adminForm" />
  <userC :users="users" @deleteUser="deleteUser" v-if="userForm" />
</template>

<script>
import adminC from "./components/adminC.vue";
import userC from "./components/userC.vue";

export default {
  name: "App",
  components: {
    adminC,
    userC,
  },
  data() {
    return {
      name: "",
      age: 0,
      address: "",
      admins: [],
      users: [],
      role: "user",
      homeForm: true,
      adminForm: false,
      userForm: false,
    };
  },
  methods: {
    addAdminOrUser() {
      if (this.role === "admin") {
        this.admins.push({
          name: this.name,
          age: this.age,
          address: this.address,
        });
        this.showAdmin();
      } else if (this.role === "user") {
        this.users.push({
          name: this.name,
          age: this.age,
          address: this.address,
        });
        this.showUser();
      }
      this.name = "";
      this.age = 0;
      this.address = "";
      this.role = "user";
    },
    showHome() {
      this.homeForm = true;
      this.adminForm = false;
      this.userForm = false;
    },
    showAdmin() {
      this.homeForm = false;
      this.adminForm = true;
      this.userForm = false;
    },
    showUser() {
      this.homeForm = false;
      this.adminForm = false;
      this.userForm = true;
    },
    deleteAdmin(admin) {
      this.admins = this.admins.filter((a) => a !== admin);
    },
    deleteUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
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
