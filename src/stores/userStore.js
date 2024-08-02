import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    teams: JSON.parse(localStorage.getItem('teams')) || [],
  }),
  actions: {
    registerUser(user) {
      const team = this.teams.find(t => t.name === user.team);
      if (team) {
        if (!team.members.includes(user.nickname)) {
          team.members.push(user.nickname);
        }
      } else {
        this.teams.push({ name: user.team, members: [user.nickname] });
      }
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem('teams', JSON.stringify(this.teams));
    },
  },
  getters: {
    getTeams: (state) => state.teams,
  },
});