<template>
  <div class="withouttab-display">
    <h2 class="page-title">{{ $t("messages.pageTitle.appitizer") }}</h2>
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
            <button class="btn-add btn-card">
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
            <button class="btn-add btn-card">
              <i class="fas fa-plus btn-icon btn-mini-icon"></i>
              <label class="btn-card-text">ADD</label>
            </button>
          </div>
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
  computed: {
    currentLang: function() {
      return this.$i18n.locale;
    }
  },
  data() {
    return {
      menu_itemList_en: [
        {
          itemTitle: "Egg Tart",
          price: 3.99,
          pictureURL: "./static/img/appi/01.png"
        },
        {
          itemTitle: "Wingsabb",
          price: 8.99,
          pictureURL: "./static/img/appi/02.png"
        },
        {
          itemTitle: "Shrimp",
          price: 12.99,
          pictureURL: "./static/img/appi/03.png"
        },
        {
          itemTitle: "Chicken Pop",
          price: 2.99,
          pictureURL: "./static/img/appi/04.png"
        },
        {
          itemTitle: "Nuggets",
          price: 9.99,
          pictureURL: "./static/img/appi/05.png"
        },
        {
          itemTitle: "Coslow",
          price: 3.99,
          pictureURL: "./static/img/appi/06.png"
        },
        {
          itemTitle: "Mashed(M)",
          price: 10.99,
          pictureURL: "./static/img/appi/07.png"
        },
        {
          itemTitle: "Mashed(L)",
          price: 8.99,
          pictureURL: "./static/img/appi/08.png"
        },
        {
          itemTitle: "Value",
          price: 20.99,
          pictureURL: "./static/img/appi/09.png"
        }
      ],
      menu_itemList_th: [
        {
          itemTitle: "ทาร์ตไข่",
          price: 5.99,
          pictureURL: "./static/img/appi/01.png"
        },
        {
          itemTitle: "วิงซ์แซ่บ",
          price: 12.99,
          pictureURL: "./static/img/appi/02.png"
        },
        {
          itemTitle: "โดนัทกุ้ง",
          price: 14.99,
          pictureURL: "./static/img/appi/03.png"
        },
        {
          itemTitle: "ไก่ป๊อป",
          price: 7.99,
          pictureURL: "./static/img/appi/04.png"
        },
        {
          itemTitle: "นักเก็ต",
          price: 15.99,
          pictureURL: "./static/img/appi/05.png"
        },
        {
          itemTitle: "โควสลอร์",
          price: 8.99,
          pictureURL: "./static/img/appi/06.png"
        },
        {
          itemTitle: "มันบด(M)",
          price: 12.99,
          pictureURL: "./static/img/appi/07.png"
        },
        {
          itemTitle: "มันบด(L)",
          price: 8.99,
          pictureURL: "./static/img/appi/08.png"
        },
        {
          itemTitle: "ชุดคุ้ม",
          price: 20.99,
          pictureURL: "./static/img/appi/09.png"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>