// import './rem.js';
// import {swiper} from './swiper.vue';

require('./rem.js');
var swiper = require('./swiper.vue');
var box = require('./box.vue');

new Vue({
  el: 'body',
  components: {
  	swiper: swiper,
    box: box
  }
})