<template>
  <div class="menubar">
    <div class="menulist">
      <ul class="menulist-list">
        <router-link to="/customer/promotion" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-percentage menu-icon"></i>
            {{ $t("messages.menubar.item1") }}
          </li>
        </router-link>
        <router-link to="/customer/set" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-utensils menu-icon"></i>
            {{ $t("messages.menubar.item2") }}
          </li>
        </router-link>
        <router-link to="/customer/alacarte" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-drumstick-bite menu-icon"></i>
            {{ $t("messages.menubar.item3") }}
          </li>
        </router-link>
        <router-link to="/customer/appitizer" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-pizza-slice menu-icon"></i>
            {{ $t("messages.menubar.item4") }}
          </li>
        </router-link>
        <router-link to="/customer/drink" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-coffee menu-icon"></i>
            {{ $t("messages.menubar.item5") }}
          </li>
        </router-link>
      </ul>
    </div>
    <div class="order-btn" v-on:click="openOrderList();">
      <i class="fas fa-list btn-icon"></i>
      <label class="btn-text">{{ $t("messages.menubar.orderBtn") }}</label>
    </div>

    <!-- OrderList Panel -->
    <div class="dim-bg" v-on:click="closeOrderList();" v-if="isOrderListOpen == true"></div>
    <div class="orderlist-panel" v-if="isOrderListOpen == true">
      <div class="panel-bg">
        <h1
          class="page-title panel-title-text"
          style="position:unset;"
        >{{ $t("messages.pageTitle.orderList") }}</h1>
        <div class="orderlist-display"></div>
        <div class="button-div">
          <router-link to="/customer/confirmorder">
            <button
              class="btn-popup btn-confirm"
              style="margin-top: 0;"
              v-on:click="closeOrderList();"
            >
              <i class="fas fa-check btn-icon"></i>
              <label class="btn-text">{{ $t("messages.buttonText.placeOrder") }}</label>
            </button>
          </router-link>
          <button
            class="btn-popup btn-white"
            style="margin-top: 20px;"
            v-on:click="closeOrderList();"
          >
            <i class="fas fa-arrow-left btn-icon-grey"></i>
            <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menubar",
  components: {},
  data() {
    return {
      isOrderListOpen: false
    };
  },
  methods: {
    openOrderList: function() {
      this.isOrderListOpen = true;
    },
    closeOrderList: function() {
      this.isOrderListOpen = false;
    }
  }
};
</script>

<style scoped>
.router-link-exact-active,
.menu-link {
  display: flex;
  justify-content: center;
}
.router-link-exact-active > li {
  font-style: normal;
  /* font-weight: bold; */
  font-size: 18px;
  line-height: 21px;
  color: #ff8303;
  margin: 0;
  padding: 0;
}
.menubar {
  max-height: 100px;
  padding: 0 20px 20px 20px;
  display: flex;
}
.menulist {
  background-color: #f6f6f6;
  height: 60px;
  border-radius: 10000px;
  width: calc(100vw - 230px);
}
.menulist-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0 20px;
  height: 60px;
}
.menu-item {
  text-align: center;
  color: #8c8c8c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
}
.order-btn {
  background-color: #ff8303;
  border-radius: 10000px;
  position: absolute;
  right: 20px;
  height: 60px;
  width: fit-content;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.panel-bg {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  padding: 40px 40px 20px 40px;
  background: #ffffff;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.25);
  width: 370px;
  height: calc(100vh - 40px);
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  grid-template-rows: 50px 1fr 140px;
}
.panel-title-text {
  color: #ff8303;
  text-transform: uppercase;
}
</style>