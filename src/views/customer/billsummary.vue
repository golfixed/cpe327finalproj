<template>
  <div class="billsummary-display">
    <div class="left-panel">
      <div class="bill-paper-bg">
        <img class="top-bill-cut" src="/static/img/billlist/top.png" />
        <img class="bottom-bill-cut" src="/static/img/billlist/bottom.png" />
        <div class="bill-paper-header">
          <img src="/static/img/Logo.png" class="bill-logo" />
          <div>
            <label class="bill-paper-title">KFC @KMUTT</label>
            <label class="bill-paper-address">m112 Prachutit 56, Bangkok, Thailand</label>
            <label class="bill-paper-phoneno">Tel. +662-200-0000 (10)</label>
          </div>
        </div>
        <div class="bill-paper-list">
          <ul v-if="billList.set.length >= 1">
            <li class="bill-menu-list" v-for="(data, i) in billList.set" :key="i">
              <div style="display:grid;grid-template-columns: 70% 30%;">
                <label class="bill-menu-name">{{data['count']}} × {{data['menuName']}}</label>
                <label class="bill-menu-price">$ {{data['price'].toFixed(2)}}</label>
              </div>
              <div style="display:flex;flex-direction:column;">
                <label class="bill-menu-item">{{data.item1['count']}} × {{data.item1['itemName']}}</label>
                <label class="bill-menu-item">{{data.item2['count']}} × {{data.item2['itemName']}}</label>
                <label class="bill-menu-item">{{data.item3['count']}} × {{data.item3['itemName']}}</label>
              </div>
            </li>
          </ul>
          <ul v-if="billList.alacarte.length >= 1">
            <li class="bill-menu-list" v-for="(data, i) in billList.alacarte" :key="i">
              <div style="display:grid;grid-template-columns: 70% 30%;">
                <label class="bill-menu-name">{{data['count']}} × {{data['itemTitle']}}</label>
                <label class="bill-menu-price">$ {{data['price'].toFixed(2)}}</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right-panel">
      <div class="sumdetail-div">
        <h1
          class="page-title"
          style="position: inherit; margin-bottom: 100px;margin-top: 20px;"
        >{{$t("messages.pageTitle.billSummary")}}</h1>
        <div class="detail-item">
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.totalItems")}}</label>
          <label class="detail-item-right detail-list-number">{{total_item}}</label>
        </div>
        <div
          class="detail-item"
          style="border:1px solid #F0F0F0;border-width: 0 0 1px 0;padding-bottom:20px;margin-bottom:0px;"
        >
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.totalQty")}}</label>
          <label class="detail-item-right detail-list-number">{{total_qty}}</label>
        </div>
        <div class="detail-item" style="padding-top: 10px;">
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.subTotal")}}</label>
          <label class="detail-item-right detail-list-number">$ {{total_sub.toFixed(2)}}</label>
        </div>
        <div class="detail-item">
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.vat")}}</label>
          <label class="detail-item-right detail-list-number">$ {{total_Vat.toFixed(2)}}</label>
        </div>
        <div class="detail-item">
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.serviceCharge")}}</label>
          <label class="detail-item-right detail-list-number">$ {{total_service.toFixed(2)}}</label>
        </div>
        <div class="detail-item">
          <label
            class="detail-item-left detail-list-text-hl"
          >{{$t("messages.onPageText.billSummary.totalPrice")}}</label>
          <label class="detail-item-right detail-list-number-hl">$ {{total_price.toFixed(2)}}</label>
        </div>
      </div>
      <div class="button-div">
        <label
          class="beforeconfirm-text"
        >{{ $t("messages.onPageText.billSummary.checkBeforeConfirm")}}</label>
        <button class="btn-popup btn-confirm" v-on:click="openPopup('checktable');">
          <i class="fas fa-check btn-icon"></i>
          <label class="btn-text">{{ $t("messages.buttonText.confirm") }}</label>
        </button>
        <!-- <router-link to="/customer/confirmorder">
          <button class="btn-popup btn-back" style="margin-top: 20px;">
            <i class="fas fa-arrow-left btn-icon-grey"></i>
            <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
          </button>
        </router-link>-->
      </div>
    </div>
    <div class="dim-bg" v-if="isCheckTableOpen == true " v-on:click="closePopup();"></div>
    <div class="popup-box-container" v-if="isCheckTableOpen == true ">
      <div class="popup-box" v-if="isCheckTableOpen == true">
        <h3 class="popup-text-title" style="color:#ff8303;">
          {{ $t("messages.popupText.getCheck1") }}
          <br />
          {{ $t("messages.popupText.getCheck2") }}
        </h3>
        <div class="popup-text-icon-container">
          <label class="table-number">{{this.$store.state.tableNumber - 1}}</label>
        </div>
        <router-link to="/customer/thankyou">
          <button class="btn-popup btn-confirm">
            <i class="fas fa-check btn-icon"></i>
            <label class="btn-text">{{ $t("messages.buttonText.ok") }}</label>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import layout_toolbaronly from "@/layouts/toolbaronly.vue";
