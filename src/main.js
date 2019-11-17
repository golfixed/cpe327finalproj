import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './locales'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')