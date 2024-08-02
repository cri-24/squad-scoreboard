<template>
  <div class="login-page">
    <div class="form-container">
      <h2>Accedi</h2>
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue';
</script>
<style>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.form-container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
  position: relative;
}

h2 {
  color: #007bff; /* Colore vivace per il testo */
  margin-bottom: 1rem;
}
</style>