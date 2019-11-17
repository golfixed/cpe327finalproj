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
          itemTitle: "Chicken",
          price: 3.99,
          pictureURL: "./static/img/alacarte/01.png"
        },
        {
          itemTitle: "Fish Rice",
          price: 8.99,
          pictureURL: "./static/img/alacarte/02.png"
        },
        {
          itemTitle: "Burger",
          price: 12.99,
          pictureURL: "./static/img/alacarte/03.png"
        },
        {
          itemTitle: "Chicken",
          price: 2.99,
          pictureURL: "./static/img/alacarte/04.png"
        },
        {
          itemTitle: "Burger",
          price: 9.99,
          pictureURL: "./static/img/alacarte/05.png"
        },
        {
          itemTitle: "Burger",
          price: 3.99,
          pictureURL: "./static/img/alacarte/06.png"
        },
        {
          itemTitle: "Spicy",
          price: 3.99,
          pictureURL: "./static/img/alacarte/07.png"
        }
      ],
      menu_itemList_th: [
        {
          itemTitle: "ไก่กรอบ",
          price: 5.99,
          pictureURL: "./static/img/alacarte/01.png"
        },
        {
          itemTitle: "ปลากรอบ",
          price: 12.99,
          pictureURL: "./static/img/alacarte/02.png"
        },
        {
          itemTitle: "เบอร์เกอร์",
          price: 14.99,
          pictureURL: "./static/img/alacarte/03.png"
        },
        {
          itemTitle: "ไก่นุ่ม",
          price: 7.99,
          pictureURL: "./static/img/alacarte/04.png"
        },
        {
          itemTitle: "เบอร์เกอร์",
          price: 15.99,
          pictureURL: "./static/img/alacarte/05.png"
        },
        {
          itemTitle: "เบอร์เกอร์",
          price: 8.99,
          pictureURL: "./static/img/alacarte/06.png"
        },
        {
          itemTitle: "เผ็ดแซ่บ",
          price: 12.99,
          pictureURL: "./static/img/alacarte/07.png"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>