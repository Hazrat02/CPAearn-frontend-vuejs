import { defineStore } from 'pinia';
import axios from 'axios';

export const transactionStore = defineStore('transaction', {
  state: () => ({
    allTransaction: '',
    authTransaction: '',
  }),
  actions: {
    setTransaction(payload) {
      this.allTransaction = payload.allTransaction;
      this.authTransaction = payload.authTransaction;
     
    },
    async getTransaction() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/transaction');
        this.setTransaction(response.data);
        return response.data; // Return the fetched data
      } catch (error) {
        console.log(error);
      }
    },
    async authUserTransaction() {
      await this.getTransaction(); // Wait for the data to be fetched
      const data = this.authTransaction;
      console.log('authUserTransaction', data);
      return data;
    },
    async allUserTransaction() {
      const data =await this.getTransaction(); // Wait for the data to be fetched
  

      return data;
    },
  },
});
