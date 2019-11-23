<template>
  <div class="home-container">
    <div>
      <div>
        <h1>Welcome to iRMS</h1>
        <h2>Please select your role</h2>
      </div>
      <div class="home-display-grid">
        <router-link to="/customer/home">
          <div>
            <h2>Customer</h2>
          </div>
        </router-link>
        <router-link to="/cooker/home">
          <div>
            <h2>Cooker</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import layout_main from "@/layouts/main.vue";
export default {
  name: "view-home",
  created() {
    this.$emit(`update:layout`, layout_main);
  }
};
</script>

<style scoped>
.home-display-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>