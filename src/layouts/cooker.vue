<template>
  <div id="layout-cooker-toolbar">
    <div>
      <toolbar />
    </div>
    <div class="display-cooker-slot">
      <slot />
    </div>
  </div>
</template>

<script>
import toolbar from "@/components/customer/toolbar_cooker.vue";
export default {
  name: "cutomer-tablet-screen",
  components: {
    toolbar
  }
};
</script>

<style>
#layout-cooker {
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: grid;
  grid-template-rows: 90px 1fr;
  height: 100vh;
}
.display-cooker-slot {
  width: 100vw;
  height: calc(100vh - 160px);
  background-color: #f6f6f6;
}
</style>