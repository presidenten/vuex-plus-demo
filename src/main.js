import Vue from 'vue';
import Vuex from 'vuex';
import VuexPlus from 'vuex+';

Vue.use(Vuex);
Vue.use(VuexPlus.vuePlugin);

// Create the Vuex store
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [VuexPlus.vuexPlugin],
});

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  render: h => h(require('./app.vue')),
});
