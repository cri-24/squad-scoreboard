<template>
  <div class="login-page">
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

</style>