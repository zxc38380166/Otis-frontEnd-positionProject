import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/layout/Layout.vue'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/books",
    component: Layout,
    children: [
        {
            path: '/books',
            name: 'books',
            component: () => import("@/views/books/Books.vue"),
        },
        {
            path: '/books/:id',
            name: 'BookDetail',
            component: () => import("@/views/books/BookDetail.vue"),
        }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;