export default {
  name: "order-confirm",
  created() {
    this.$emit(`update:layout`, layout_toolbaronly);
  },
  computed: {
    billList: function() {
      return this.$store.state.billList[0];
    },
    total_item: function() {
      return this.billList.set.length + this.billList.alacarte.length;
    },
    total_qty: function() {
      var set =
        this.billList.set.reduce((acc, item) => acc + item.price, 0) *
        this.billList.set.reduce((acc, item) => acc + item.count, 0);
      var alacarte =
        this.billList.alacarte.reduce((acc, item) => acc + item.price, 0) *
        this.billList.alacarte.reduce((acc, item) => acc + item.count, 0);
      var total = set + alacarte;
      return total;
    },
    total_sub: function() {
      var set =
        this.billList.set.reduce((acc, item) => acc + item.price, 0) *
        this.billList.set.reduce((acc, item) => acc + item.count, 0);
      var alacarte =
        this.billList.alacarte.reduce((acc, item) => acc + item.price, 0) *
        this.billList.alacarte.reduce((acc, item) => acc + item.count, 0);
      var total = set + alacarte;
      return total;
    },
    total_price: function() {
      var set =
        this.billList.set.reduce((acc, item) => acc + item.price, 0) *
        this.billList.set.reduce((acc, item) => acc + item.count, 0);
      var alacarte =
        this.billList.alacarte.reduce((acc, item) => acc + item.price, 0) *
        this.billList.alacarte.reduce((acc, item) => acc + item.count, 0);
      var servicecharged = (set + alacarte) * 0.15;
      var total = servicecharged + (set + alacarte);
      return total;
    },
    total_service: function() {
      var set =
        this.billList.set.reduce((acc, item) => acc + item.price, 0) *
        this.billList.set.reduce((acc, item) => acc + item.count, 0);
      var alacarte =
        this.billList.alacarte.reduce((acc, item) => acc + item.price, 0) *
        this.billList.alacarte.reduce((acc, item) => acc + item.count, 0);
      var total = set + alacarte;
      var service = total * 0.15;
      return service;
    },
    total_Vat: function() {
      var set =
        this.billList.set.reduce((acc, item) => acc + item.price, 0) *
        this.billList.set.reduce((acc, item) => acc + item.count, 0);
      var alacarte =
        this.billList.alacarte.reduce((acc, item) => acc + item.price, 0) *
        this.billList.alacarte.reduce((acc, item) => acc + item.count, 0);
      var total_price = set + alacarte;
      var vat = total_price * 0.07;
      return vat;
    }
  },
  data() {
    return {
      isCheckTableOpen: false
    };
  },
  methods: {
    openPopup: function(target) {
      if (target == "checktable") {
        this.isCheckTableOpen = true;
      } else {
        this.isCheckTableOpen = this.isCheckTableOpen;
      }
    },
    closePopup: function(target) {
      if (target == "checktable") {
        this.isCheckTableOpen = false;
      } else {
        this.isCheckTableOpen = false;
      }
    }
  }
};
</script>

<style scoped>
.top-bill-cut {
  position: absolute;
  top: -12px;
  left: 0;
  width: 100%;
}
.bottom-bill-cut {
  position: absolute;
  bottom: -13px;
  left: 0;
  width: 100%;
}
.table-number {
  font-style: normal;
  font-weight: 900;
  font-size: 75px;
  line-height: 88px;
  text-align: center;
  color: #ff8303;
}
ul {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
.bill-menu-item,
.bill-menu-price,
.bill-menu-price {
  margin-bottom: 10px;
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
  line-height: 21px;
  text-indent: 20px;
  color: #8c8c8c;
}
.bill-menu-list {
  padding: 20px 0;
  border: 1px solid #f0f0f0;
  border-width: 0 0 1px 0;
}
.bill-logo {
  width: 70px;
  margin-right: 20px;
}
.bill-paper-header {
  display: flex;
  align-items: center;
  border: 1px solid #c4c4c4;
  border-width: 0 0 2px 0;
  padding-bottom: 30px;
}
.bill-paper-header > div {
  display: flex;
  flex-direction: column;
}
.bill-paper-title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.75);
}
.bill-paper-address,
.bill-paper-phoneno {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.75);
}
.bill-paper-bg {
  width: 360px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
  z-index: 3;
  padding: 40px;
  margin-bottom: 40px;
  position: relative;
}
.detail-list-text {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #515151;
}
.detail-list-number {
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
}
.detail-list-text-hl {
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;

  color: #515151;
}
.detail-list-number-hl {
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;

  /* Tabbar Selected */
  color: #ff8303;
}
.detail-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 15px 0;
}
.detail-item-right {
  text-align: right;
}
.left-panel,
.right-panel {
  padding: 0px 80px 40px 80px;
}
.left-panel {
  display: flex;
  justify-content: center;
  padding-right: 40px;
  padding-top: 40px;
  padding-left: 40px;
  overflow: scroll;
  margin-top: -90px;
  background-color: #fff;
  z-index: 1;
}
.right-panel {
  padding-left: 40px;
  position: relative;
  display: flex;
  justify-content: center;
}
.billsummary-display {
  display: grid;
  grid-template-columns: 50% 50%;
  height: calc(100vh - 90px);
}
.order-confirm-page-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
}
.title1 {
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  text-align: center;

  /* Head Text */
  color: rgba(0, 0, 0, 0.75);

  margin-bottom: 15px;
}
.title2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  text-align: center;

  color: #515151;
}
.order-confirm-page-img {
  width: 150px;
  color: green;
}

.beforeconfirm-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  text-align: center;

  /* red */
  color: #eb5463;
}
.button-div {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
  width: 380px;
}
.sumdetail-div {
  display: block;
  width: 380px;
}
</style>