import { defineStore } from "pinia";
import axios from "axios";

export const workStore = defineStore("work", {
  state: () => ({
    work: "",
    
  }),
  actions: {
    setWork(payload) {
      this.work = payload;
    },
    addWork(data) {
      
      const dataArray = Array.isArray(data) ? data : [data];
      
      // Adds the elements of dataArray to the end of the authTransaction array
      this.vip.unshift(...dataArray);
      
    },
    async getWork() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/work"
        );
        this.setWork(response.data.work);
        return this.work; // Return the fetched data
      } catch (error) {
        console.log(error);
      }
    },
    
    
  },
});
