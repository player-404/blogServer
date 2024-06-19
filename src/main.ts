import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/normalize.css';
import 'animate.css';
import './assets/base.css';
import 'element-plus/es/components/notification/style/css';
import App from './App.vue';
import router from './router';
import FontAwesomeIcon from './plugins/fontawesome';
// 自动导入 el-message 样式缺失,需手动引入
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-message-box.css';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(createPinia());
app.mount('#app');
