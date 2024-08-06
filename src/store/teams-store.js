import { defineStore } from 'pinia';
import { ref } from 'vue';
import squadImage from '@/assets/squad.jpg';
import dishwashing from '@/assets/dish-washing.png';
import setTable from '@/assets/set-table.png';

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref([
    { name: 'Squadra 1', image: squadImage, serviceimage: setTable, service: "Pranzo", members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Notturno': 50, 'Giochi acqua': 50, 'Stellone': 50 } },
    { name: 'Squadra 2', image: squadImage, serviceimage: dishwashing, service: "Colazione", members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 } },
    { name: 'Squadra 3', image: squadImage, serviceimage: setTable, service: "Cena", members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 }  },
    { name: 'Squadra 4', image: squadImage, serviceimage: dishwashing, service: "Cena", members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 }  },
    { name: 'Squadra 5', image: squadImage, serviceimage: setTable, service: "Pranzo", members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 } },
    { name: 'Squadra 6', image: squadImage, serviceimage: setTable, service: "Colazione", members: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'], leaders: ['Player1', 'Player2', 'Player3'], details: { 'Game 1': 40, 'Game 2': 30, 'Game 3': 50 }  }
  ]);

  return { teams };
});