<template>
  <div>
    <h1>TESTrrrrrrr</h1>
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

<style>
</style>