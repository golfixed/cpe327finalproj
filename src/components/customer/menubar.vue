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
        <div class="panel-title">
          <h1
            class="page-title panel-title-text"
            style="position:unset;"
          >{{ $t("messages.pageTitle.orderList") }}</h1>
          <div
            class="clear-all-btn"
            v-on:click="toggleDelete('clear','open');"
            v-if="orderList.length != 0 || orderList_Alacarte.length != 0"
          >
            <i class="far fa-trash-alt"></i>
            <label>{{ $t("messages.onPageText.clearAll")}}</label>
          </div>
        </div>
        <div class="orderlist-display">
          <div
            class="no-item supercenter"
            v-if="orderList.length == 0 && orderList_Alacarte.length == 0"
          >
            <i class="fas fa-clipboard"></i>
            <label>{{ $t("messages.onPageText.noItem")}}</label>
          </div>
          <ul>
            <!-- SET List-->
            <div class="orderlist-catDivide" v-if="orderList.length != 0">
              <label>{{ $t("messages.onPageText.orderList.categorySet")}}</label>
            </div>
            <li class="bill-menu-list" v-for="(data, i) in orderList" :key="i">
              <div class="menu-item-list">
                <div>
                  <label class="bill-menu-name">{{data['count']}} × {{data['menuName']}}</label>
                </div>
                <div>
                  <label class="bill-menu-price">$ {{data['price'].toFixed(2)}}</label>
                </div>
              </div>
              <div class="bill-list-detail">
                <label class="bill-menu-item">{{data.item1['count']}} × {{data.item1['itemName']}}</label>
                <label class="bill-menu-item">{{data.item2['count']}} × {{data.item2['itemName']}}</label>
                <label class="bill-menu-item">{{data.item3['count']}} × {{data.item3['itemName']}}</label>
              </div>
              <div
                class="delete-btn"
                v-on:click="fetchDeleteInfo(i, 'set');toggleDelete('delete','open');"
              >
                <i class="far fa-trash-alt"></i>
              </div>
            </li>

            <!-- Alacarte List-->
            <div
              class="orderlist-catDivide"
              style="padding-top: 20px;"
              v-if="orderList_Alacarte.length  != 0"
            >
              <label>{{ $t("messages.onPageText.orderList.categoryAlacarte")}}</label>
            </div>
            <li class="bill-menu-list" v-for="(data, i) in orderList_Alacarte" :key="i">
              <div class="menu-item-list">
                <div>
                  <label class="bill-menu-name">{{data['count']}} × {{data['itemTitle']}}</label>
                </div>
                <div>
                  <label class="bill-menu-price">$ {{data['price'].toFixed(2)}}</label>
                </div>
              </div>
              <div
                class="delete-btn"
                style="bottom:20px;"
                v-on:click="fetchDeleteInfo(i, 'alacarte');toggleDelete('delete','open');"
              >
                <i class="far fa-trash-alt"></i>
              </div>
            </li>
          </ul>
        </div>
        <!-- PAGE CONTROLLER -->
        <div class="button-div">
          <button
            class="btn-popup btn-confirm-grey"
            style="margin-top: 0;"
            v-if="orderList.length == 0 && orderList_Alacarte.length == 0"
          >
            <i class="fas fa-check btn-icon"></i>
            <label class="btn-text">{{ $t("messages.buttonText.placeOrder") }}</label>
          </button>
          <router-link
            to="/customer/confirmorder"
            v-if="orderList.length != 0 || orderList_Alacarte.length != 0"
          >
            <button
              class="btn-popup btn-confirm"
              style="margin-top: 0;"
              v-on:click="closeOrderList();placeOrder();"
            >
              <i class="fas fa-check btn-icon"></i>
              <label class="btn-text">{{ $t("messages.buttonText.placeOrder") }}</label>
            </button>
          </router-link>
          <button
            class="btn-popup btn-back"
            style="margin-top: 20px;"
            v-on:click="closeOrderList();"
          >
            <i class="fas fa-arrow-left btn-icon-grey"></i>
            <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
          </button>
        </div>
      </div>
    </div>

    <!-- Confirmation Popup -->
    <div
      class="dim-bg-second"
      v-if="isDeleteOpen == true || isClearOpen == true"
      v-on:click="closeAllPopup();"
    ></div>
    <div class="popup-box-container" v-if="isDeleteOpen == true || isClearOpen == true">
      <!-- SET DELETE INFO-->
      <div class="popup-box" v-if="isDeleteOpen == true && menuInfo.count != 0">
        <h3
          class="popup-text-title popup-text-title-orange"
        >{{ $t("messages.popupText.removeItem") }}</h3>
        <div class="popup-text-icon-container">
          <li class="bill-menu-list popup-list" v-if="menuInfo != null">
            <div style="display:grid;grid-template-columns: 70% 30%;">
              <label class="bill-menu-name">{{menuInfo['count']}} × {{menuInfo['menuName']}}</label>
              <label class="bill-menu-price">$ {{menuInfo['price'].toFixed(2)}}</label>
            </div>
            <div style="display:flex;flex-direction:column;">
              <label
                class="bill-menu-item"
              >{{menuInfo.item1['count']}} × {{menuInfo.item1['itemName']}}</label>
              <label
                class="bill-menu-item"
              >{{menuInfo.item2['count']}} × {{menuInfo.item2['itemName']}}</label>
              <label
                class="bill-menu-item"
              >{{menuInfo.item3['count']}} × {{menuInfo.item3['itemName']}}</label>
            </div>
          </li>
        </div>
        <div class="two-btn-div">
          <button class="btn-popup btn-back" v-on:click="toggleDelete('delete','close');">
            <i class="fas fa-arrow-left btn-icon-grey"></i>
            <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
          </button>
          <button
            class="btn-popup btn-confirm"
            v-on:click="deleteOrder(i);toggleDelete('delete','close');"
          >
            <i class="fas fa-check btn-icon"></i>
            <label class="btn-text">{{ $t("messages.buttonText.yes") }}</label>
          </button>
        </div>
      </div>
      <!-- ITEM DELETE INFO-->
      <div class="popup-box" v-if="isDeleteOpen == true && itemInfo.count > 0">
        <h3
          class="popup-text-title popup-text-title-orange"
        >{{ $t("messages.popupText.removeItem") }}</h3>
        <div class="popup-text-icon-container">
          <li class="bill-menu-list popup-list" v-if="menuInfo != null">
            <div style="display:grid;grid-template-columns: 70% 30%;">
              <label class="bill-menu-name">{{itemInfo['count']}} × {{itemInfo['itemTitle']}}</label>
              <label class="bill-menu-price">$ {{itemInfo['price'].toFixed(2)}}</label>
            </div>
          </li>
        </div>
        <div class="two-btn-div">
          <button class="btn-popup btn-back" v-on:click="toggleDelete('delete','close');">
            <i class="fas fa-arrow-left btn-icon-grey"></i>
            <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
          </button>
          <button
            class="btn-popup btn-confirm"
            v-on:click="deleteItem(itemInfo.index, 'alacarte');toggleDelete('delete','close');"
          >
            <i class="fas fa-check btn-icon"></i>
            <label class="btn-text">{{ $t("messages.buttonText.yes") }}</label>
          </button>
        </div>
      </div>
      <div class="popup-box" v-if="isClearOpen == true">
        <h3
          class="popup-text-title popup-text-title-orange"
        >{{ $t("messages.popupText.removeAll") }}</h3>
        <div class="popup-text-icon-container">
          <i class="fas fa-trash-alt popup-text-icon popup-text-icon-orange"></i>
          <label
            class="clearall-count-text"
          >{{orderList.length + orderList_Alacarte.length}} {{ $t("messages.popupText.count")}}</label>
        </div>
        <div class="two-btn-div">
          <button class="btn-popup btn-back" v-on:click="toggleDelete('clear','close');">
            <i class="fas fa-arrow-left btn-icon-grey"></i>
            <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
          </button>
          <button
            class="btn-popup btn-confirm"
            v-on:click="clearAllOrderList();toggleDelete('clear','close');"
          >
            <i class="fas fa-check btn-icon"></i>
            <label class="btn-text">{{ $t("messages.buttonText.yes") }}</label>
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
      isOrderListOpen: false,
      isDeleteOpen: false,
      isClearOpen: false,
      menuInfo: {},
      itemInfo: {}
    };
  },
  methods: {
    toggleDelete: function(target, method) {
      if (target == "delete") {
        if (method == "open") this.isDeleteOpen = true;
        else this.isDeleteOpen = false;
      } else {
        if (method == "open") this.isClearOpen = true;
        else this.isClearOpen = false;
      }
    },
    fetchDeleteInfo: function(index, method) {
      if (method == "set") {
        this.menuInfo = this.$store.state.orderList[index];
        this.itemInfo.count = 0;
      } else if (method == "alacarte") {
        this.itemInfo = this.$store.state.orderList_Alacarte[index];
        this.itemInfo.index = index;
        this.menuInfo = {
          count: 0,
          item1: {
            count: 0,
            itemName: ""
          },
          item2: {
            count: 0,
            itemName: ""
          },
          item3: {
            count: 0,
            itemName: ""
          }
        };
      } else if (method == "appitizer") {
        this.itemInfo = this.$store.state.orderList_Appitizer[index];
        this.itemInfo.index = index;
        this.menuInfo = {
          count: 0,
          item1: {
            count: 0,
            itemName: ""
          },
          item2: {
            count: 0,
            itemName: ""
          },
          item3: {
            count: 0,
            itemName: ""
          }
        };
      } else if (method == "drink") {
        this.itemInfo = this.$store.state.orderList_Drink[index];
        this.itemInfo.index = index;
        this.menuInfo = {
          count: 0,
          item1: {
            count: 0,
            itemName: ""
          },
          item2: {
            count: 0,
            itemName: ""
          },
          item3: {
            count: 0,
            itemName: ""
          }
        };
      }
    },
    closeAllPopup: function() {
      this.isDeleteOpen = false;
      this.isClearOpen = false;
    },
    openOrderList: function() {
      this.isOrderListOpen = true;
    },
    closeOrderList: function() {
      this.isOrderListOpen = false;
    },
    clearAllOrderList: function() {
      this.$store.commit("CLEARALL_ORDERLIST");
    },
    deleteOrder: function(index) {
      this.$store.commit("DELETE_SET", index);
    },
    deleteItem: function(index, method) {
      this.$store.commit("DELETE_ITEM", { index, method });
    },
    placeOrder: function() {
      this.$store.commit("PLACE_ORDER");
    }
  },
  computed: {
    orderList: function() {
      return this.$store.state.orderList;
    },
    orderList_Alacarte: function() {
      return this.$store.state.orderList_Alacarte;
    },
    currentLang: function() {
      return this.$i18n.locale;
    }
  }
};
</script>

