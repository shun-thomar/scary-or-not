import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Movies from "@/views/MoviesList.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/movies",
        name: "Movies",
        component: Movies,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;