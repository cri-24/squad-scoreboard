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
  const storedUser = JSON.parse(localStorage.getItem('currentUser'));
  if (storedUser) {
    nickname.value = storedUser.nickname;
  }
});

const showRanking = () => {
  const modal = new bootstrap.Modal(document.getElementById('rankingModal'));
  modal.show();
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.welcome-message {
  text-align: center;
  margin-bottom: 20px;
}

.modal-content {
  border-radius: 8px;
}
</style>