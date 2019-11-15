<template>
  <div class="customer-home-grid">
    <h2 class="page-title" v-if=" currentTab == 'promo'">Promotions</h2>
    <h2 class="page-title" v-if=" currentTab == 'deal'">Special Deal</h2>
    <div class="tabbar">
      <ul class="tab-container">
        <div v-on:click="switchTab('promo')">
          <li class="tab-item" v-if=" currentTab == 'deal'">Promotions</li>
          <li class="tab-item-selected" v-if=" currentTab == 'promo'">Promotions</li>
        </div>
        <div v-on:click="switchTab('deal')">
          <li class="tab-item" v-if=" currentTab == 'promo'">Deals</li>
          <li class="tab-item-selected" v-if=" currentTab == 'deal'">Deals</li>
        </div>
      </ul>
    </div>
    <div class="display-area">
      <ul class="card-tray" v-if=" currentTab == 'promo'">
        <li class="promo-card" v-for="(data, i) in promotionList" :key="i">
          <img class="promo-img" :src="data['pictureURL']" />
        </li>
      </ul>
      <ul class="card-tray" v-if=" currentTab == 'deal'">
        <li class="deal-card" v-for="(data, n) in dealList" :key="n">
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
      currentTab: "promo",
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
        }
      ],
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
  },
  methods: {
    switchTab: function(target) {
      this.currentTab = target;
    }
  }
};
</script>

<style scoped>
.promo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
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
}
.promo-card {
  width: 820px;
  height: 480px;
  background-color: #ff8303;
  margin-right: 20px;
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
}
.promo-card:first-child {
  margin-left: 20px;
}
.deal-img {
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
.deal-card {
  width: 400px;
  height: 480px;
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
  /* font-weight: bold; */
  color: #ff8303;
}
</style>