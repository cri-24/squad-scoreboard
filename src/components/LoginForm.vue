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
<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Sfondo scuro con trasparenza */
  z-index: 1;
  pointer-events: none; /* Non cliccabile */
}

.form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  z-index: 2;
}

h2 {
  color: #007bff; /* Colore vivace per il testo */
}

.form-control {
  border-radius: 8px;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>