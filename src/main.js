import { createApp } from 'vue'
import Root from './App.vue'
import router from './router';

import "~/assets/tailwind.css";

let app;

app = createApp(Root);

app.use(router);

app.mount('#app');
