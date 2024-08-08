import { defineStore } from 'pinia';
import { ref } from 'vue';
import squadImage from '@/assets/squad.jpg';
import dishwashing from '@/assets/dish-washing.png';
import setTable from '@/assets/set-table.png';

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref([
    //TODO: update team name
    { name: 'Squadra 1', image: squadImage, serviceimage: setTable, service: "Colazione", members: ['Pietro B.', 'Simone P.', 'Maddalena C.', 'Vittorio B.', 'Caterina M.'], leaders: ['Sara', 'Roberto'], details: { 'Game 1': 0 } },
    { name: 'Squadra 2', image: squadImage, serviceimage: setTable, service: "Pranzo", members: ['Emanuele V.', 'Sara C.', 'Rachele G.', 'Andrea O.', 'Sergio T.'], leaders: ['Miriam T.', 'Michele P.'], details: { 'Game 1': 0 } },
    { name: 'Squadra 3', image: squadImage, serviceimage: setTable, service: "Cena", members: ['Miriam M.', 'Marta Me.', 'Tommaso B.', 'Chiara DS.', 'Lorenzo B.'], leaders: ['Laura', 'Riccardo'], details: { 'Game 1': 0 }  },
    { name: 'Squadra 4', image: squadImage, serviceimage: dishwashing, service: "Colazione", members: ['Alessia F.', 'Andrea R.', 'Francesco B.ni', 'Osmeraldo K.', 'Giulia M.', 'Edoardo P.'], leaders: ['Cecilia', 'Matteo S.', 'Cristiana'], details: { 'Game 1': 0 }  },
    { name: 'Squadra 5', image: squadImage, serviceimage: dishwashing, service: "Pranzo", members: ['Elisa M.', 'Cristiano B.', 'Daniele M.', 'Cristiano C.', 'Elena G.'], leaders: ['Michele M.', 'Elisa', 'Matteo M.'], details: { 'Game 1': 0 } },
    { name: 'Squadra 6', image: squadImage, serviceimage: dishwashing, service: "Cena", members: ['Leonardo S.', 'Giacomo P.', 'Marta Mo.', 'Bianca V.', 'Gianluca G.', 'Francesco B.lla'], leaders: ['Ludovico', 'Maddalena M.', 'Giordano'], details: { 'Game 1': 0 }  }
  ]);

  return { teams };
});