import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL = "http://webapi.zhulogic.com";

Vue.prototype.$http = axios;
