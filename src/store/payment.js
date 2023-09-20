import { defineStore } from "pinia";
import axios from "axios";

export const paymentStore = defineStore("payment", {
  state: () => ({
    payment: "",
    
  }),
  actions: {
    setpayment(payload) {
      this.payment = payload;
    },
    addpayment(data) {
      
      const dataArray = Array.isArray(data) ? data : [data];
      
      // Adds the elements of dataArray to the end of the authTransaction array
      this.payment.unshift(...dataArray);

      return this.payment
      
    },
    deletepayment(id) {
      
      this.payment = this.payment.filter((item) => item.id !== id);


      return this.payment
      
    },
    async getPayment() {
      try {
        const response = await axios.get(
          "/api/payment"
        );
        this.setpayment(response.data.payment);
        return response.data.payment; // Return the fetched data
      } catch (error) {
        console.log(error);
      }
    },
   
    
  },
});
