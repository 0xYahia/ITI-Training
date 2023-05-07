<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ id }}</h5>
      <h5 class="card-title">{{ first_name }}</h5>
      <h5 class="card-title">{{ last_name }}</h5>
      <h5 class="card-title">{{ email }}</h5>
      <h5 class="card-title">{{ gender }}</h5>
      <button @click="back" class="btn btn-primary">Go Back</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "userDetails",
  data() {
    return {
      id: this.$route.params.id,
      first_name: "",
      last_name: "",
      gender: "",
      email: "",
    };
  },
  created() {
    this.getUserById();
  },
  methods: {
    getUserById() {
      axios
        .get(`http://localhost:3000/users/?id=${this.id}`)
        .then((res) => {
          this.id = res.data[0].id;
          this.first_name = res.data[0].first_name;
          this.last_name = res.data[0].last_name;
          this.gender = res.data[0].gender;
          this.email = res.data[0].email;
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

<style scoped>
.card {
  width: 18rem;
  margin: 2rem auto;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.card-body {
  display: block;
  text-align: center;
}

.card-title {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.btn {
  margin-top: 1rem;
}
</style>
