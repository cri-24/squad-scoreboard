<template>
  <div class="team-list">
    <div v-for="team in teams" :key="team.name" class="mb-4">
      <h5>{{ team.name }}</h5>
      <ul>
        <li v-for="member in team.members" :key="member">{{ member }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();
const teams = computed(() => userStore.getTeams);
</script>

<style scoped>
.team-list {
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h5 {
  color: #007bff;
}
</style>