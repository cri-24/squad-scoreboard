<template>
  <div class="home-page">
    <!-- Topbar -->
    <nav class="navbar navbar-dark bg-dark topbar fixed-top">
      <div class="container d-flex justify-content-center align-items-center">
        <span class="navbar-brand text-center" >
            S'App Secondo<br>
            T'arvisio quando arvengo 2024
        </span>
      </div>
    </nav>

    <!-- Contenuto della pagina -->
    <div class="content">
      <div class="welcome-message" v-if="username">
        <h1>Ciao {{ username }}!</h1>
      </div>
      <TeamList />
    </div>

    <!-- Modal -->
    <div class="modal fade" id="rankingModal" tabindex="-1" aria-labelledby="rankingModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="rankingModalLabel">Complimenti a tutti 🎉 🎊</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <RankingList :teams="teams" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer fisso -->
    <footer class="footer fixed-bottom">
      <div class="container d-flex justify-content-center">
        <button
          class="btn btn-outline-light rounded-button"
          :class="{ active: currentButton === 'squadre' }"
          @click="navigateTo('/home')"
        >
          <i class="bi bi-people me-2"></i>Squadre
        </button>
        <button
          class="btn btn-outline-light rounded-button"
          :class="{ active: currentButton === 'classifica' }"
          @click="openRanking"
        >
          <i class="bi bi-trophy me-2"></i>Classifica
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import TeamList from '@/components/TeamList.vue';
import RankingList from '@/components/RankingList.vue';
import * as bootstrap from 'bootstrap';
import { useTeamsStore } from '@/store/teams-store'; // Importa lo store

const username = ref('');
const userTeam = ref(''); // Stato per la squadra dell'utente
const currentButton = ref('squadre'); // Imposta 'squadre' come il bottone inizialmente selezionato

const router = useRouter();
const teamStore = useTeamsStore(); // Usa lo store
const teams = teamStore.teams; // Ottieni le squadre dallo store

onMounted(() => {
  try {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser && storedUser.username) {
      username.value = storedUser.username;
      userTeam.value = storedUser.team; // Imposta la squadra dell'utente
    }
  } catch (error) {
    console.error("Error reading localStorage on home:", error);
  }

  // Imposta l'evento di chiusura della modale
  nextTick(() => {
    const modalElement = document.getElementById('rankingModal');
    if (modalElement) {
      modalElement.addEventListener('hidden.bs.modal', () => {
        currentButton.value = 'squadre'; // Ripristina il pulsante "Squadre" come attivo
      });
    }
  });
});

const navigateTo = (path) => {
  router.push(path);
  currentButton.value = 'squadre'; // Imposta il bottone "Squadre" come selezionato
};

const openRanking = () => {
  const modalElement = document.getElementById('rankingModal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    currentButton.value = 'classifica'; // Aggiorna lo stato del bottone selezionato
  } else {
    console.error("Modal element not found");
  }
};
</script>

<style>
.home-page {
  display: flex;
  font-family: 'Montserrat', sans-serif;
  width: 700;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  min-height: 100vh; /* Altezza minima per evitare sovrapposizione con il footer */
}

.bg-dark {
  background-color: #01478d;
}

.topbar {
  background-color: #343a40;
  color: #ffffff;
  padding: 0.5rem;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center; /* Assicura che il contenuto della navbar sia centrato */
}

.navbar-brand {
  font-family: 'Montserrat', sans-serif;
  width: 700;
  font-size: 1.5rem;
  color: #ffffff;
}

.welcome-text {
  font-size: 0.875rem; 
  color: #ffffff;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  width: 700;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 80px;
  padding: 1rem;
  width: 100%;
}

.welcome-message {
  font-family: 'Montserrat', sans-serif;
  width: 700;
  margin-bottom: 2rem;
  text-align: center;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 20px;
  width: 100%;
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  background-color: #343a40;
  color: #ffffff;
  padding: 1rem 0;
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.rounded-button {
  border-radius: 25px;
  border: 2px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
  font-size: 1rem;
  transition: background-color 0.3s, border-color 0.3s;
  margin: 0 10px;
}

.rounded-button.active {
  background-color: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

.rounded-button:hover {
  background-color: #ffffff;
  color: #000000;
}

@media (max-width: 600px) {
  .card-container {
    grid-template-columns: 1fr; /* Una colonna su mobile */
  }

  .card {
    margin: 0.5rem; /* Margine aggiuntivo per card su mobile */
  }
}
</style>