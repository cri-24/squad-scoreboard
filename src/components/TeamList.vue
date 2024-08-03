<template>
  <div class="team-list">
    <div class="card-container">
      <TeamCard v-for="team in teams" :key="team.name" :team="team" @click="openModal(team)" />
    </div>
    <TeamModal v-if="selectedTeam" :team="selectedTeam" @close="selectedTeam = null" />
    <div v-if="selectedTeam" class="overlay" @click="selectedTeam = null"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TeamCard from '@/components/TeamCard.vue';
import TeamModal from '@/components/TeamModal.vue';
import squadImage from '@/assets/squad.jpg';

const teams = ref([
  { name: 'Squadra 1', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'] },
  { name: 'Squadra 2', image: squadImage, members: ['Player3', 'Player4', 'Player3', 'Player4', 'Player5'] },
  { name: 'Squadra 3', image: squadImage, members: ['Player5', 'Player6', 'Player3', 'Player4', 'Player5'] },
  { name: 'Squadra 4', image: squadImage, members: ['Player7', 'Player8', 'Player3', 'Player4', 'Player5'] },
  { name: 'Squadra 5', image: squadImage, members: ['Player9', 'Player10', 'Player3', 'Player4', 'Player5'] },
  { name: 'Squadra 6', image: squadImage, members: ['Player11', 'Player12', 'Player3', 'Player4', 'Player5'] }
]);

const selectedTeam = ref(null);

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