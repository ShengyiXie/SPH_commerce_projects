import Vue from 'vue'
import App from './App.vue'
// 三级联动组件--全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { Button, MessageBox } from 'element-ui';

// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination)
// elementUI注册的两种方式
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store';
// 引入mockServe.js---mock数据
import '@/mock/mockServe';
// 引入swiper样式
import "swiper/css/swiper.css";

Vue.config.productionTip = false

// 统一接口api文件夹里面全部请求函数
import * as API from '@/api';
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
import flower from '@/assets/flower.gif';
// 注册插件
Vue.use(VueLazyload, {
  // 图片懒加载的默认图片
  loading: flower

});
import myPlugins from './plugins/myPlugins';
Vue.use(myPlugins, {
  name: 'upper'
})
// 引入表单校验插件
import '@/plugins/validate'
new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  },
  // 注册路由
  router,
  // 注册仓库:组件实例会多一个属性$store
  store
}).$mount('#app')
