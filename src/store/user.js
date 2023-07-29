import { defineStore } from 'pinia';
import axios from 'axios';
const LOCAL_STORAGE_KEY = 'user_data';

export const useAuthUserStore = defineStore('authUser', {
  state: () => ({
    authUser: null,
  }),
  actions: {
    setAuthUser(newUser) {
      this.authUser = newUser;
      this.saveUserToLocalStorage(newUser);
    },
    reSetAuthUser() {
      axios
        .post("http://127.0.0.1:8000/api/auth/me")
        .then((response) => {
            
            this.authUser = response.data.authUser;
            return response.data.authUser;
            
        })
        .catch((error) => {
          console.log(error);
        });

      
    },
    clearAuthUser() {
      this.user = null;
      this.saveUserToLocalStorage(null);
    },
    loadUserFromLocalStorage() {
      const savedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (savedUser) {
        this.user = savedUser;
      }
    },
    saveUserToLocalStorage(user) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    },
  },
});