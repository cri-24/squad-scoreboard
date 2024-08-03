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
  const storedUser = JSON.parse(localStorage.getItem('currentUser'));
  if (storedUser && storedUser.nickname) {
    nickname.value = storedUser.nickname;
    router.push('/home');
  }
 
});
</script>

<style scoped>

</style>