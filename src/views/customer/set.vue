<template>
  <div class="withouttab-display">
    <h2 class="page-title">{{ $t("messages.pageTitle.set") }}</h2>
    <div class="display-area" v-if="currentLang == 'en'">
      <ul class="card-tray">
        <li class="menu-set-card" v-for="(data, i) in menu_setList_en" :key="i">
          <img class="menu-set-img" :src="data['pictureURL']" />
          <div
            class="menu-set-card-detail"
            v-on:click="toggleDetailPanel(true);fetchSetDetail(i);"
            style="z-index:2;"
          >
            <h2 class="set-name">{{data['setTitle']}}</h2>
            <h5 class="set-items">{{data.setItem1['count']}} × {{data.setItem1['itemName']}}</h5>
            <h5 class="set-items">{{data.setItem2['count']}} × {{data.setItem2['itemName']}}</h5>
            <h5 class="set-items">{{data.setItem3['count']}} × {{data.setItem3['itemName']}}</h5>
          </div>
          <div style="z-index:2; width: fit-content;">
            <h4 class="set-price">{{ $t("messages.onPageText.price") }} ${{data['price']}}</h4>
            <button
              class="btn-add btn-card"
              v-on:click="openSelectPopup();fetchSetDetail(i);"
              style="z-index:3;"
            >
              <i class="fas fa-plus btn-icon btn-mini-icon"></i>
              <label class="btn-card-text">{{ $t("messages.buttonText.add") }}</label>
            </button>
          </div>
          <div class="click-panel" v-on:click="toggleDetailPanel(true);fetchSetDetail(i);"></div>
        </li>
      </ul>
    </div>
    <div class="display-area" v-if="currentLang == 'th'">
      <ul class="card-tray">
        <li class="menu-set-card" v-for="(data, i) in menu_setList_th" :key="i">
          <img class="menu-set-img" :src="data['pictureURL']" />
          <div
            class="menu-set-card-detail"
            v-on:click="toggleDetailPanel(true);fetchSetDetail(i);"
            style="z-index:2;"
          >
            <h2 class="set-name">{{data['setTitle']}}</h2>
            <h5 class="set-items">{{data.setItem1['count']}} × {{data.setItem1['itemName']}}</h5>
            <h5 class="set-items">{{data.setItem2['count']}} × {{data.setItem2['itemName']}}</h5>
            <h5 class="set-items">{{data.setItem3['count']}} × {{data.setItem3['itemName']}}</h5>
          </div>
          <div style="z-index:2; width: fit-content;">
            <h4 class="set-price">{{ $t("messages.onPageText.price") }} ${{data['price']}}</h4>
            <button
              class="btn-add btn-card"
              v-on:click="openSelectPopup();fetchSetDetail(i);"
              style="z-index:3;"
            >
              <i class="fas fa-plus btn-icon btn-mini-icon"></i>
              <label class="btn-card-text">{{ $t("messages.buttonText.add") }}</label>
            </button>
          </div>
          <div class="click-panel" v-on:click="toggleDetailPanel(true);fetchSetDetail(i);"></div>
        </li>
      </ul>
    </div>

    <div
      class="dim-bg"
      v-if="isDetailOpen == true || isSelectQtyOpen == true"
      v-on:click="toggleDetailPanel(false);closeSelectPopup();"
    ></div>
    <div class="detail-container" v-if="isDetailOpen == true">
      <div class="detail-bg">
        <setDetail
          :pictureURL="setDetail['pictureURL']"
          :name="setDetail['setTitle']"
          :desc="setDetail['setDesc']"
          :item1name="setDetail.setItem1['itemName']"
          :item1count="setDetail.setItem1['count']"
          :item2name="setDetail.setItem2['itemName']"
          :item2count="setDetail.setItem2['count']"
          :item3name="setDetail.setItem3['itemName']"
          :item3count="setDetail.setItem2['count']"
          :price="setDetail['price']"
          :setDetail="setDetail"
        />
      </div>
      <button
        class="btn-popup btn-white"
        style="margin-top: 20px;width:fit-content;padding: 0 20px;"
        v-on:click="toggleDetailPanel(false);"
      >
        <i class="fas fa-arrow-left btn-icon-grey"></i>
        <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
      </button>
    </div>
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
          <button class="btn-popup btn-confirm" v-on:click="addItem();closeSelectPopup();">
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
import layout_main from "@/layouts/customer.vue";
import setDetail from "@/components/customer/setDetail.vue";
export default {
  name: "view-customer-promotion",
  created() {
    this.$emit(`update:layout`, layout_main);
  },
  components: {
    setDetail
  },
  computed: {
    currentLang: function() {
      return this.$i18n.locale;
    },
    isDetailOpen: function() {
      return this.$store.state.isDetailOpen;
    }
  },
  data() {
    return {
      menu_setList_en: [
        {
          menuID: 0,
          pictureURL: "./static/img/sets/01.png",
          setTitle: "Cheesy Imsukjai",
          setDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          setItem1: {
            itemName: "Cheesy Chicken",
            count: 2
          },
          setItem2: {
            itemName: "Crispy Fish Burger",
            count: 1
          },
          setItem3: {
            itemName: "Mashed Potato",
            count: 1
          },
          price: 12.99
        },
        {
          menuID: 1,
          pictureURL: "./static/img/sets/02.png",
          setTitle: "Sukjai Super Chicken",
          setDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          setItem1: {
            itemName: "Cheesy Chicken",
            count: 2
          },
          setItem2: {
            itemName: "Crispy Fish Burger",
            count: 1
          },
          setItem3: {
            itemName: "Mashed Potato",
            count: 1
          },
          price: 34.99
        },
        {
          menuID: 2,
          pictureURL: "./static/img/sets/03.png",
          setTitle: "Cheesy Imsukjai",
          setDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          setItem1: {
            itemName: "Cheesy Chicken",
            count: 2
          },
          setItem2: {
            itemName: "Crispy Fish Burger",
            count: 1
          },
          setItem3: {
            itemName: "Mashed Potato",
            count: 1
          },
          price: 15.99
        },
        {
          menuID: 3,
          pictureURL: "./static/img/sets/04.png",
          setTitle: "Cheesy Imsukjai",
          setDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          setItem1: {
            itemName: "Cheesy Chicken",
            count: 2
          },
          setItem2: {
            itemName: "Crispy Fish Burger",
            count: 1
          },
          setItem3: {
            itemName: "Mashed Potato",
            count: 1
          },
          price: 19.99
        },
        {
          menuID: 4,
          pictureURL: "./static/img/sets/05.png",
          setTitle: "Cheesy Imsukjai",
          setDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          setItem1: {
            itemName: "Cheesy Chicken",
            count: 2
          },
          setItem2: {
            itemName: "Crispy Fish Burger",
            count: 1
          },
          setItem3: {
            itemName: "Mashed Potato",
            count: 1
          },
          price: 49.99
        }
      ],
      menu_setList_th: [
        {
          menuID: 0,
          pictureURL: "./static/img/sets/01.png",
          setTitle: "อิ่มสุขใจ ยกบ้าน",
          setDesc:
            "ซาดิสม์เจ๊าะแจ๊ะ อิ่มแปร้ไฮเปอร์ เจ๊ออดิทอเรียมวีไอพี พฤหัส ราเมน แจ็กพ็อต จิ๊กซอว์ ดีไซน์เนอร์ จูนกลาส เช็งเม้งแพลน มั้งเทียมทาน จูนดีไซน์เนอร์ซูฮกสตาร์ท ﻿กรรมาชนแบด ไอซ์แพนดา วีเจเฮียบึ้มแครกเกอร์วิภัชภาค อมาตยาธิปไตยแก๊สโซฮอล์ ",
          setItem1: {
            itemName: "ไก่กรอบรสดั้งเดิม",
            count: 12
          },
          setItem2: {
            itemName: "วิงค์แซ่บ",
            count: 4
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 50.99
        },
        {
          menuID: 1,
          pictureURL: "./static/img/sets/02.png",
          setTitle: "คนเดียวก็อิ่มได้",
          setDesc:
            "ซาดิสม์เจ๊าะแจ๊ะ อิ่มแปร้ไฮเปอร์ เจ๊ออดิทอเรียมวีไอพี พฤหัส ราเมน แจ็กพ็อต จิ๊กซอว์ ดีไซน์เนอร์ จูนกลาส เช็งเม้งแพลน มั้งเทียมทาน จูนดีไซน์เนอร์ซูฮกสตาร์ท ﻿กรรมาชนแบด ไอซ์แพนดา วีเจเฮียบึ้มแครกเกอร์วิภัชภาค อมาตยาธิปไตยแก๊สโซฮอล์ ",
          setItem1: {
            itemName: "ไก่ทอดสูตรผู้พัน",
            count: 2
          },
          setItem2: {
            itemName: "วิงค์แซ่บ",
            count: 2
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 10.99
        },
        {
          menuID: 2,
          pictureURL: "./static/img/sets/03.png",
          setTitle: "อิ่มสุขใจได้ชีส",
          setDesc:
            "ซาดิสม์เจ๊าะแจ๊ะ อิ่มแปร้ไฮเปอร์ เจ๊ออดิทอเรียมวีไอพี พฤหัส ราเมน แจ็กพ็อต จิ๊กซอว์ ดีไซน์เนอร์ จูนกลาส เช็งเม้งแพลน มั้งเทียมทาน จูนดีไซน์เนอร์ซูฮกสตาร์ท ﻿กรรมาชนแบด ไอซ์แพนดา วีเจเฮียบึ้มแครกเกอร์วิภัชภาค อมาตยาธิปไตยแก๊สโซฮอล์ ",
          setItem1: {
            itemName: "ไก่กรอบรสดั้งเดิม",
            count: 8
          },
          setItem2: {
            itemName: "นักเก็ตไก่",
            count: 5
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 15.99
        },
        {
          menuID: 3,
          pictureURL: "./static/img/sets/04.png",
          setTitle: "อิ่มยกแกงค์",
          setDesc:
            "ซาดิสม์เจ๊าะแจ๊ะ อิ่มแปร้ไฮเปอร์ เจ๊ออดิทอเรียมวีไอพี พฤหัส ราเมน แจ็กพ็อต จิ๊กซอว์ ดีไซน์เนอร์ จูนกลาส เช็งเม้งแพลน มั้งเทียมทาน จูนดีไซน์เนอร์ซูฮกสตาร์ท ﻿กรรมาชนแบด ไอซ์แพนดา วีเจเฮียบึ้มแครกเกอร์วิภัชภาค อมาตยาธิปไตยแก๊สโซฮอล์ ",
          setItem1: {
            itemName: "วิงค์แซ่บ",
            count: 9
          },
          setItem2: {
            itemName: "ไก่ทอดสูตรผู้พัน",
            count: 15
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 10.99
        },
        {
          menuID: 4,
          pictureURL: "./static/img/sets/05.png",
          setTitle: "อิ่มเดี่ยว แต่อิ่มแน่ๆ",
          setDesc:
            "ซาดิสม์เจ๊าะแจ๊ะ อิ่มแปร้ไฮเปอร์ เจ๊ออดิทอเรียมวีไอพี พฤหัส ราเมน แจ็กพ็อต จิ๊กซอว์ ดีไซน์เนอร์ จูนกลาส เช็งเม้งแพลน มั้งเทียมทาน จูนดีไซน์เนอร์ซูฮกสตาร์ท ﻿กรรมาชนแบด ไอซ์แพนดา วีเจเฮียบึ้มแครกเกอร์วิภัชภาค อมาตยาธิปไตยแก๊สโซฮอล์ ",
          setItem1: {
            itemName: "ข้าวปลาทอดสไปซี่",
            count: 1
          },
          setItem2: {
            itemName: "ไก่ทอดสูตรผู้พัน",
            count: 1
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 10.99
        }
      ],
      setDetail: {},
      isSelectQtyOpen: false,
      selectAmount: 1,
      menuDetail: {}
    };
  },
  methods: {
    selectCountAdjust: function(method) {
      if (method == "add" && this.selectAmount < 10) {
        this.selectAmount = this.selectAmount + 1;
      } else if (method == "minus" && this.selectAmount != 1) {
        this.selectAmount = this.selectAmount - 1;
      }
    },
    toggleDetailPanel: function(command) {
      this.$store.commit("DETAILPANEL_TOGGLE", command);
    },
    fetchSetDetail: function(array) {
      this.setDetail = {};
      if (this.currentLang == "en") {
        this.setDetail = this.menu_setList_en[array];
      }
      if (this.currentLang == "th") {
        this.setDetail = this.menu_setList_th[array];
      } else {
        this.setDetail = this.menu_setList_ch[array];
      }
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
    openSelectPopup: function() {
      this.isSelectQtyOpen = true;
      this.selectAmount = 1;
    },
    closeSelectPopup: function() {
      this.isSelectQtyOpen = false;
    }
  }
};
</script>

<style scoped>
.detail-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.detail-bg {
  background-color: #ffffff;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.25);
  width: 720px;
  height: 480px;
  border-radius: 20px;
  padding: 40px;
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
.menu-set-card {
  width: 412px;
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
  grid-template-rows: 1fr 60px;
}
.menu-set-card:first-child,
.menu-set-card:nth-child(2) {
  margin-left: 20px;
}

.menu-set-img {
  height: 80%;
  position: absolute;
  right: -10%;
  top: 50%;
  transform: translate(0, -50%);
}
.menu-set-card-detail {
  display: block;
}
.display-area {
  display: flex;
  align-items: center;
  width: 100vw;
  overflow: scroll;
}
.set-name {
  font-weight: 900;
  font-size: 25px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 15px !important;
}
.set-items {
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #515151;
}
.set-price {
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #eb5463;
  margin-bottom: 10px !important;
}

.set-name,
.set-price,
.set-items {
  font-family: Roboto;
  font-style: normal;
  margin: 0;
  padding: 0;
}
</style>