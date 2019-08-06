// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Config from './config'

Vue.config.productionTip = false

router.afterEach((to, from) => {
  if (typeof to.meta.title === "undefined")
    document.title = Config.siteName;
  else
    document.title = `${to.meta.title} | ${Config.siteName}`
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
