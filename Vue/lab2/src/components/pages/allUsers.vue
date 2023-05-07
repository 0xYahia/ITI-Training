<template>
  <table class="table table-striped table-bordered">
    <thead class="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">See More</th>
        <th scope="col">Delete</th>
        <th scope="col">Update</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.first_name }}</td>
        <td>{{ user.last_name }}</td>
        <td>
          <router-link class="btn btn-primary btn-sm" :to="`/users/${user.id}`"
            >User Details</router-link
          >
        </td>
        <td>
          <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
        <td>
          <button @click="updateUser(user.id)" class="btn btn-info btn-sm">
            Update
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "allUsers",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteUser(id) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
          this.getAllUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updatUser(id) {
      axios
        .patch(`http://localhost:3000/users/${id}`)
        .then((res) => {
          this.getAllUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
