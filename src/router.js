import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // Usa il BASE_URL per la configurazione del router
  routes,
});

export default router;