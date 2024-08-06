import { defineStore } from 'pinia';
import { ref } from 'vue';
import squadImage from '@/assets/squad.jpg';

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref([
    { name: 'Squadra 1', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Notturno': 50, 'Giochi acqua': 50, 'Stellone': 50 } },
    { name: 'Squadra 2', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 } },
    { name: 'Squadra 3', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 }  },
    { name: 'Squadra 4', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 }  },
    { name: 'Squadra 5', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 } },
    { name: 'Squadra 6', image: squadImage, members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 }  }
  ]);

  return { teams };
});