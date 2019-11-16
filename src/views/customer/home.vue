<template>
  <div class="cus-container">
    <div id="cus-home">
      <div class="home-logo-div">
        <img class="home-logo" src="/static/img/Logo.png" />
      </div>
      <h1 class="title">
        Welcome to KFC
        <br />ยินดีต้อนรับ
      </h1>
      <div>
        <h4 class="lang-desc">
          To continue, please select a language
          <br />เลือกภาษาเพื่อดำเนินการต่อ
        </h4>
        <div class="lang-tray">
          <router-link to="/customer/promotion" class="lang-item" v-on:click="switchLang('en');">
            <img src="/static/img/langs/english.png" />
            <h5 class="lang-label">English</h5>
          </router-link>
          <router-link to="/customer/promotion" class="lang-item" v-on:click="switchLang('th');">
            <img src="/static/img/langs/thai.png" />
            <h5 class="lang-label">ภาษาไทย</h5>
          </router-link>
          <router-link to="/customer/promotion" class="lang-item" v-on:click="switchLang('ch');">
            <img src="/static/img/langs/chinese.png" />
            <h5 class="lang-label">中文</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layout_main from "@/layouts/main.vue";
export default {
  name: "view-customer-home",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  methods: {
    switchLang: function(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
.cus-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-logo-div {
  display: flex;
  justify-content: center;
  max-height: 160px;
}
.home-logo {
  width: 160px;
  text-align: center;
}
#cus-home {
  display: block;
  align-items: center;
  height: fit-content;
  width: 100vw;
  overflow: hidden;
}
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 53px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #515151;
  padding: 30px 0;
  margin: 0;
}
.lang-desc {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #515151;
}
</style>
