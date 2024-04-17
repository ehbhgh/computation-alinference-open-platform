import Vue from 'vue'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// app router vuex filter mixins echarts
import App from './App'
import router from './router'
import store from './store'
import mixins from '@/mixins'
import echarts from 'echarts';
// 全局定义v-echarts
import ECharts from 'vue-echarts'
import ViewUI from 'view-design';
// 全局引入datav
import dataV from '@jiaminghi/data-view'
import Avue from '@smallwei/avue';
//自定义指令
import "@/utils/directive";
//权限验证
import '@/auth/permission'
//api引入
import apiPlugin from "@/api/index"

//引入echarts组件
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
//引入css
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/assets/styles/common.css'
import '@/assets/styles/index.scss'// custome global css
import '@smallwei/avue/lib/index.css';
import 'view-design/dist/styles/iview.css';
//引入animate.css
import 'animate.css';
//注册组件
Vue.component('v-chart', ECharts)
Vue.use(dataV)
Vue.use(ViewUI);
Vue.use(Avue);
// enable element zh-cn
Vue.use(ElementUI, { zhLocale })
// register global mixins.
Vue.mixin(mixins)
Vue.use(apiPlugin)
Vue.config.productionTip = false

// create the app instance.
new Vue({ el: '#app', router, store, render: h => h(App) })
