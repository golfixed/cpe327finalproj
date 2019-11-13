<template>
  <div>
    <div class="tabbar">
      <ul class="tab-container">
        <li class="tab-item-selected">Promotions</li>
        <li class="tab-item">Deals</li>
      </ul>
    </div>
    <div class="display-area">
      <ul class="card-tray">
        <li class="promo-card"></li>
        <li class="promo-card"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import layout_main from "@/layouts/customer.vue";
export default {
  name: "view-customer-promotion",
  created() {
    this.$emit(`update:layout`, layout_main);
  }
};
</script>

<style scpoed>
.display-area {
  height: calc(100vh - 270px);
  display: flex;
  align-items: center;
}
.card-tray {
  list-style-type: none;
  padding: 0;
  margin: 20px 0 20px 0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.promo-card {
  width: 820px;
  height: 400px;
  background-color: #ff8303;
  margin-right: 20px;
  display: inline-block;
  border-radius: 20px;
}
.promo-card:first-child {
  margin-left: 20px;
}
.tab-container {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.tab-item {
  color: #8c8c8c;
  padding: 0 20px;
}
.tab-item,
.tab-item-selected {
  height: 40px;
  font-family: Roboto;
  font-style: normal;
  margin: 0 10px;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
}
.tab-item-selected {
  background-color: #f6f6f6;
  padding: 0 20px;
  border-radius: 100px;
  font-weight: bold;
  color: #ff8303;
}
</style>