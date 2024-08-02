<template>
  <div class="login-form-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <h2 class="text-center mb-4">Login</h2>
      <div class="mb-3">
        <label for="nickname" class="form-label">Nickname</label>
        <input type="text" class="form-control" id="nickname" v-model="nickname" required>
      </div>
      <div class="mb-3">
        <label for="team" class="form-label">Nome Squadra</label>
        <input type="text" class="form-control" id="team" v-model="team" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';

const nickname = ref('');
const team = ref('');
const router = useRouter();
const userStore = useUserStore();

const handleSubmit = () => {
  if (nickname.value.trim() && team.value.trim()) {
    userStore.registerUser({ nickname: nickname.value, team: team.value });
    router.push('/home');
  }
};
</script>

<style scoped>
.login-form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.login-form {
  width: 300px;
}
</style>