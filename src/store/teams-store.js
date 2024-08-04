import { defineStore } from 'pinia';
import { ref } from 'vue';
import squadImage from '@/assets/squad.jpg';

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref([
    { name: 'Squadra 1', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], score: 100 },
    { name: 'Squadra 2', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], score: 90 },
    { name: 'Squadra 3', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], score: 80 },
    { name: 'Squadra 4', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], score: 70 },
    { name: 'Squadra 5', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], score: 60 },
    { name: 'Squadra 6', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], score: 50 }
  ]);

  return { teams };
});