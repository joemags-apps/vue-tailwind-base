import { createApp } from 'vue'
import Root from './App.vue'
import router from './router';

import "~/assets/tailwind.css";
import "primeicons/primeicons.css";
import { store } from './store';

let app;

app = createApp(Root);

app.use(router);
app.use(store)

app.mount('#app');
