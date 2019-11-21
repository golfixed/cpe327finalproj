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
      <button class="btn-add btn-card" style="width:fit-content;margin-top: 20px;">
        <i class="fas fa-plus btn-icon btn-mini-icon"></i>
        <label class="btn-card-text">{{ $t("messages.buttonText.addFull") }}</label>
      </button>
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
  ]
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