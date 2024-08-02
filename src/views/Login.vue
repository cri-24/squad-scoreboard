<template>
  <div class="login-page">
    <div class="form-container">
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue';
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0f7fa; /* Celeste chiaro */
}

.form-container {
  background-color: #ffffff; /* Bianco per il contenuto del form */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>