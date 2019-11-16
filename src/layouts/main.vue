<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "main-layout"
};
</script>

<style>
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
</style>