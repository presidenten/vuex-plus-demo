import Vue from 'vue';
import Vuex from 'vuex';
import contextHmr from 'webpack-context-vuex-hmr';
import { setup, hmrCallback } from 'vuex+';

Vue.use(Vuex);
// Get new importer instance
const importer = contextHmr.getNewInstance();
// Create the Vuex store
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
});
// Setup HMR on all the Vuex store modules
importer.getModules();
importer.setupHMR(hmrCallback);
// Set importer instance and store to vuex+
setup(importer, store);

// Start app
const app = require('./app.vue');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(app),
});
