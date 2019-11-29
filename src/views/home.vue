<template>
  <div class="home-container">
    <div class="supercenter" style="flex-direction:column;">
      <img class="app-logo" src="/static/img/irmslogo.jpg" />
      <div>
        <h1>Welcome to iRMS</h1>
        <h2>Please select a role</h2>
      </div>
      <div class="home-display-grid">
        <router-link to="/customer/home">
          <div style="  background-color: #ff8303;">
            <h2>Customer</h2>
          </div>
        </router-link>
        <router-link to="/cooker/dashboard">
          <div style="  background-color: #a72828;">
            <h2>Cooker</h2>
          </div>
        </router-link>
      </div>
      <div class="note-div">
        <p>Notes:</p>
        <p>
          <span
            style="color: red;"
          >This prototype is designed for iPad screen resolution with touch screen.</span>
          <br />(iPad mini and iPad with web browsing resolution at 1024 × 768 px ).
        </p>
        <p>
          For a better experience with the prototype.
          <br />Please open this site using Safari on iPad mini or iPad 2 retina display and so on.
        </p>
        <p>This website supports PWA (Progressive Web App).</p>
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
a {
  text-decoration: none;
}
h1,
h2 {
  text-align: center;
}
.home-display-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: fit-content;
  grid-gap: 20px;
}
.home-display-grid > a > div {
  color: #fff;
  padding: 5px 30px;
  border-radius: 20px;
}
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.app-logo {
  width: 150px;
  border-radius: 25px;
}
.note-div {
  margin-top: 20px;
  background-color: #efefef;
  padding: 5px 20px;
  border-radius: 20px;
}
</style>