<style scoped>
.menu-item-list {
  display: grid;
  grid-template-columns: 80% 20%;
  width: 95%;
}
.menu-item-list > div {
  display: flex;
  align-items: center;
}
.menu-item-list > div > label {
  margin: 0;
  padding: 0;
}
.orderlist-catDivide {
  width: 100%;
}
.orderlist-catDivide > label {
  color: #8c8c8c;
  font-weight: 900;
  font-style: italic;
  font-size: 18px;
  line-height: 35px;
}
.clearall-count-text {
  font-style: normal;
  font-weight: 900;
  font-size: 29px;
  line-height: 34px;
  text-align: center;
  color: #ff8303;
  margin: 0;
  padding: 0;
  margin-left: 20px;
}
.popup-list {
  width: 100%;
  padding: 0 40px !important;
  border: 0 !important;
}
.no-item {
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.no-item > label,
.no-item > i {
  color: #8c8c8c;
}
.no-item > i {
  font-size: 80px;
  margin-bottom: 30px;
}
.panel-title {
  position: relative;
}
.clear-all-btn {
  position: absolute;
  right: 0;
  bottom: 8px;
}
.clear-all-btn > i {
  color: #ffb568;
  margin-right: 10px;
}
.clear-all-btn > label {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: right;

  color: #ffb568;
}
.delete-btn {
  position: absolute;
  right: 0;
  top: 20px;
  color: #ffb568;
}
.orderlist-display {
  height: calc(100vh - 280px);
  overflow: scroll;
  margin-top: 20px;
  margin-left: -40px;
  padding-left: 40px;
  margin-right: -40px;
  padding-right: 40px;
}
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
  z-index: 6;
  padding: 40px 40px 20px 40px;
  background: #ffffff;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.25);
  width: 370px;
  height: calc(100vh - 60px);
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
ul {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
.bill-menu-name {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
.bill-menu-price {
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  color: #eb5463;
}
.bill-menu-item {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  text-indent: 20px;
  color: #8c8c8c;
}
.bill-menu-list {
  padding: 20px 0;
  border: 1px solid #f0f0f0;
  border-width: 0 0 1px 0;
  position: relative;
}
.bill-list-detail {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}
.bill-list-detail > label {
  margin: 0;
}
</style>