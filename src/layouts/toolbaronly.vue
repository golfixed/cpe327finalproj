<template>
  <div id="layout-customer-toolbar">
    <div>
      <toolbar />
    </div>
    <div class="display-slot">
      <slot />
    </div>
  </div>
</template>

<script>
import toolbar from "@/components/customer/toolbar.vue";
export default {
  name: "cutomer-tablet-screen",
  components: {
    toolbar
  }
};
</script>

<style>
#layout-customer {
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: grid;
  grid-template-rows: 90px 1fr;
  height: 100vh;
}
.order-confirm-display {
  width: 100vw;
  height: 100%;
  flex-direction: column;
}
</style>