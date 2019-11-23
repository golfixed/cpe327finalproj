<template>
  <div class="order-confirm-display supercenter">
    <div class="order-confirm-page-title">
      <div class="supercenter" style="margin-bottom: 40px;">
        <img class="order-confirm-page-img" src="/static/img/orderconfirm/brush.svg" />
      </div>
      <label class="title1">{{ $t("messages.onPageText.orderPlaced")}}</label>
      <label class="title2">{{ $t("messages.onPageText.willBeServed")}}</label>
    </div>
    <div class="button-div" style="width: 370px;">
      <router-link to="/customer/set">
        <button class="btn-popup btn-back" style="margin-top: 0;" v-on:click="closeOrderList();">
          <i class="fas fa-plus btn-icon-grey"></i>
          <label class="btn-text-grey">{{ $t("messages.buttonText.orderMore") }}</label>
        </button>
      </router-link>
      <router-link to="/customer/billsummary">
        <button
          class="btn-popup btn-confirm"
          style="margin-top: 20px;"
          v-on:click="closeOrderList();"
        >
          <i class="fas fa-check-double btn-icon"></i>
          <label class="btn-text">{{ $t("messages.buttonText.checkOut") }}</label>
        </button>
      </router-link>
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
</style>