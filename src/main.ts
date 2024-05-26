import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/normalize.css';
import 'animate.css';
import './assets/base.css';
import 'element-plus/es/components/notification/style/css';
import App from './App.vue';
import router from './router';

// fontaswome icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEyeSlash, faBell } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App);

library.add(faEye, faEyeSlash, faMagnifyingGlass, faBell);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.mount('#app');
