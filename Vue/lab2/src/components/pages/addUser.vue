<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          v-model="first_name"
          type="text"
          class="form-control"
          id="first_name"
          placeholder="First Name"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          v-model="last_name"
          type="text"
          class="form-control"
          id="last_name"
          placeholder="Last Name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="email"
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
            v-model="gender"
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
            v-model="gender"
            class="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
          />
          <label class="form-check-label" for="female">Female</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addUser",
};
</script>

<style scoped></style>
