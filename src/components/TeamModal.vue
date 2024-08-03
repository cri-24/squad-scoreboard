<template>
    <div class="modal fade show" tabindex="-1" style="display: block;" aria-labelledby="teamModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="teamModalLabel">Dettagli Squadra</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3>{{ team.name }}</h3>
            <ul>
              <li v-for="member in team.members" :key="member">{{ member }}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Chiudi</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue';
  
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
  </style>