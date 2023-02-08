import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import './style.css';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(router).use(pinia);
app.mount('#app');
