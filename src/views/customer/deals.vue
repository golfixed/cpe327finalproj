<template>
  <div>
    <h2 class="page-title">Special Deals</h2>
    <div class="tabbar">
      <ul class="tab-container">
        <router-link to="/customer/promotion">
          <li class="tab-item">Promotions</li>
        </router-link>
        <router-link to="/customer/deal">
          <li class="tab-item-selected">Deals</li>
        </router-link>
      </ul>
    </div>
    <div class="display-area">
      <ul class="card-tray">
        <li class="deal-card" v-for="(data, i) in dealList" :key="i">
          <img class="deal-img" :src="data['pictureURL']" />
        </li>
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
  },
  data() {
    return {
      dealList: [
        {
          dealID: 1,
          pictureURL: "./static/img/deals/deal1.png"
        },
        {
          dealID: 2,
          pictureURL: "./static/img/deals/deal2.png"
        },
        {
          dealID: 3,
          pictureURL: "./static/img/deals/deal3.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.deal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
}
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
.deal-card {
  width: 333px;
  height: 400px;
  background-color: #ff8303;
  margin-right: 20px;
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #bababa;
}
.deal-card:first-child {
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