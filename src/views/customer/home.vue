<template>
  <div>
    <h1>Welcome Customer</h1>
  </div>
</template>

<script>
import layout_main from "@/layouts/customer.vue";
export default {
  name: "view-customer",
  created() {
    this.$emit(`update:layout`, layout_main);
  }
};
</script>

<style>
</style>