import Vue from 'vue';
import Vuex from 'vuex';
import VuexPlus from 'vuex+';

Vue.use(Vuex);
Vue.use(VuexPlus.getVuePlugin(Vue));

// Create the Vuex store
const store = new Vuex.Store({
  plugins: [VuexPlus.getVuexPlugin(Vuex)],
  strict: process.env.NODE_ENV !== 'production',
});

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  render: h => h(require('./app.vue')),
});
