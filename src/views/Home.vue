<template>
  <div class="home-page">
    <div class="welcome-message" v-if="nickname">
      <h1>Ciao {{ nickname }}!</h1>
    </div>
    <TeamList />
    <button class="btn btn-primary mt-3" @click="showRanking">Mostra Classifica</button>

    <!-- Modal -->
    <div class="modal fade" id="rankingModal" tabindex="-1" aria-labelledby="rankingModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="rankingModalLabel">Classifica</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul>
              <li v-for="(team, index) in teams" :key="team.name">
                {{ index + 1 }}. {{ team.name }} - {{ team.members.length }} membri
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TeamList from '@/components/TeamList.vue';

const nickname = ref('');

const teams = ref([
  { name: 'sq1', members: ['Player1', 'Player2'] },
  { name: 'sq2', members: ['Player3', 'Player4'] },
  { name: 'sq3', members: ['Player5', 'Player6'] },
  { name: 'sq4', members: ['Player7', 'Player8'] },
  { name: 'sq5', members: ['Player9', 'Player10'] },
  { name: 'sq6', members: ['Player11', 'Player12'] }
]);

onMounted(() => {
  console.log("Home page mounted"); // Log per verificare che il onMounted venga eseguito
  try {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log("Stored user on home:", storedUser); // Verifica il contenuto del localStorage
    if (storedUser && storedUser.nickname) {
      nickname.value = storedUser.nickname;
    }
  } catch (error) {
    console.error("Error reading localStorage on home:", error);
  }
});

const showRanking = () => {
  const modal = new bootstrap.Modal(document.getElementById('rankingModal'));
  modal.show();
};
</script>

<style>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f1f3f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  height: 100vh;
}

.welcome-message {
  margin-bottom: 2rem;
  text-align: center;
}

h1 {
  color: #007bff;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

@media (max-width: 600px) {
  .home-page {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>