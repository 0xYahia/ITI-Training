<template>
  <div class="container">
    <form @submit.prevent="addUser" class="form">
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          v-model="user.first_name"
          type="text"
          class="form-control"
          id="first_name"
          placeholder="First Name"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          v-model="user.last_name"
          type="text"
          class="form-control"
          id="last_name"
          placeholder="Last Name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <div class="form-check">
          <input
            v-model="user.gender"
            class="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
          />
          <label class="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check">
          <input
            v-model="user.gender"
            class="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
          />
          <label class="form-check-label" for="female">Female</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary me-2">Add</button>
      <button class="btn btn-dark" @click="back">Go Back</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addUser",
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
      },
    };
  },
  methods: {
    async addUser() {
      await axios
        .post("http://localhost:3000/users", this.user)
        .catch((err) => {
          console.log(err);
        });
      this.user.first_name = "";
      this.user.last_name = "";
      this.user.email = "";
      this.user.gender = "";
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
