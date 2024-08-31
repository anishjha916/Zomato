// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SimpleBar from 'simplebar-vue';
import 'simplebar/dist/simplebar.css';



const app = createApp(App);
app.component('SimpleBar', SimpleBar);
app.use(router);
app.mount('#app');
