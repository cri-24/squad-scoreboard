<template>
  <div class="login-page">
    <div class="form-container">
      <h2>Accedi</h2>
      <LoginForm v-if="!nickname" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';

const router = useRouter();
const nickname = ref('');

onMounted(() => {
  console.log("Login page mounted");
  try {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log("Stored user:", storedUser);
    if (storedUser && storedUser.nickname) {
      nickname.value = storedUser.nickname;
      router.push('/home');
    }
  } catch (error) {
    console.error("Error reading localStorage:", error);
  }
});
</script>

<style scoped>

</style>