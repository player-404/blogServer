import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/normalize.css';
import 'animate.css';
import './assets/base.css';
import 'element-plus/es/components/notification/style/css';
import App from './App.vue';
import router from './router';
import FontAwesomeIcon from './plugins/fontawesome';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(createPinia());
app.mount('#app');
