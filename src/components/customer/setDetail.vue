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
    <div class="dim-bg-second" v-if="isSelectQtyOpen == true" v-on:click="closeSelectPopup();"></div>
    <div class="popup-box-container" v-if="isSelectQtyOpen == true">
      <div class="popup-box" v-if="isSelectQtyOpen == true">
        <div class="menudetail-panel">
          <img class="menudetail-img" :src="setDetail['pictureURL']" />
          <h3 class="popup-text-title popup-text-title-orange supercenter">{{setDetail['setTitle']}}</h3>
        </div>

        <div class="numberlocker-panel">
          <button
            style="margin-left: 20px;"
            class="btn-numberlocker locker-active"
            v-if="selectAmount > 1"
            v-on:click="selectCountAdjust('minus');"
          >
            <label>
              <i class="fas fa-minus"></i>
            </label>
          </button>
          <button
            style="margin-left: 20px;"
            class="btn-numberlocker locker-inactive"
            v-if="selectAmount == 1"
          >
            <label>
              <i class="fas fa-minus"></i>
            </label>
          </button>
          <div class="numberlocker-bg">
            <label>{{selectAmount}}</label>
          </div>
          <button
            style="margin-right: 20px;"
            class="btn-numberlocker locker-active"
            v-if="selectAmount < 10"
            v-on:click="selectCountAdjust('add');"
          >
            <label>
              <i class="fas fa-plus"></i>
            </label>
          </button>
          <button
            style="margin-right: 20px;"
            class="btn-numberlocker locker-inactive"
            v-if="selectAmount >= 10"
          >
            <label>
              <i class="fas fa-plus"></i>
            </label>
          </button>
        </div>
        <div class="warning-box">
          <label v-if="selectAmount == 10">{{ $t("messages.popupText.overIncrease") }}</label>
        </div>
        <div>
          <button
            class="btn-popup btn-confirm"
            v-on:click="addItem();closeSelectPopup();closeDetailPanel();"
          >
            <i class="fas fa-plus btn-icon"></i>
            <label class="btn-text">{{ $t("messages.buttonText.addFull") }}</label>
          </button>
          <button
            class="btn-popup btn-back"
            style="margin-top: 20px;"
            v-on:click="closeSelectPopup();"
          >
            <i class="fas fa-arrow-left btn-icon-grey"></i>
            <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sets-detail",
  props: {
    pictureURL: String,
    name: String,
    desc: String,
    item1name: String,
    item1count: Number,
    item2name: String,
    item2count: Number,
    item3name: String,
    item3count: Number,
    price: Number,
    setDetail: Object
  },
  data() {
    return {
      isSelectQtyOpen: false,
      selectAmount: 1
    };
  },
  methods: {
    openSelectPopup: function() {
      this.isSelectQtyOpen = true;
    },
    closeSelectPopup: function() {
      this.isSelectQtyOpen = false;
    },
    closeDetailPanel: function(command) {
      this.$store.commit("DETAILPANEL_TOGGLE", command);
    },
    addItem: function() {
      if (this.setDetail) {
        const price = this.setDetail.price;
        const count = this.selectAmount;
        const orderID = Math.random();
        this.$store.commit("UPDATE_ORDERLIST", {
          menuID: orderID,
          menuName: this.setDetail.setTitle,
          type: "set",
          count: this.selectAmount,
          price: price * count,
          item1: {
            itemName: this.setDetail.setItem1.itemName,
            count: this.setDetail.setItem1.count
          },
          item2: {
            itemName: this.setDetail.setItem2.itemName,
            count: this.setDetail.setItem2.count
          },
          item3: {
            itemName: this.setDetail.setItem3.itemName,
            count: this.setDetail.setItem2.count
          }
        });
      } else {
        //Nothing to do then
      }
    },
    selectCountAdjust: function(method) {
      if (method == "add" && this.selectAmount < 10) {
        this.selectAmount = this.selectAmount + 1;
      } else if (method == "minus" && this.selectAmount != 1) {
        this.selectAmount = this.selectAmount - 1;
      }
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