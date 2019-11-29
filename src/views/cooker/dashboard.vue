<template>
  <div>
    <h2 class="page-title">Cooker Dashboard</h2>
    <div class="cooker-dashboard-grid">
      <div class="card-title supercenter">
        <label style="color: #8C8C8C;">Upcoming</label>
        <i class="fas fa-angle-double-right"></i>
      </div>
      <div class="card-title supercenter">
        <label style="color:#EB5463;">Cooking</label>
        <i class="fas fa-angle-double-right"></i>
      </div>
      <div class="card-title supercenter">
        <label style="color: #89C053;">Done</label>
      </div>
      <!-- INCOMING -->
      <div class="order-card-col">
        <div class="list-null supercenter" v-if="this.$store.state.cookList_InComing.length == 0">
          <label>No upcoming order.</label>
        </div>
        <div class="order-card" v-if="this.$store.state.cookList_InComing.length > 0">
          <div class="header-div">
            <h3>Order NO. {{inComing.orderNumber}}</h3>
            <h4>Table NO. {{inComing.tableNumber}}</h4>
          </div>
          <div class="body-div">
            <ul>
              <li class="menu-list" v-for="(data, i) in inComing_set" :key="i">
                <h1>{{data.count}} × {{data.menuName}}</h1>
                <div class="menu-item-detail">
                  <label>{{data.item1.count}} × {{data.item1.itemName}}</label>
                  <label>{{data.item2.count}} × {{data.item2.itemName}}</label>
                  <label>{{data.item3.count}} × {{data.item3.itemName}}</label>
                </div>
              </li>
            </ul>
            <ul>
              <li class="menu-list" v-for="(data, i) in inComing_alacarte" :key="i">
                <h1>{{data.count}} × {{data.itemTitle}}</h1>
              </li>
            </ul>
          </div>
          <div class="button-div">
            <button style="background-color: #8c8c8c;" v-on:click="GetCook();">
              <i class="fas fa-arrow-right"></i>
              <label>get cook</label>
            </button>
          </div>
        </div>
      </div>

      <!-- COOKING -->
      <div class="order-card-col">
        <div class="list-null supercenter" v-if="this.$store.state.cookList_Cooking.length == 0">
          <label>No cooking order.</label>
        </div>
        <div class="order-card" v-if="this.$store.state.cookList_Cooking.length > 0">
          <div class="header-div">
            <h3>Order NO. {{cooking.orderNumber}}</h3>
            <h4>Table NO. {{cooking.tableNumber}}</h4>
          </div>
          <div class="body-div">
            <ul>
              <li class="menu-list" v-for="(data, i) in cooking_set" :key="i">
                <h1>{{data.count}} × {{data.menuName}}</h1>
                <div class="menu-item-detail">
                  <label>{{data.item1.count}} × {{data.item1.itemName}}</label>
                  <label>{{data.item2.count}} × {{data.item2.itemName}}</label>
                  <label>{{data.item3.count}} × {{data.item3.itemName}}</label>
                </div>
              </li>
            </ul>
            <ul>
              <li class="menu-list" v-for="(data, i) in cooking_alacarte" :key="i">
                <h1>{{data.count}} × {{data.itemTitle}}</h1>
              </li>
            </ul>
          </div>
          <div class="button-div">
            <button style="background-color: #EB5463;" v-on:click="Cooked();">
              <i class="fas fa-arrow-right"></i>
              <label>cooked</label>
            </button>
          </div>
        </div>
      </div>

      <!-- DONE -->
      <div class="order-card-col">
        <div class="list-null supercenter" v-if="this.$store.state.cookList_Done.length == 0">
          <label>No done order.</label>
        </div>
        <div
          class="order-card"
          style="grid-template-rows: 90px auto;"
          v-if="this.$store.state.cookList_Done.length > 0"
        >
          <div class="header-div">
            <h3>Order NO. {{done.orderNumber}}</h3>
            <h4>Table NO. {{done.tableNumber}}</h4>
          </div>
          <div class="body-div" style="max-height:  calc(100% - 20px);">
            <ul>
              <li class="menu-list" v-for="(data, i) in done_set" :key="i">
                <h1>{{data.count}} × {{data.menuName}}</h1>
                <div class="menu-item-detail">
                  <label>{{data.item1.count}} × {{data.item1.itemName}}</label>
                  <label>{{data.item2.count}} × {{data.item2.itemName}}</label>
                  <label>{{data.item3.count}} × {{data.item3.itemName}}</label>
                </div>
              </li>
            </ul>
            <ul>
              <li class="menu-list" v-for="(data, i) in done_alacarte" :key="i">
                <h1>{{data.count}} × {{data.itemTitle}}</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="switch-to-user supercenter" v-if="done != null">
      <router-link to="/customer/confirmorder">
        <i class="fas fa-sync"></i>
        <label>
          Tap here to switch back to
          <b>Customer</b>
        </label>
      </router-link>
    </div>
    <div
      class="switch-to-user supercenter"
      v-if="done == null && inComing == null && cooking ==null"
    >
      <router-link to="/">
        <i class="fas fa-arrow-left"></i>
        <label>Back to Role selection page</label>
      </router-link>
    </div>
  </div>
