<template>
  <div class="ranking-list">
    <h2 class="text-center mb-4">Classifica</h2>
    <ul class="list-group">
      <li 
        v-for="(team, index) in sortedTeams" 
        :key="team.name" 
        :class="['list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', `bg-${index % bgColors.length}`, 'ranking-item']"
        @mouseover="showScoreDetails(team.name)"
        @mouseleave="hideScoreDetails"
      >
        <div class="d-flex align-items-center team-info">
          <!-- Icone delle coppe per le prime tre posizioni -->
          <i v-if="index === 0" class="bi bi-trophy trophy gold me-3"></i>
          <i v-if="index === 1" class="bi bi-trophy trophy silver me-3"></i>
          <i v-if="index === 2" class="bi bi-trophy trophy bronze me-3"></i>
          <!-- Spazio vuoto per le posizioni 1, 2, 3 e numero di posizione per le altre -->
          <span v-if="index >= 3" class="rank me-4">{{ index + 1 }}</span>
          <span class="team-name">{{ team.name }}</span>
        </div>
        <div class="score-container">
          <span class="badge bg-primary rounded-pill">{{ team.score }}</span>
          <div v-if="showDetails === team.name" class="score-details">
            <div v-for="(detail, game) in team.details" :key="game">{{ game }}: {{ detail }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  teams: {
    type: Array,
    required: true
  }
});

const bgColors = ['light', 'secondary', 'success', 'danger', 'warning', 'info'];

const sortedTeams = computed(() => {
  return props.teams.slice().sort((a, b) => b.score - a.score);
});

// Stato per controllare il team per il quale mostrare i dettagli
const showDetails = ref(null);

// Mostra i dettagli del punteggio
const showScoreDetails = (teamName) => {
  showDetails.value = teamName;
};

// Nascondi i dettagli del punteggio
const hideScoreDetails = () => {
  showDetails.value = null;
};
</script>
  
  <style scoped>

  /* Aggiungi uno stile per la contenitore dei punteggi */
.score-container {
  position: relative;
}

/* Aggiungi uno stile per la sezione dei dettagli del punteggio */
.score-details {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  top: 50%; /* Centrato verticalmente */
  left: 50%; /* Centrato orizzontalmente */
  transform: translate(-60%, -50%); /* Centrato esattamente */
  z-index: 1000;
  max-width: 300px; /* Limita la larghezza per un aspetto più ordinato */
  width: 110px;
}

/* Mostra i dettagli quando il mouse è sopra il contenitore del punteggio */
.score-container:hover .score-details {
  display: block;
}
  .list-group-item {
    min-height: 70px; /* Altezza minima uniforme per tutti gli elementi */
  }
  
  .team-info {
    flex: 1; /* Permette alla squadra di prendere tutto lo spazio disponibile */
    display: flex;
    align-items: center; /* Allinea verticalmente gli elementi */
  }
  
  .team-name {
    font-weight: bold;
    color: #333;
    word-wrap: break-word; /* Permette il wrapping del testo */
    max-width: 200px; /* Limita la larghezza massima */
    font-size: 0.9rem; /* Font più piccolo per il nome della squadra */
  }
  
  .rank {
    font-size: 1.5rem;
    color: #007bff;
  }
  
  .trophy {
    font-size: 1.5rem; /* Dimensione delle icone delle coppe */
  }
  
  .gold {
    color: gold;
  }
  
  .silver {
    color: silver;
  }
  
  .bronze {
    color: #cd7f32; /* Colore bronzo */
  }
  
  .bg-light {
    background-color: #f8f9fa !important;
  }
  
  .bg-secondary {
    background-color: #6c757d !important;
    color: #fff;
  }
  
  .bg-success {
    background-color: #28a745 !important;
    color: #fff;
  }
  
  .bg-danger {
    background-color: #dc3545 !important;
    color: #fff;
  }
  
  .bg-warning {
    background-color: #ffc107 !important;
  }
  
  .bg-info {
    background-color: #17a2b8 !important;
    color: #fff;
  }
  </style>
  
  <!-- Bootstrap Icons CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">