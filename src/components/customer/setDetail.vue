<template>
  <div class="display-card">
    <img class="picture" :src="pictureURL" />
    <label class="title">{{name}}</label>
    <label class="desc">{{desc}}</label>
    <label class="item">{{item1count}} × {{item1name}}</label>
    <label class="item">{{item2count}} × {{item2name}}</label>
    <label class="item">{{item3count}} × {{item3name}}</label>
    <div class="toolbar">
      <label class="pricetag">{{ $t("messages.onPageText.price") }} ${{price}}</label>
      <button
        class="btn-add btn-card"
        v-on:click="openSelectPopup();"
        style="width:fit-content;margin-top: 20px;"
      >
        <i class="fas fa-plus btn-icon btn-mini-icon"></i>
        <label class="btn-card-text">{{ $t("messages.buttonText.addFull") }}</label>
      </button>
    </div>
    <div class="dim-bg-second" v-if="isSelectOpen == true" v-on:click="closeSelectPopup();"></div>
    <div class="popup-box-container" v-if="isSelectOpen == true">
      <div class="popup-box" v-if="isSelectOpen == true">
        <h3
          class="popup-text-title popup-text-title-orange"
        >{{ $t("messages.popupText.selectAmount") }}</h3>
        <button class="btn-popup btn-confirm" v-on:click="closeSelectPopup();">
          <i class="fas fa-check btn-icon"></i>
          <label class="btn-text">{{ $t("messages.buttonText.addFull") }}</label>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sets-detail",
  props: [
    "pictureURL",
    "name",
    "desc",
    "item1name",
    "item1count",
    "item2name",
    "item2count",
    "item3name",
    "item3count",
    "price"
  ],
  data() {
    return {
      isSelectOpen: false
    };
  },
  methods: {
    openSelectPopup: function() {
      this.isSelectOpen = true;
    },
    closeSelectPopup: function() {
      this.isSelectOpen = false;
    }
  }
};
</script>

<style scoped>
.toolbar {
  position: absolute;
  bottom: 110px;
  left: 40px;
}
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
}
.desc {
  margin-bottom: 20px;
  line-height: 21px;
}
.item {
  margin-bottom: 5px;
}
.desc,
.item {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-indent: 20px;
  color: #8c8c8c;
}
.pricetag {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #eb5463;
  padding-bottom: 20px;
}
.display-card {
  display: inline-grid;
  width: 50%;
}
.picture {
  position: absolute;
  right: -10%;
  top: 50%;
  transform: translate(0, -50%);
}
</style>