<template>
  <div class="login-page">
    <Home />
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue';
import Home from '@/views/Home.vue';
</script>

<style scoped>
.login-page {
  position: relative;
  height: 100vh;
  background: url('/path/to/your/background-image.jpg') no-repeat center center/cover;
}
</style>