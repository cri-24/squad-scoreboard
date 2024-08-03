<template>
  <div class="login-page">
    <!-- Topbar -->
    <nav class="navbar navbar-dark bg-dark topbar fixed-top">
      <div class="container">
        <span class="navbar-brand mx-auto">S'App Secondo</span>
      </div>
    </nav>
    <div class="form-container">
      <LoginForm v-if="!username" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';

const router = useRouter();
const username = ref('');

onMounted(() => {
  console.log("Login page mounted");
  try {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log("Stored user:", storedUser);
    if (storedUser && storedUser.username) {
      username.value = storedUser.username;
      router.push('/home');
    }
  } catch (error) {
    console.error("Error reading localStorage:", error);
  }
});
</script>

<style>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.bg-dark{
  background-color: #01478d;
}

/* Topbar */
.topbar {
  background-color: #343a40;
  color: #ffffff;
  padding: 0.5rem;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.navbar-brand {
  font-size: 1.5rem;
  color: #ffffff;
}

</style>