<template>
  <div class="m-user">
    <template v-if="user">
      Welcome, 
      <span class="username">{{ user }}</span>
      <nuxt-link to="/exit">[Log Out]</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">Login</nuxt-link>
      <nuxt-link to="/register" class="register">Register</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  async mounted() {
    const {
      status,
      data: { user }
    } = await this.$axios.get("/users/getUser");
    if (status === 200) {
      this.user = user;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>