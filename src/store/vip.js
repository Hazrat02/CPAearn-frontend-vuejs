import { defineStore } from "pinia";
import axios from "axios";

export const vipStore = defineStore("vip", {
  state: () => ({
    vip: "",
    
  }),
  actions: {
    setVip(payload) {
      this.vip = payload;
    },
    addVip(data) {
      
      const dataArray = Array.isArray(data) ? data : [data];
      
      // Adds the elements of dataArray to the end of the authTransaction array
      this.vip.unshift(...dataArray);
      
    },
    async getVip() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/vip"
        );
        this.setVip(response.data.vip);
        return response.data.vip; // Return the fetched data
      } catch (error) {
        console.log(error);
      }
    },
    async authUserVip() {
      await this.getVip(); // Wait for the data to be fetched
      const data = this.vip;

      return data;
    },
    
  },
});