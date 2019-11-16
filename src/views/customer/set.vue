<template>
  <div>
    <h2 class="page-title">{{ $t("messages.pageTitle.set") }}</h2>
    <div class="display-area">
      <ul class="card-tray">
        <li class="menu-card" v-for="(data, i) in promotionList" :key="i">
          <img class="menu-img" :src="data['pictureURL']" />
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
      promotionList: [
        {
          promotionID: 1,
          pictureURL: "./static/img/promotions/promo1.png"
        },
        {
          promotionID: 2,
          pictureURL: "./static/img/promotions/promo2.png"
        },
        {
          promotionID: 3,
          pictureURL: "./static/img/promotions/promo3.png"
        },
        {
          promotionID: 4,
          pictureURL: "./static/img/promotions/promo1.png"
        },
        {
          promotionID: 5,
          pictureURL: "./static/img/promotions/promo2.png"
        },
        {
          promotionID: 6,
          pictureURL: "./static/img/promotions/promo3.png"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.display-area {
  display: flex;
  align-items: center;
  width: 100vw;
  overflow: scroll;
}
.card-tray {
  white-space: nowrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.menu-card {
  width: 432px;
  height: 270px;
  background-color: #ff8303;
  margin-right: 20px;
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
}
.menu-card:first-child {
  margin-left: 20px;
}
.menu-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
}
.display-area {
  display: flex;
  align-items: center;
  width: 100vw;
  overflow: scroll;
}
</style>