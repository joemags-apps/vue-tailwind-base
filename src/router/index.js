import { createWebHistory, createRouter } from "vue-router";

import NotFound from "@view/not-found/NotFound";

const routes = [
    {
        path: '/',
        component: () => require('@view/home-page/HomePage')
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