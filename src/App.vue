<template>
  <router-view></router-view>
</template>

<script setup>
</script>

<style>
body {
  background-color: #e9ecef; /* Colore di sfondo chiaro */
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Evita lo scroll */
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Sfondo scuro con trasparenza */
  z-index: 1;
  pointer-events: none; /* Non cliccabile */
}

.form-container {
  position: relative;
  z-index: 2;
}
</style>