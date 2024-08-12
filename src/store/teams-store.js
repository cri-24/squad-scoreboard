import { defineStore } from 'pinia';
import { ref } from 'vue';
import dishwashing from '@/assets/dish-washing.png';
import setTable from '@/assets/set-table.png';
import disordinati from '@/assets/disordinati.jpg';
import ceppi from '@/assets/ceppi.jpg';
import bacapamomba from '@/assets/bacapamomba.jpg';
import bearsdanger from '@/assets/bears-danger.jpg';
import zompalompa from '@/assets/zompa-lompa.jpg';
import bellissimissimi from '@/assets/bellissimissimi.jpg';
import audiodisordinati from '@/assets/audio/disordinati.m4a';
import audioceppi from '@/assets/audio/ceppi.m4a';
import audiobacapamomba from '@/assets/audio/bacapamomba.m4a';
import audiobearsdanger from '@/assets/audio/bearsdanger.m4a';
import audiozompalompa from '@/assets/audio/zompalompa.m4a';
import audiobellissimissimi from '@/assets/audio/bellissimissimi.m4a';

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref([
    //TODO: update team name
    { name: 'I disordinati', image: disordinati, audio: audiodisordinati, serviceimage: dishwashing, service: "Lavare i piatti - Colazione",members: ['Leonardo S.', 'Giacomo P.', 'Marta Mo.', 'Bianca V.', 'Francesco B.lla'], leaders: ['Ludovico', 'Maddalena M.', 'Giordano'], details: { 'Game 1': 0 } },
    { name: 'I bellissimissimi', image: bellissimissimi, audio: audiobellissimissimi, serviceimage: setTable, service: "Apparecchiare/Sparecchiare - Pranzo",members: ['Elena M.', 'Cristiano B.', 'Daniele M.', 'Cristiano C.', 'Elena G.'], leaders: ['Michele M.', 'Elisa', 'Matteo M.'], details: { 'Game 1': 0 } },
    { name: 'Gli zompa-lompa', image: zompalompa, audio: audiozompalompa, serviceimage: dishwashing, service: "Lavare i piatti - Pranzo",members: ['Emanuele V.', 'Sara C.', 'Rachele G.', 'Andrea O.', 'Sergio T.'], leaders: ['Miriam T.', 'Michele P.'], details: { 'Game 1': 0 }  },
    { name: 'I ceppi', image: ceppi, audio: audioceppi, serviceimage: setTable, service: "Apparecchiare/Sparecchiare - Cena", members: ['Miriam M.', 'Marta Me.', 'Tommaso B.', 'Chiara DS.', 'Lorenzo B.'], leaders: ['Laura', 'Riccardo'], details: { 'Game 1': 0 }  },
    { name: 'I bears danger', image: bearsdanger, audio: audiobearsdanger, serviceimage: dishwashing, service: "Lavare i piatti - Cena", members: ['Alessia F.', 'Andrea R.', 'Francesco B.ni', 'Osmeraldo K.', 'Giulia M.', 'Edoardo P.'], leaders: ['Cecilia', 'Matteo S.', 'Cristiana'], details: { 'Game 1': 0 } },
    { name: 'I bacapamomba', image: bacapamomba, audio: audiobacapamomba, serviceimage: setTable, service: "Apparecchiare/Sparecchiare - Colazione", members: ['Pietro B.', 'Simone P.', 'Maddalena C.', 'Vittorio B.', 'Caterina M.'], leaders: ['Sara', 'Roberto'], details: { 'Game 1': 0 }  }
  ]);

  return { teams };
});