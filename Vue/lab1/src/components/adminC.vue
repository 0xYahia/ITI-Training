<template>
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
      <tr v-for="a in admins" :key="a">
        <td>{{ a.name }}</td>
        <td>{{ a.age }}</td>
        <td>{{ a.address }}</td>
        <td><button @click="deleteAdmin(a)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "adminC",
  props: ["admins"],
  methods: {
    deleteAdmin(admin) {
      this.$emit("deleteAdmin", admin);
    },
  },
};
</script>

<style scoped>
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
