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
    },
    menu_itemList_en: function() {
      return this.$store.state.menu_alacarte.en;
    },
    menu_itemList_th: function() {
      return this.$store.state.menu_alacarte.th;
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>