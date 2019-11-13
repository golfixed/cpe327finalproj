<template>
  <div id="layout-customer">
    <div>
      <toolbar />
    </div>
    <div>
      <slot />
    </div>
    <div class="menubar-layout">
      <menubar />
    </div>
  </div>
</template>

<script>
import menubar from "@/components/customer/menubar.vue";
import toolbar from "@/components/customer/toolbar.vue";
export default {
  name: "cutomer-tablet-screen",
  components: {
    menubar,
    toolbar
  }
};
</script>

<style>
#layout-customer {
  padding: 0;
  margin: 0;
}
.btn-text,
.btn-icon {
  color: #fff;
}
.btn-text-red,
.btn-icon-red {
  color: #eb5463;
}
.btn-text-grey,
.btn-icon-grey {
  color: #8c8c8c;
}

.btn-text,
.btn-text-red,
.btn-text-grey {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
}
.btn-icon,
.btn-icon-red,
.btn-icon-grey {
  font-size: 20px;
  margin-right: 15px;
  padding: 0;
}
.menu-icon {
  margin-right: 15px;
}
.menubar-layout {
  width: 100vw;
  position: absolute;
  bottom: 0;
}
.page-title {
  position: absolute;
  top: 20px;
  left: 90px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
  height: 50px;
}
</style>