<template>
  <div class="toolbar">
    <div class="leftbox">
      <div>
        <img src="/static/img/logo.png" class="toolbar-logo" />
      </div>
      <h2 class="page-title">Page Title</h2>
    </div>
    <div class="rightbox">
      <div class="toolbar-btn">
        <i class="fas fa-question-circle btn-icon-grey" style="margin:0;"></i>
      </div>
      <div class="toolbar-btn">
        <i class="fas fa-globe btn-icon-grey"></i>
        <label
          class="btn-text-grey"
          style="text-transform: none;text-weight; font-weight:normal;"
        >Langs.</label>
      </div>
      <div class="toolbar-btn">
        <i class="fas fa-bell btn-icon-red"></i>
        <label
          class="btn-text-red"
          style="text-transform: none;text-weight; font-weight:normal;"
        >Call Service</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menubar"
};
</script>

<style scoped>
.toolbar-logo {
  width: 50px;
  margin-right: 20px;
}
.page-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: flex-end;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
}
.toolbar {
  height: 90px;
  position: relative;
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