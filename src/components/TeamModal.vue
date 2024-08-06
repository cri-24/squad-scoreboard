<template>
  <div class="modal fade show" tabindex="-1" style="display: block;" aria-labelledby="teamModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="teamModalLabel">Dettagli della squadra</h5>
                  <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <h3>{{ team.name }}</h3>
                  <ul>
                      <li v-for="member in team.members" :key="member">{{ member }}</li>
                  </ul>
                  <h3>Animatori</h3>
                  <ul>
                      <li v-for="leader in team.leaders" :key="leader">{{ leader }}</li>
                  </ul>
                  <!-- Sezione "Cosa dobbiamo fare domani" -->
                  <div class="tomorrow-tasks">
                      <h3>Cosa dobbiamo fare domani</h3>
                      <img :src="team.serviceimage" alt="Service Image" class="service-image">
                      <p>{{ team.service }}</p>
                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="closeModal">Chiudi</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  team: {
      type: Object,
      required: true
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-content {
  border-radius: 12px; /* Bordi arrotondati */
  background-color: #ffffff; /* Sfondo della modale bianco */
}

.modal-body {
  color: #333; /* Colore del testo */
}

.modal-body ul {
  list-style: none;
  padding: 0;
}

.modal-body li {
  font-family: 'Arial', sans-serif;
}

/* Stile per la sezione "Cosa dobbiamo fare domani" */
.tomorrow-tasks {
  margin-top: 20px;
  text-align: center;
}

.tomorrow-tasks .service-image {
  max-width: 30%;
  height: auto;
  margin-bottom: 15px;
}
</style>