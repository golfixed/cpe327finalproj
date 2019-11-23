<template>
  <div class="billsummary-display">
    <div class="left-panel"></div>
    <div class="right-panel">
      <div class="sumdetail-div">
        <h1
          class="page-title"
          style="position: inherit; margin-bottom: 50px;margin-top: 0px;"
        >{{$t("messages.pageTitle.billSummary")}}</h1>
        <div class="detail-item">
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.totalItems")}}</label>
          <label class="detail-item-right detail-list-number">12</label>
        </div>
        <div
          class="detail-item"
          style="border:1px solid #F0F0F0;border-width: 0 0 1px 0;padding-bottom:20px;margin-bottom:0px;"
        >
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.totalQty")}}</label>
          <label class="detail-item-right detail-list-number">12</label>
        </div>
        <div class="detail-item" style="padding-top: 10px;">
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.subTotal")}}</label>
          <label class="detail-item-right detail-list-number">540.99</label>
        </div>
        <div class="detail-item">
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.vat")}}</label>
          <label class="detail-item-right detail-list-number">3.99</label>
        </div>
        <div class="detail-item">
          <label
            class="detail-item-left detail-list-text"
          >{{$t("messages.onPageText.billSummary.serviceCharge")}}</label>
          <label class="detail-item-right detail-list-number">12.99</label>
        </div>
        <div class="detail-item">
          <label
            class="detail-item-left detail-list-text-hl"
          >{{$t("messages.onPageText.billSummary.totalPrice")}}</label>
          <label class="detail-item-right detail-list-number-hl">$ 570.00</label>
        </div>
      </div>
      <div class="button-div">
        <label
          class="beforeconfirm-text"
        >{{ $t("messages.onPageText.billSummary.checkBeforeConfirm")}}</label>
        <router-link to="/customer/billsum">
          <button class="btn-popup btn-confirm" v-on:click="closeOrderList();">
            <i class="fas fa-check btn-icon"></i>
            <label class="btn-text">{{ $t("messages.buttonText.confirm") }}</label>
          </button>
        </router-link>
        <router-link to="/customer/confirmorder">
          <button
            class="btn-popup btn-back"
            v-on:click="closeOrderList();"
            style="margin-top: 20px;"
          >
            <i class="fas fa-arrow-left btn-icon-grey"></i>
            <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
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
  }
};
</script>

<style scoped>
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
  padding: 40px 80px 40px 80px;
}
.left-panel {
  padding-right: 40px;
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