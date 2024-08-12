<template>
  <div :class="['team-card', { 'highlighted': isUserTeam }]" @click="$emit('click')">
    <div class="team-image">
      <img :src="team.image" alt="Team Image" />
    </div>
    <div class="team-info">
      <h3 class="card-title">{{ team.name }}</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  team: {
    type: Object,
    required: true
  },
  isUserTeam: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.team-card {
  background-color: #ffffff; /* Sfondo bianco per le card */
  border-radius: 12px; /* Bordi arrotondati */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombra leggera */
  cursor: pointer; /* Cambia il cursore per indicare che è cliccabile */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 400px; /* Altezza fissa per uniformare le card */
}

.team-card:hover {
  transform: scale(1.02); /* Ingrandisce leggermente la card al passaggio del mouse */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Ombra più intensa */
}

.team-image {
  flex: 0 0 90%; /* Occupa l'80% della card */
  overflow: hidden; /* Nasconde parte dell'immagine che esce fuori dalla card */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.team-image img {
  width: 100%; /* Occupa tutta la larghezza della sezione dell'immagine */
  height: 100%; /* Occupa tutta l'altezza della sezione dell'immagine */
  object-fit: cover; /* Adatta l'immagine senza deformarla */
}

.team-info {
  flex: 0 0 20%; /* Occupa il restante 20% della card */
  padding: 10px;
  display: flex;
  justify-content: center; /* Centra il testo orizzontalmente */
  align-items: top; /* Centra il testo verticalmente */
}

.card-title {
  color: #333; /* Colore del testo della card */
  font-size: 1.2rem;
  margin: 0;
}

.team-card.highlighted {
  border: 2px solid #ffd700; /* Bordo giallo per la squadra evidenziata */
}
</style>