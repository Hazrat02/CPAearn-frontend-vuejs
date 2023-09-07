import { reactive, toRef } from 'vue';
import axios from 'axios';
let authenticated = false;

const state = reactive({
  authenticated: authenticated,
});

const authenticatedRef = toRef(state, 'authenticated');

// Check localStorage for token during component initialization
if (localStorage.getItem('token')) {
  authenticatedRef.value = true;
} else {
  authenticatedRef.value = false;
}

export function logout() {
 
  

        localStorage.clear();
        authenticatedRef.value = false;
       

}
export function login(value) {
  localStorage.setItem('token', value);
  authenticatedRef.value = true;

}

export default function isAuthenticated() {
  return authenticatedRef.value;
}
