<template>
  <div class="main-body" id="app">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: "div"
    };
  }
};
</script>

<style>
.main-body {
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
}
a:focus {
  outline: none;
}
.supercenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.customer-menu-grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
  height: 100%;
}
.customer-home-grid {
  display: grid;
  grid-template-rows: 40px 1fr;
  width: 100vw;
  height: 100%;
}
.display-slot {
  width: 100vw;
  height: 580px;
}
#layout-customer {
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: grid;
  grid-template-rows: 90px 1fr 80px;
  height: 100vh;
}
.btn-text,
.btn-icon {
  color: #fff;
}
.btn-text-red,
.btn-icon-red {
  color: #eb5463;
}
.btn-text-grey,
.btn-icon-grey {
  color: #8c8c8c;
}
.btn-text-orange,
.btn-icon-orange {
  color: #ff8303;
}

.btn-text,
.btn-text-red,
.btn-text-grey {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
}
.btn-icon,
.btn-icon-red,
.btn-icon-grey {
  font-size: 20px;
  margin-right: 15px;
  padding: 0;
}
.btn-mini-icon {
  margin-right: 10px;
  font-size: 18px;
}
.menu-icon {
  margin-right: 15px;
}
.menubar-layout {
  width: 100vw;
}
.page-title {
  z-index: 0;
  position: absolute;
  top: 20px;
  left: 90px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: #515151;
  margin: 0;
  height: 50px;
}

.dim-bg {
  background-color: #0000009e;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
}
.dim-bg-second {
  background-color: #0000009e;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.popup-box-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-box {
  position: relative;
  padding: 20px;
  width: 410px;
  background: #ffffff;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: block;
}
.btn-popup {
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 50px;
  margin-top: 40px;
  padding: 0;
}
.btn-card {
  width: 90px;
  height: 30px;
  border: 0;
  border-radius: 50px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-card-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
}
.btn-ok,
.btn-add {
  background: #eb5463;
}
.btn-back {
  background: #f6f6f6;
}
.btn-confirm {
  background: #ff8303;
}
.btn-confirm-grey {
  background: #ffffff;
}
.btn-white {
  background: #fff;
}
.btn-numberlocker {
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.btn-numberlocker > label {
  font-size: 20px;
}

.locker-active {
  background-color: #ff8303;
}
.locker-inactive {
  background-color: #c9c9c9;
}
.popup-text-title {
  font-style: normal;
  font-weight: 900;
  font-size: 29px;
  line-height: 34px;
  text-align: center;
  color: #eb5463;
  margin: 0;
  padding: 0;
  padding-top: 20px;
  margin-bottom: 40px;
}
.popup-text-title-orange {
  color: #ff8303;
}
.popup-text-icon-container {
  display: flex;
  justify-content: center;
}
.popup-text-icon {
  color: #eb5463;
  font-size: 40px;
  text-align: center;
}

.popup-text-icon-orange {
  color: #ff8303;
}
.lang-tray {
  display: flex;
  justify-content: center;
}
.lang-item {
  display: block;
  margin: 0 25px;
}
.lang-label {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #8c8c8c;
  margin-top: 10px;
  margin-bottom: 0;
}

/* OUTLINE NONE */

.btn-ok,
.btn-back,
.btn-confirm,
.btn-white,
.btn-card,
.btn-numberlocker,
.btn-confirm-grey {
  outline: none;
}
.withouttab-display {
  height: 100%;
  display: flex;
  justify-content: center;
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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 580px;
  flex-direction: column;
  flex-grow: 1;
}
.menu-item-card {
  width: 230px;
  height: 230px;
  background-color: #f0f0f0;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 65% 35%;
}
.menu-item-card:first-child,
.menu-item-card:nth-child(2) {
  margin-left: 20px;
}

.menu-item-img {
  height: 60%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}
.menu-item-card-detail {
  display: flex;
  align-items: flex-end;
}
.menu-item-card-btn {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.display-area {
  display: flex;
  align-items: center;
  width: 100vw;
  overflow: scroll;
}
.item-name {
  font-weight: 900;
  font-size: 25px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 15px !important;
}
.item-items {
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #515151;
}
.item-price {
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #eb5463;
}

.item-name,
.item-price,
.item-items {
  font-family: Roboto;
  font-style: normal;
  margin: 0;
  padding: 0;
}
.click-panel {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.numberlocker-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.numberlocker-bg {
  background-color: #f0f0f0;
  width: 200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  border-radius: 20px;
  color: #ff8303;
}
.warning-box {
  display: flex;
  justify-content: center;
}
.warning-box > label {
  margin-top: 20px;
}
.menudetail-panel {
  display: grid;
  grid-template-columns: 150px 1fr;
  margin-bottom: 20px;
}
.menudetail-img {
  width: 150px;
}
.menudetail-title {
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
}
.two-btn-div {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  max-width: 390px;
}

.switch-to-user {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  background-color: #a72828;
}
.switch-to-user > a {
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-radius: 50px;
}
.switch-to-user > a > i {
  margin-right: 15px;
  font-size: 20px;
}
</style>