</template>

<script>
import layout_main from "@/layouts/cooker.vue";
export default {
  name: "CookerDashboardPage",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  computed: {
    inComing: function() {
      return this.$store.state.cookList_InComing[0];
    },
    inComing_set: function() {
      return this.$store.state.cookList_InComing[0].set;
    },
    inComing_alacarte: function() {
      return this.$store.state.cookList_InComing[0].alacarte;
    },
    cooking: function() {
      return this.$store.state.cookList_Cooking[0];
    },
    cooking_set: function() {
      return this.$store.state.cookList_Cooking[0].set;
    },
    cooking_alacarte: function() {
      return this.$store.state.cookList_Cooking[0].alacarte;
    },
    done: function() {
      return this.$store.state.cookList_Done[0];
    },
    done_set: function() {
      return this.$store.state.cookList_Done[0].set;
    },
    done_alacarte: function() {
      return this.$store.state.cookList_Done[0].alacarte;
    }
  },
  methods: {
    GetCook: function() {
      this.$store.commit("COOKER_GETCOOK");
    },
    Cooked: function() {
      this.$store.commit("COOKER_COOKED");
    }
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-list {
  padding: 10px 0;
  border: 1px solid #f0f0f0;
  border-width: 0 0 1px 0;
}
.menu-list > h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin: 0;
}
.menu-item-detail {
  display: flex;
  flex-direction: column;
  padding-left: 15px;
}
.menu-item-detail > label {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #292929;
}
.list-null {
  width: 100%;
  height: 100%;
  background-color: #e4e4e4;
  border-radius: 20px;
}
.list-null > label {
  font-size: 18px;
  color: #8c8c8c;
}
.cooker-dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 70px calc(100vh - 230px);
}
.card-title {
  position: relative;
}
.card-title > label {
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 42px;
  text-align: center;
}
.card-title > i {
  font-size: 30px;
  position: absolute;
  top: 50%;
  right: -15px;
  transform: translate(0, -50%);
  color: #e7e7e7;
}
.order-card-col {
  padding: 0 20px 20px 20px;
}
.order-card {
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  position: relative;
}
.header-div,
.body-div {
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.header-div > h3,
.header-div > h4 {
  margin: 0;
  color: #8c8c8c;
  font-style: normal;
  text-align: center;
}
.header-div > h3 {
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 10px;
}

.header-div > h4 {
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
}
.header-div {
  padding: 20px 0 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #8c8c8c;
  border-width: 0 0 1px 0;
}
.body-div {
  max-height: 100%;
  overflow: scroll;
}
.order-card {
  display: grid;
  grid-template-rows: 90px auto 83px;
  max-height: 100%;
}
.order-card > div.button-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-card > div.button-div > button {
  width: calc(100% - 40px);
  border-radius: 50px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-card > div.button-div > button > i,
.order-card > div.button-div > button > label {
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
}
.order-card > div.button-div > button > i {
  margin-right: 10px;
}
button {
  outline: none;
  border: 0;
}
</style>