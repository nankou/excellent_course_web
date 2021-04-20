import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/reset.scss'
import './styles/index.scss'
import './styles/common.scss'
import './utils/commonPro'
import './utils/globalFunction'
import 'element-ui/lib/theme-chalk/index.css'
import HeadMenu from './views/Layout/Head' //顶部导航栏
import FootMenu from './views/Layout/Foot' //底部
import MakeStar from './components/makeStar' //星星评分组件
import CustomEditor from './components/CustomEditor'; //富文本组件
import SubmitButton from './components/SubmitButton'; //提交按钮
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'

Vue.prototype.$axios = axios;


// import style
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


Vue.config.productionTip = false
// Vue.prototype.$fileSaver = require('file-saver'); // 下载文件
Vue.prototype.$nodeEnv = process.env.NODE_ENV;
Vue.prototype.$baseApi = process.env.VUE_APP_BASE_API;

//视频播放
import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(ElementUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('HeadMenu', HeadMenu)
Vue.component('FootMenu', FootMenu)
Vue.component('MakeStar', MakeStar)
Vue.component('CustomEditor', CustomEditor)
Vue.component('SubmitButton', SubmitButton)

