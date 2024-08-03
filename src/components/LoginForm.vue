<template>
  <div class="overlay"></div>
  <div class="form-container">
    <h2 class="text-center mb-4">Benvenuto</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group mb-4">
        <input
          id="username"
          v-model="username"
          type="text"
          class="form-control"
          placeholder="Inserisci il tuo nome"
          required
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary w-100"
        :disabled="!username.trim()"
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
const username = ref('');

const handleSubmit = () => {
  if (username.value.trim()) {
    const user = { username: username.value };
    try {
      localStorage.setItem('currentUser', JSON.stringify(user));
      console.log("User saved:", user);
      router.push('/home');
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
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
  background-color: #95caff;
  z-index: 1;
  pointer-events: none;
}

.form-container {
  background-color: #e9f4ff;
  padding: 1rem;
  border-radius: 16px; /* Arrotonda gli angoli */
  text-align: center;
  width: 80%; /* Limita la larghezza in percentuale */
  max-width: 400px; /* Limita la larghezza massima */
  height: auto; /* Altezza automatica */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

h2 {
  color: #007bff;
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

@media (max-width: 600px) {
  .form-container {
    padding: 1rem;
    width: 90%; /* Aumenta la larghezza per schermi piccoli */
  }

  h2 {
    font-size: 1.5rem;
  }

  .form-control {
    font-size: 0.875rem;
  }
}
</style>