<template>
    <div class="home-page">
      <div class="welcome-message" v-if="nickname">
        <h1>Ciao {{ nickname }}!</h1>
      </div>
      <TeamList />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import TeamList from '@/components/TeamList.vue';
  
  const nickname = ref('');
  
  onMounted(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      nickname.value = storedUser.nickname;
    }
  });
  </script>
  
  <style scoped>
  .home-page {
    padding: 2rem;
  }
  
  .welcome-message {
    text-align: center;
    margin-bottom: 2rem;
  }
  </style>