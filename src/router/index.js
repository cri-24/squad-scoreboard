import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', component: LoginForm },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;