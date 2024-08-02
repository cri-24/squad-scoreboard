import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    teams: [],
    users: [],
  }),
  actions: {
    registerUser(user) {
      this.users.push(user);
      const team = this.teams.find(t => t.name === user.team);
      if (team) {
        team.members.push(user.nickname);
      } else {
        this.teams.push({ name: user.team, members: [user.nickname] });
      }
    },
  },
  getters: {
    getTeams: (state) => state.teams,
  },
});