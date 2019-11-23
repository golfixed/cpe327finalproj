<template>
  <div></div>
</template>

<script>
export default {
  name: "selectAmount Popup ",
  methods: {
    addItem: function(itemID) {
      this.$store.commit("UPDATE_LIST", itemID);
    }
  }
};
</script>

<style>
</style>