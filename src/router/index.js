import { createWebHistory, createRouter } from "vue-router";

import NotFound from "@view/not-found/NotFound";
import HomePage from "@view/home-page/HomePage";


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/:pathMatch(.*)',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;