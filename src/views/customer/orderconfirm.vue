<template>
  <div></div>
</template>

<script>
import layout_withouttools from "@/layouts/withouttools.vue";
export default {
  name: "order-confirm",
  created() {
    this.$emit(`update:layout`, layout_withouttools);
  }
};
</script>

<style>
</style>