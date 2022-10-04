import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/favorites",
      name: "favorites",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FavoritesView.vue"),
    },
    {
      path: "/books",
      name: "books",
      component: () => import("../views/BooksView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/rol",
      name: "rol",
      component: () => import("../views/RolView.vue"),
    },
    {
      path: "/newBook",
      name: "newBook",
      component:() => import("../views/NewBookView.vue")
    },
    {
      path: "/editBook",
      name: "editBook",
      component:() => import("../views/EditBookView.vue")
    },
    
  ],
});

export default router;
