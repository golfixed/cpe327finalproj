<template>
  <div class="withouttab-display">
    <h2 class="page-title">{{ $t("messages.pageTitle.drink") }}</h2>
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
          itemTitle: "Original (140oz)",
          price: 3.99,
          pictureURL: "./static/img/drinks/01.png"
        },
        {
          itemTitle: "Sugarless (140oz)",
          price: 8.99,
          pictureURL: "./static/img/drinks/02.png"
        },
        {
          itemTitle: "Bottle",
          price: 12.99,
          pictureURL: "./static/img/drinks/03.png"
        },
        {
          itemTitle: "Diet (0.5L)",
          price: 2.99,
          pictureURL: "./static/img/drinks/04.png"
        },
        {
          itemTitle: "Original (0.5L)",
          price: 9.99,
          pictureURL: "./static/img/drinks/05.png"
        },
        {
          itemTitle: "Original (1L)",
          price: 3.99,
          pictureURL: "./static/img/drinks/06.png"
        },
        {
          itemTitle: "Max (0.5L)",
          price: 10.99,
          pictureURL: "./static/img/drinks/07.png"
        },
        {
          itemTitle: "Max (1L)",
          price: 8.99,
          pictureURL: "./static/img/drinks/08.png"
        },
        {
          itemTitle: "Value Pack",
          price: 20.99,
          pictureURL: "./static/img/drinks/09.png"
        }
      ],
      menu_itemList_th: [
        {
          itemTitle: "ดั้งเดิม (140oz)",
          price: 5.99,
          pictureURL: "./static/img/drinks/01.png"
        },
        {
          itemTitle: "น้ำตาลน้อย (140oz)",
          price: 12.99,
          pictureURL: "./static/img/drinks/02.png"
        },
        {
          itemTitle: "กระป๋อง",
          price: 14.99,
          pictureURL: "./static/img/drinks/03.png"
        },
        {
          itemTitle: "ไดเอท",
          price: 7.99,
          pictureURL: "./static/img/drinks/04.png"
        },
        {
          itemTitle: "ดั้งเดิม(0.5L)",
          price: 15.99,
          pictureURL: "./static/img/drinks/05.png"
        },
        {
          itemTitle: "ดั้งเดิม(1L)",
          price: 8.99,
          pictureURL: "./static/img/drinks/06.png"
        },
        {
          itemTitle: "น้ำตาลน้อย(0.5)",
          price: 12.99,
          pictureURL: "./static/img/drinks/07.png"
        },
        {
          itemTitle: "น้ำตาลน้อย(1L)",
          price: 8.99,
          pictureURL: "./static/img/drinks/08.png"
        },
        {
          itemTitle: "ชุดสุดคุ้ม",
          price: 20.99,
          pictureURL: "./static/img/drinks/09.png"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>