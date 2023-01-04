import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// /plugins/autoCreateCom.js

import Vue from 'vue';
const components = {};
 
let files = require.context('../components/swiperPage', true, /\.vue$/);

files.keys().forEach((key) => {
  const component = files(key).default;
  components[component.name] = component;
});

 
Object.keys(components).forEach((key) => Vue.component(key, components[key]));