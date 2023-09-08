import { defineStore } from "pinia";
import axios from "axios";

export const transactionStore = defineStore("transaction", {
  state: () => ({
    allTransaction: "",
    authTransaction: "",
  }),
  actions: {
    setTransaction(payload) {
      this.allTransaction = payload.allTransaction;
      this.authTransaction = payload.authTransaction;
    },
    addTransaction(data) {
      
      const dataArray = Array.isArray(data) ? data : [data];
      
      // Adds the elements of dataArray to the end of the authTransaction array
      this.authTransaction.unshift(...dataArray);
      
    },
    async getTransaction() {
      try {
        const response = await axios.get(
          "/api/transaction"
        );
        this.setTransaction(response.data);
        return response.data; // Return the fetched data
      } catch (error) {
        console.log(error);
      }
    },
    async authUserTransaction() {
      await this.getTransaction(); // Wait for the data to be fetched
      const data = this.authTransaction;

      return data;
    },
    async allUserTransaction() {
      const data = await this.getTransaction(); // Wait for the data to be fetched

      return data;
    },
  },
});
