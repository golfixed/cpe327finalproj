<template>
  <div class="main-body" id="app">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: "div"
    };
  }
};
</script>

<style>
.main-body {
  font-family: "Roboto";
}
a {
  text-decoration: none;
}
a:focus {
  outline: none;
}
</style>