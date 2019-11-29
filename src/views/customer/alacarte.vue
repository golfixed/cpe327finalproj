<template>
  <div class="withouttab-display">
    <h2 class="page-title">{{ $t("messages.pageTitle.alacarte") }}</h2>
    <div class="display-area" v-if="currentLang == 'th'">
      <ul class="card-tray">
        <li class="menu-item-card" v-for="(data, i) in menu_itemList_th" :key="i">
          <img class="menu-item-img" :src="data['pictureURL']" />
          <div class="menu-item-card-detail">
            <div>
              <h2 class="item-name">{{data['itemTitle']}}</h2>
              <h4 class="item-price">ราคา ${{data['price']}}</h4>
            </div>
          </div>
          <div class="menu-item-card-btn">
            <button class="btn-add btn-card" v-on:click="openSelectPopup();fetchSetDetail(i);">
              <i class="fas fa-plus btn-icon btn-mini-icon"></i>
              <label class="btn-card-text">เพิ่ม</label>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="display-area" v-if="currentLang == 'en'">
      <ul class="card-tray">
        <li class="menu-item-card" v-for="(data, i) in menu_itemList_en" :key="i">
          <img class="menu-item-img" :src="data['pictureURL']" />
          <div class="menu-item-card-detail">
            <div>
              <h2 class="item-name">{{data['itemTitle']}}</h2>
              <h4 class="item-price">Price ${{data['price']}}</h4>
            </div>
          </div>
          <div class="menu-item-card-btn">
            <button class="btn-add btn-card" v-on:click="openSelectPopup();fetchSetDetail(i);">
              <i class="fas fa-plus btn-icon btn-mini-icon"></i>
              <label class="btn-card-text">ADD</label>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="dim-bg" v-if="isSelectQtyOpen == true" v-on:click="closeSelectPopup();"></div>
    <div class="popup-box-container" v-if="isSelectQtyOpen == true">
      <div class="popup-box" v-if="isSelectQtyOpen == true">
        <div class="menudetail-panel">
          <img class="menudetail-img" :src="setDetail['pictureURL']" />
          <h3
            class="popup-text-title popup-text-title-orange supercenter"
          >{{setDetail['itemTitle']}}</h3>
        </div>

        <div class="numberlocker-panel">
          <button
            style="margin-left: 20px;"
            class="btn-numberlocker locker-active"
            v-if="selectAmount > 1"
            v-on:click="selectCountAdjust('minus');"
          >
            <label>
              <i class="fas fa-minus"></i>
            </label>
          </button>
          <button
            style="margin-left: 20px;"
            class="btn-numberlocker locker-inactive"
            v-if="selectAmount == 1"
          >
            <label>
              <i class="fas fa-minus"></i>
            </label>
          </button>
          <div class="numberlocker-bg">
            <label>{{selectAmount}}</label>
          </div>
          <button
            style="margin-right: 20px;"
            class="btn-numberlocker locker-active"
            v-if="selectAmount < 10"
            v-on:click="selectCountAdjust('add');"
          >
            <label>
              <i class="fas fa-plus"></i>
            </label>
          </button>
          <button
            style="margin-right: 20px;"
            class="btn-numberlocker locker-inactive"
            v-if="selectAmount >= 10"
          >
            <label>
              <i class="fas fa-plus"></i>
            </label>
          </button>
        </div>
        <div class="warning-box">
          <label v-if="selectAmount == 10">{{ $t("messages.popupText.overIncrease") }}</label>
        </div>
        <div>
          <button class="btn-popup btn-confirm" v-on:click="addItem();closeSelectPopup();">
            <i class="fas fa-plus btn-icon"></i>
            <label class="btn-text">{{ $t("messages.buttonText.addFull") }}</label>
          </button>
          <button
            class="btn-popup btn-back"
            style="margin-top: 20px;"
            v-on:click="closeSelectPopup();"
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
import layout_main from "@/layouts/customer.vue";
export default {
  name: "view-customer-promotion",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  computed: {
    currentLang: function() {
      return this.$i18n.locale;
    },
    menu_itemList_en: function() {
      return this.$store.state.menuList.menu_alacarte.en;
    },
    menu_itemList_th: function() {
      return this.$store.state.menuList.menu_alacarte.th;
    }
  },
  data() {
    return {
      selectAmount: 1,
      isSelectQtyOpen: false,
      setDetail: {}
    };
  },
  methods: {
    selectCountAdjust: function(method) {
      if (method == "add" && this.selectAmount < 10) {
        this.selectAmount = this.selectAmount + 1;
      } else if (method == "minus" && this.selectAmount != 1) {
        this.selectAmount = this.selectAmount - 1;
      }
    },
    addItem: function() {
      if (this.setDetail) {
        const price = this.setDetail.price;
        const count = this.selectAmount;
        const orderID = Math.random();

        this.$store.commit("UPDATE_ORDERLIST", {
          menuID: orderID,
          itemTitle: this.setDetail.itemTitle,
          type: "alacarte",
          count: this.selectAmount,
          price: price * count
        });
      } else {
        //Nothing to do then
      }
    },
    fetchSetDetail: function(array) {
      this.setDetail = {};
      // this.setDetail = this.menu_itemList_en[array];
      if (this.currentLang == "en") {
        this.setDetail = this.$store.state.menuList.menu_alacarte.en[array];
      } else if (this.currentLang == "th") {
        this.setDetail = this.$store.state.menuList.menu_alacarte.th[array];
      } else {
        //Do nothing
      }
    },
    openSelectPopup: function() {
      this.isSelectQtyOpen = true;
      this.selectAmount = 1;
    },
    closeSelectPopup: function() {
      this.isSelectQtyOpen = false;
    }
  }
};
</script>

<style scoped>
</style>