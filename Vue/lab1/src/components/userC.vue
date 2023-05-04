<template>
  <hr />
  <button @click="toggleTheme">Theme</button>
  <div :class="{ dark: isDarkTheme }">
    <h1>User</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Adress</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in users" :key="u">
          <td>{{ u.name }}</td>
          <td>{{ u.age }}</td>
          <td>{{ u.address }}</td>
          <td><button @click="deleteUser(u)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "userC",
  props: ["users"],
  isDarkTheme: false,
  data() {
    return {
      bgColor: "white",
      textColor: "black",
    };
  },
  methods: {
    deleteUser(user) {
      this.$emit("deleteUser", user);
    },
    toggleTheme() {
      console.log("toggleTheme");
      this.isDarkTheme = !this.isDarkTheme;
    },
  },
};
</script>

<style scoped>
.dark {
  background-color: #333;
  color: #fff;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
deleteAdmin
