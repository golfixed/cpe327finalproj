<template>
  <div class="toolbar">
    <div class="leftbox">
      <div>
        <router-link to="/customer/home">
          <img src="/static/img/Logo.png" class="toolbar-logo" />
        </router-link>
      </div>
    </div>
    <div class="rightbox">
      <div class="toolbar-btn" style="padding: 0 16px;">
        <i class="fas fa-question-circle btn-icon-grey" style="margin:0;"></i>
      </div>
      <div class="toolbar-btn" v-on:click="LangBoxToggle();">
        <i class="fas fa-globe btn-icon-grey"></i>
        <label
          class="btn-text-grey"
          style="text-transform: none;text-weight; font-weight:normal;"
        >{{ $t("messages.toolbar.btn_lang") }}</label>
      </div>
      <div class="toolbar-btn" v-on:click="callServiceToggle();">
        <i class="fas fa-bell btn-icon-red"></i>
        <label
          class="btn-text-red"
          style="text-transform: none;text-weight; font-weight:normal;"
        >{{ $t("messages.toolbar.btn_callService") }}</label>
      </div>
    </div>
    <div
      class="dim-bg"
      v-if="isCallServiceOpen == true || isLangOpen == true || isItemQtyOpen == true"
      v-on:click="closePopup();"
    ></div>
    <div
      class="popup-box-container"
      v-if="isCallServiceOpen == true || isLangOpen == true || isItemQtyOpen == true"
    >
      <div class="popup-box" v-if="isCallServiceOpen == true">
        <h3 class="popup-text-title">
          {{ $t("messages.popupText.callService_line1") }}
          <br />
          {{ $t("messages.popupText.callService_line2") }}
        </h3>
        <div class="popup-text-icon-container">
          <i class="far fa-clock popup-text-icon"></i>
        </div>
        <button class="btn-popup btn-ok" v-on:click="callServiceToggle();">
          <i class="fas fa-check btn-icon"></i>
          <label class="btn-text">{{ $t("messages.buttonText.ok") }}</label>
        </button>
      </div>
      <div class="popup-box" v-if="isLangOpen == true">
        <h3 class="popup-text-title">{{ $t("messages.popupText.selectLang") }}</h3>
        <div class="lang-tray">
          <div class="lang-item" v-on:click="switchLang('en');closePopup();">
            <img src="/static/img/langs/english.png" />
            <h5 class="lang-label">English</h5>
          </div>
          <div class="lang-item" v-on:click="switchLang('th');closePopup();">
            <img src="/static/img/langs/thai.png" />
            <h5 class="lang-label">ภาษาไทย</h5>
          </div>
          <div class="lang-item" v-on:click="switchLang('ch');closePopup();">
            <img src="/static/img/langs/chinese.png" />
            <h5 class="lang-label">中文</h5>
          </div>
        </div>
        <button class="btn-popup btn-back" v-on:click="LangBoxToggle();">
          <i class="fas fa-arrow-left btn-icon-grey"></i>
          <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
        </button>
      </div>
      <div class="popup-box" v-if="isItemQtyOpen == true">
        <h3
          class="popup-text-title popup-text-title-orange"
        >{{ $t("messages.popupText.selectAmount") }}</h3>
        <div class="popup-text-icon-container">
          <i class="far fa-clock popup-text-icon"></i>
        </div>
        <button class="btn-popup btn-confirm" v-on:click="closePopup();">
          <i class="fas fa-check btn-icon"></i>
          <label class="btn-text">{{ $t("messages.buttonText.addFull") }}</label>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toolbar",
  data() {
    return {
      isCallServiceOpen: false,
      isLangOpen: false,
      isItemQtyOpen: true,
      selectCount: 1
    };
  },
  methods: {
    openItemQty: function() {
      this.isItemQtyOen = true;
    },
    callServiceToggle: function() {
      this.isCallServiceOpen = !this.isCallServiceOpen;
    },
    LangBoxToggle: function() {
      this.isLangOpen = !this.isLangOpen;
    },
    closePopup: function() {
      this.isCallServiceOpen = false;
      this.isLangOpen = false;
      this.isItemQtyOpen = false;
    },
    switchLang: function(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
.toolbar-logo {
  width: 50px;
  margin-right: 20px;
}

.toolbar {
  height: 90px;
}
.rightbox {
  position: absolute;
  right: 20px;
  top: 20px;
  height: 50px;
  display: flex;
}
.leftbox {
  display: flex;
  align-items: center;
  position: absolute;
  left: 20px;
  top: 20px;
  height: 50px;
}
.toolbar-btn {
  margin-left: 15px;
  background-color: #f0f0f0;
  border-radius: 10000px;
  height: 50px;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0 20px;
}
</style>