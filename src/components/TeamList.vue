<template>
  <div class="team-list">
    <TeamCard v-for="team in teams" :key="team.name" :team="team" />
  </div>
</template>

<script setup>
import TeamCard from '@/components/TeamCard.vue';

const teams = [
  { name: 'sq1', members: ['Player1', 'Player2'] },
  { name: 'sq2', members: ['Player3', 'Player4'] },
  { name: 'sq3', members: ['Player5', 'Player6'] },
  { name: 'sq4', members: ['Player7', 'Player8'] },
  { name: 'sq5', members: ['Player9', 'Player10'] },
  { name: 'sq6', members: ['Player11', 'Player12'] }
];
</script>

<style scoped>
.team-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>