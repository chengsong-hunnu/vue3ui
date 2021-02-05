import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App)
// 关闭vue自带的控制台提示信息
app.config.productionTip = false;
app.use(router).use(store).use(Antd).mount('#app')
