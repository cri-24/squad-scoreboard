<template>
  <div class="card-container">
    <TeamCard v-for="team in teams" :key="team.name" :team="team" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TeamCard from '@/components/TeamCard.vue';

const teams = ref([
  { name: 'sq1', members: ['Player1', 'Player2'] },
  { name: 'sq2', members: ['Player3', 'Player4'] },
  { name: 'sq3', members: ['Player5', 'Player6'] },
  { name: 'sq4', members: ['Player7', 'Player8'] },
  { name: 'sq5', members: ['Player9', 'Player10'] },
  { name: 'sq6', members: ['Player11', 'Player12'] }
]);
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Due colonne */
  gap: 20px; /* Spazio tra le card */
  justify-content: center; /* Centra le card orizzontalmente */
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}
</style>