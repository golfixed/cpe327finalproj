<template>
  <div class="customer-home-grid">
    <h2
      class="page-title"
      v-if=" currentTab == 'promo'"
    >{{ $t("messages.pageTitle.promotion.promo") }}</h2>
    <h2
      class="page-title"
      v-if=" currentTab == 'deal'"
    >{{ $t("messages.pageTitle.promotion.deal") }}</h2>
    <div class="tabbar">
      <ul class="tab-container">
        <div v-on:click="switchTab('promo')">
          <li
            class="tab-item"
            v-if=" currentTab == 'deal'"
          >{{ $t("messages.pageTitle.promotion.promo") }}</li>
          <li
            class="tab-item-selected"
            v-if=" currentTab == 'promo'"
          >{{ $t("messages.pageTitle.promotion.promo") }}</li>
        </div>
        <div v-on:click="switchTab('deal')">
          <li
            class="tab-item"
            v-if=" currentTab == 'promo'"
          >{{ $t("messages.pageTitle.promotion.deal") }}</li>
          <li
            class="tab-item-selected"
            v-if=" currentTab == 'deal'"
          >{{ $t("messages.pageTitle.promotion.deal") }}</li>
        </div>
      </ul>
    </div>
    <div class="display-area">
      <ul class="promo-card-tray" v-if=" currentTab == 'promo' && currentLang == 'en'">
        <li class="promo-card" v-for="(data, i) in promotionList_en" :key="i">
          <img class="promo-img" :src="data['pictureURL']" />
        </li>
      </ul>
      <ul class="promo-card-tray" v-if=" currentTab == 'promo' && currentLang == 'th'">
        <li class="promo-card" v-for="(data, i) in promotionList_th" :key="i">
          <img class="promo-img" :src="data['pictureURL']" />
        </li>
      </ul>
      <ul class="promo-card-tray" v-if=" currentTab == 'deal' && currentLang == 'en'">
        <li class="deal-card" v-for="(data, n) in dealList_en" :key="n">
          <img class="deal-img" :src="data['pictureURL']" />
        </li>
      </ul>
      <ul class="promo-card-tray" v-if=" currentTab == 'deal' && currentLang == 'th'">
        <li class="deal-card" v-for="(data, n) in dealList_th" :key="n">
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
      promotionList_en: [
        {
          promotionID: 1,
          pictureURL: "./static/img/promotions/en1.png"
        },
        {
          promotionID: 2,
          pictureURL: "./static/img/promotions/en2.png"
        },
        {
          promotionID: 3,
          pictureURL: "./static/img/promotions/en3.png"
        }
      ],
      promotionList_th: [
        {
          promotionID: 1,
          pictureURL: "./static/img/promotions/th1.png"
        },
        {
          promotionID: 2,
          pictureURL: "./static/img/promotions/th2.png"
        },
        {
          promotionID: 3,
          pictureURL: "./static/img/promotions/th3.png"
        }
      ],
      dealList_en: [
        {
          dealID: 1,
          pictureURL: "./static/img/deals/en1.png"
        },
        {
          dealID: 2,
          pictureURL: "./static/img/deals/en2.png"
        },
        {
          dealID: 3,
          pictureURL: "./static/img/deals/en3.png"
        }
      ],
      dealList_th: [
        {
          dealID: 1,
          pictureURL: "./static/img/deals/th1.png"
        },
        {
          dealID: 2,
          pictureURL: "./static/img/deals/th2.png"
        },
        {
          dealID: 3,
          pictureURL: "./static/img/deals/th3.png"
        }
      ]
    };
  },
  methods: {
    switchTab: function(target) {
      this.currentTab = target;
    }
  },
  computed: {
    currentLang: function() {
      return this.$i18n.locale;
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
.promo-card-tray {
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