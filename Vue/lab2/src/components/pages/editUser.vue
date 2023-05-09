<template>
  <div class="container">
    <form @submit.prevent="editUser" class="form">
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          v-model="formData.first_name"
          v-bind:key="formData.first_name"
          type="text"
          class="form-control"
          id="first_name"
          placeholder="First Name"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          v-model="formData.last_name"
          v-bind:key="formData.last_name"
          type="text"
          class="form-control"
          id="last_name"
          placeholder="Last Name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="formData.email"
          v-bind:key="formData.email"
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
            v-model="formData.gender"
            v-bind:key="formData.gender + '_male'"
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
            v-model="formData.gender"
            v-bind:key="formData.gender + '_female'"
            class="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
          />
          <label class="form-check-label" for="female">Female</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary me-2">Edit</button>
      <button class="btn btn-dark" @click="back">Go Back</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editUser",
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
      },
      userId: 0,
      user: {},
    };
  },
  created() {
    this.getUserById();
  },
  methods: {
    getUserById() {
      this.userId = this.$route.params.id;
      axios.get(`http://localhost:3000/users/${this.userId}`).then((res) => {
        this.user = res.data;
        this.formData = this.user;
      });
    },
    editUser() {
      axios
        .put(`http://localhost:3000/edit/${this.userId}`, {
          ...this.user,
          ...this.formData,
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
