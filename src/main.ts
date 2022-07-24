
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia'
import {usePersist} from "pinia-use-persist";
const pinia = createPinia()
pinia.use(usePersist)
createApp(App).use(ElementPlus).use(router).use(pinia).mount('#app');