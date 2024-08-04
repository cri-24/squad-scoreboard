<template>
  <div class="team-list">
    <div class="card-container">
      <TeamCard v-for="team in orderedTeams" :key="team.name" :team="team" :isUserTeam="team.name === userTeam" @click="openModal(team)" />
    </div>
    <TeamModal v-if="selectedTeam" :team="selectedTeam" @close="selectedTeam = null" />
    <div v-if="selectedTeam" class="overlay" @click="selectedTeam = null"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import TeamCard from '@/components/TeamCard.vue';
import TeamModal from '@/components/TeamModal.vue';
import { useTeamsStore } from '@/store/teams-store'; 

const selectedTeam = ref(null);
const teamStore = useTeamsStore(); // Usa lo store
const teams = teamStore.teams; // Ottieni le squadre dallo store
const userTeam = ref('');

// Recupera la squadra dell'utente dal localStorage
onMounted(() => {
  const storedUser = JSON.parse(localStorage.getItem('currentUser'));
  if (storedUser && storedUser.team) {
    userTeam.value = storedUser.team;
  }
});

// Ordina le squadre in modo che la squadra dell'utente sia la prima
const orderedTeams = computed(() => {
  return teams.slice().sort((a, b) => {
    if (a.name === userTeam.value) return -1;
    if (b.name === userTeam.value) return 1;
    return 0;
  });
});

const openModal = (team) => {
  selectedTeam.value = team;
};
</script>

<style scoped>
.team-list {
  background-color: #f8f9fa; /* Sfondo chiaro per la pagina */
  color: #333; /* Colore del testo scuro per contrasto */
  min-height: 100vh;
  padding: 2rem;
  position: relative;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adatta le card per colonne */
  gap: 20px; /* Spazio tra le card */
  justify-content: center; /* Centra le card orizzontalmente */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Colore di sfondo scuro con trasparenza */
  z-index: 1000; /* Posizionamento sopra la pagina */
}
</style>