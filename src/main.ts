import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
//@ts-ignore;
import { HTTP as axios } from './services/axios.config';

const app = createApp(App);


app.config.globalProperties.axios = axios

console.log(axios);


app.use(router).mount('#app')
