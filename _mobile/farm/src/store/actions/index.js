import store from '../store.js';
import {init,login,login_as_guest,logout} from './init.js';
import {fetch_item,addToCart} from './item.js';

export default {
  init,
  login,
  login_as_guest,
  logout,

  fetch_item,
  addToCart,
}