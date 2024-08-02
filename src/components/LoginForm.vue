<template>
  <div class="overlay"></div>
  <div class="form-container">
    <h2 class="text-center mb-4">Benvenuto</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group mb-4">
        <label for="nickname" class="form-label">Nickname</label>
        <input
          id="nickname"
          v-model="nickname"
          type="text"
          class="form-control"
          placeholder="Inserisci il tuo nickname"
          required
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary w-100"
        :disabled="!nickname.trim()"
      >
        Registrati
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const nickname = ref('');

const handleSubmit = () => {
  if (nickname.value.trim()) {
    const user = { nickname: nickname.value };
    localStorage.setItem('currentUser', JSON.stringify(user));
    router.push('/home');
  }
};
</script>

<style scoped>
.form-container {
  background-color: #ffffff; /* Bianco per il contenuto del form */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>