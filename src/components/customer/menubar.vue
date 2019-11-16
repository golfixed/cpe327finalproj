<template>
  <div class="menubar">
    <div class="menulist">
      <ul class="menulist-list">
        <router-link to="/customer/promotion" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-percentage menu-icon"></i>Promotions
          </li>
        </router-link>
        <router-link to="/customer/set" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-utensils menu-icon"></i>Sets
          </li>
        </router-link>
        <router-link to="/customer/alacarte" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-drumstick-bite menu-icon"></i>A' La Carte
          </li>
        </router-link>
        <router-link to="/customer/appitizer" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-pizza-slice menu-icon"></i>Appitizer
          </li>
        </router-link>
        <router-link to="/customer/drink" class="menu-link">
          <li class="menu-item">
            <i class="fas fa-coffee menu-icon"></i>Drinks
          </li>
        </router-link>
      </ul>
    </div>
    <div class="order-btn">
      <i class="fas fa-list btn-icon"></i>
      <label class="btn-text">Order List</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "menubar"
};
</script>

<style scoped>
.router-link-exact-active,
.menu-link {
  display: flex;
  justify-content: center;
}
.router-link-exact-active > li {
  font-style: normal;
  /* font-weight: bold; */
  font-size: 18px;
  line-height: 21px;
  color: #ff8303;
  margin: 0;
  padding: 0;
}
.menubar {
  max-height: 100px;
  padding: 0 20px 20px 20px;
  display: flex;
}
.menulist {
  background-color: #f6f6f6;
  height: 60px;
  border-radius: 10000px;
  width: calc(100vw - 230px);
}
.menulist-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0 20px;
  height: 60px;
}
.menu-item {
  text-align: center;
  color: #8c8c8c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
}
.order-btn {
  background-color: #ff8303;
  border-radius: 10000px;
  position: absolute;
  right: 20px;
  height: 60px;
  width: fit-content;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>