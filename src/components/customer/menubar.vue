<template>
  <div class="menubar">
    <div class="menulist">
      <ul class="menulist-list">
        <li class="menu-item">
          <i class="fas fa-percentage menu-icon"></i>Promotions
        </li>
        <li class="menu-item">
          <i class="fas fa-utensils menu-icon"></i>Sets
        </li>
        <li class="menu-item">
          <i class="fas fa-drumstick-bite menu-icon"></i>A' La Carte
        </li>
        <li class="menu-item">
          <i class="fas fa-pizza-slice menu-icon"></i>Appitizer
        </li>
        <li class="menu-item">
          <i class="fas fa-coffee menu-icon"></i>Drinks
        </li>
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
.menubar {
  max-height: 100px;
  padding: 20px;
  display: flex;
  position: relative;
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
  font-family: Roboto;
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
  top: 20px;
  height: 60px;
  width: fit-content;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>