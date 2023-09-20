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
      return this.vip
    },
    deletevip(id) {
      
      this.vip = this.vip.filter((item) => item.id !== id);


      return this.vip
      
    },
   
    async getVip() {
      try {
        const response = await axios.get(
          "/api/vip"
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
