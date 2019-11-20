<template>
  <div class="withouttab-display">
    <h2 class="page-title">{{ $t("messages.pageTitle.set") }}</h2>
    <div class="display-area" v-if="currentLang == 'en'">
      <ul class="card-tray">
        <li
          class="menu-set-card"
          v-for="(data, i) in menu_setList_en"
          :key="i"
          v-on:click="openDetailPanel();"
        >
          <img class="menu-set-img" :src="data['pictureURL']" />
          <div class="menu-set-card-detail">
            <h2 class="set-name">{{data['setTitle']}}</h2>
            <h5 class="set-items">{{data.setItem1['count']}} × {{data.setItem1['itemName']}}</h5>
            <h5 class="set-items">{{data.setItem2['count']}} × {{data.setItem2['itemName']}}</h5>
            <h5 class="set-items">{{data.setItem3['count']}} × {{data.setItem3['itemName']}}</h5>
          </div>
          <div>
            <h4 class="set-price">Price ${{data['price']}}</h4>
            <button class="btn-add btn-card">
              <i class="fas fa-plus btn-icon btn-mini-icon"></i>
              <label class="btn-card-text">ADD</label>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="display-area" v-if="currentLang == 'th'">
      <ul class="card-tray">
        <li
          class="menu-set-card"
          v-for="(data, i) in menu_setList_th"
          :key="i"
          v-on:click="openDetailPanel();"
        >
          <img class="menu-set-img" :src="data['pictureURL']" />
          <div class="menu-set-card-detail">
            <h2 class="set-name">{{data['setTitle']}}</h2>
            <h5 class="set-items">{{data.setItem1['count']}} × {{data.setItem1['itemName']}}</h5>
            <h5 class="set-items">{{data.setItem2['count']}} × {{data.setItem2['itemName']}}</h5>
            <h5 class="set-items">{{data.setItem3['count']}} × {{data.setItem3['itemName']}}</h5>
          </div>
          <div>
            <h4 class="set-price">ราคา ${{data['price']}}</h4>
            <button class="btn-add btn-card">
              <i class="fas fa-plus btn-icon btn-mini-icon"></i>
              <label class="btn-card-text">เพิ่ม</label>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="dim-bg" v-if="isDetailOpen == true" v-on:click="closeDetailPanel();"></div>
    <div class="detail-container" v-if="isDetailOpen == true">
      <div class="detail-bg">
        <setDetail
          pictureURL="./static/img/sets/01.png"
          name="Cheesy Imsukjai"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          item1name="Cheese Fried Chicken"
          item1count="2"
          item2name="Original Fired Chicken"
          item2count="8"
          item3name="Mashed Potato"
          item3count="2"
          price="10.99"
        />
      </div>
      <button
        class="btn-popup btn-white"
        style="margin-top: 20px;width:fit-content;padding: 0 20px;"
        v-on:click="closeDetailPanel();"
      >
        <i class="fas fa-arrow-left btn-icon-grey"></i>
        <label class="btn-text-grey">{{ $t("messages.buttonText.back") }}</label>
      </button>
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
    }
  },
  data() {
    return {
      isDetailOpen: false,
      menu_setList_en: [
        {
          menuID: 1,
          pictureURL: "./static/img/sets/01.png",
          setTitle: "Cheesy Imsukjai",
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
          price: 10.99
        },
        {
          menuID: 2,
          pictureURL: "./static/img/sets/02.png",
          setTitle: "Cheesy Imsukjai",
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
          price: 10.99
        },
        {
          menuID: 3,
          pictureURL: "./static/img/sets/03.png",
          setTitle: "Cheesy Imsukjai",
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
          price: 10.99
        },
        {
          menuID: 4,
          pictureURL: "./static/img/sets/04.png",
          setTitle: "Cheesy Imsukjai",
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
          price: 10.99
        },
        {
          menuID: 5,
          pictureURL: "./static/img/sets/05.png",
          setTitle: "Cheesy Imsukjai",
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
          price: 10.99
        }
      ],
      menu_setList_th: [
        {
          menuID: 1,
          pictureURL: "./static/img/sets/01.png",
          setTitle: "อิ่มสุขใจได้ชีส",
          setItem1: {
            itemName: "ไก่ชีส",
            count: 2
          },
          setItem2: {
            itemName: "เบอร์เกอร์ปลากรอบ",
            count: 1
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 10.99
        },
        {
          menuID: 2,
          pictureURL: "./static/img/sets/02.png",
          setTitle: "อิ่มสุขใจได้ชีส",
          setItem1: {
            itemName: "ไก่ชีส",
            count: 2
          },
          setItem2: {
            itemName: "เบอร์เกอร์ปลากรอบ",
            count: 1
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 10.99
        },
        {
          menuID: 3,
          pictureURL: "./static/img/sets/03.png",
          setTitle: "อิ่มสุขใจได้ชีส",
          setItem1: {
            itemName: "ไก่ชีส",
            count: 2
          },
          setItem2: {
            itemName: "เบอร์เกอร์ปลากรอบ",
            count: 1
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 10.99
        },
        {
          menuID: 4,
          pictureURL: "./static/img/sets/04.png",
          setTitle: "อิ่มสุขใจได้ชีส",
          setItem1: {
            itemName: "ไก่ชีส",
            count: 2
          },
          setItem2: {
            itemName: "เบอร์เกอร์ปลากรอบ",
            count: 1
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 10.99
        },
        {
          menuID: 5,
          pictureURL: "./static/img/sets/05.png",
          setTitle: "อิ่มสุขใจได้ชีส",
          setItem1: {
            itemName: "ไก่ชีส",
            count: 2
          },
          setItem2: {
            itemName: "เบอร์เกอร์ปลากรอบ",
            count: 1
          },
          setItem3: {
            itemName: "มันบด",
            count: 1
          },
          price: 10.99
        }
      ]
    };
  },
  methods: {
    openDetailPanel: function() {
      this.isDetailOpen = true;
    },
    closeDetailPanel: function() {
      this.isDetailOpen = false;
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