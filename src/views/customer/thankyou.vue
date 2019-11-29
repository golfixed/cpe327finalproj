<template>
  <div class="cus-container">
    <div id="cus-home">
      <div class="home-logo-div">
        <img class="home-logo" src="/static/img/Logo.png" />
      </div>
      <h1 class="title">
        Thank you for coming.
        <br />ขอบคุณที่ใช้บริการ
      </h1>
      <div class="supercenter">
        <router-link to="/">
          <button
            class="btn-back btn-white btn-ty"
            style="width:fit-content;margin-top: 20px;"
            v-on:click="restart();"
          >
            <i class="fas fa-redo btn-icon btn-icon-red"></i>
            <label class="btn-text-ty">Restart the prototype</label>
          </button>
        </router-link>
      </div>
      <div class="feedback-div">
        <img class="qrcode" src="/static/img/qrcode.png" />
        <label class="feedback-text">
          Want to leave us a feedback? Simply scan this QR Code.
          <br />แสดงความคิดเห็น ติชม หรือ แนะนำบริการ
          <br />โทรศัพท์ 1678 หรือ www.mvyg.kfc.co.th
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import layout_main from "@/layouts/main.vue";
export default {
  name: "view-customer-thankyou",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  methods: {
    restart: function() {
      this.$store.commit("RESTART");
    }
  }
};
</script>

<style scoped>
.feedback-text {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.75);
}
.btn-ty {
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 100px;
  height: 40px;
}
.btn-text-ty {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  text-align: center;

  color: #eb5463;
}
.qrcode {
  margin-right: 25px;
  width: 100px;
}
.feedback-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
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
  line-height: 63px;
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
