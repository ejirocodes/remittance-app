import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
//@ts-ignore;
import { HTTP as axios } from './services/axios.config';

const app = createApp(App).use(router);

app.config.globalProperties.axios = axios

app.use(router).mount('#app')
