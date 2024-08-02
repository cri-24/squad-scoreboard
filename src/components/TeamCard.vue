<template>
    <div class="team-card card">
      <div class="card-body">
        <h5 class="card-title">{{ team.name }}</h5>
        <ul>
          <li v-for="member in team.members" :key="member">
            {{ member }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    team: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .team-card {
    border: 1px solid rgba(255, 0, 0, 0.2);
    border-radius: 8px;
    background-color: #fff;
  }
  
  .card-title {
    color: blue;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  </style>