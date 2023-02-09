import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Icon component
import { Icon } from '@iconify/vue';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Register component globally
app.component('Icon', Icon);

app.mount('#app');
