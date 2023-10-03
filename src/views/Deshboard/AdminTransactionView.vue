<template>
    <div>
        <DeshboardLayout>

            <div class="content-wrapper" style="">
                <div class="page-header row justify-content-between mb-2">
                    <h3 class="col-12 col-md-6 page-title">
                        <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
                            <i class="bi bi-chevron-bar-contract"></i>
                        </span>
                        Transaction
                    </h3>
                    <div class="col-12 col-md-6">
                        <div class="add-items d-flex justify-content-between">
                            <input type="text" class="form-control todo-list-input" placeholder="who want search..?"
                                v-model="searchQuery">
                            <button class="add btn btn-gradient-primary " id="add-task">Search..</button>
                        </div>
                    </div>

                </div>
                <div class="row ">
                    <div class="col-12 grid-margin">
                        <div class="card" style="background: #9c9c9c1a">
                            <div class="card-body" style="background: #9c9c9c1a">
                                <div class="d-flex justify-content-between">
                                    <h4 class="card-title">User</h4>
                                    <div>
                                        <div class="dropdown">
                                            <i @click="toggleDropdown" class="bi bi-filter-square"
                                                style="font-size: 30px;color: rgba(133, 28, 204, 0.945);"></i>
                                            <!-- <button @click="toggleDropdown"><i class="bi bi-filter-square"></i>{{ selectedOption }}</button> -->
                                            <ul v-if="isOpen">
                                                <li v-for="(option, index) in filterOptions" :key="index"
                                                    @click="selectOption(option)">
                                                    {{ option }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>


                                <div class="table-responsive" style="">
                                    <table class="table" style="">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Method</th>
                                                <th>W/D</th>
                                                <th>Date</th>
                                                <th>Price</th>
                                                <th>TRXID/Address</th>
                                                <th>Status</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(transactionItem, index) in displayedItems" :key="index">
                                                <th>
                                                    <i class="bi" :class="{
                                                        'bi-arrow-down-square':
                                                            transactionItem.type === 'deposit',
                                                        'bi-arrow-up-square':
                                                            transactionItem.type === 'withdraw',
                                                    }">
                                                    </i>
                                                </th>
                                                <td>{{ transactionItem.method.name }}</td>
                                                <td>{{ transactionItem.type }}</td>
                                                <td>{{ transactionItem.created_at.substring(0, 10) }}</td>
                                                <td>${{ transactionItem.price }}</td>
                                                <td v-if="transactionItem.trxid">{{ transactionItem.trxid }} </td>
                                                <td v-else>{{ transactionItem.address }}</td>
                                                <td>
                                                    <span class="badge" :class="{
                                                        'bg-warning': transactionItem.status === 'pending',
                                                        'bg-danger': transactionItem.status === 'rejected',
                                                        'bg-success': transactionItem.status === 'success',
                                                    }">{{ transactionItem.status }}</span>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-between px-2">


                                                        <i @click="trxEdit(transactionItem.id, 'rejected')"
                                                            class="bi bi-x-square " style="color: red;"></i>

                                                        <i @click="trxEdit(transactionItem.id, 'success')"
                                                            class="bi-check-lg" style="color: rgb(10, 146, 101);"></i>

                                                    </div>
                                                </td>
                                            </tr>


                                        </tbody>

                                    </table>


                                </div>
                                <nav v-show="totalPages > 1" aria-label="Page navigation example mt-3">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item" :class="{
                                            disabled: currentPage === 1,
                                        }">
                                            <button class="page-link" @click="previousPage" :disabled="currentPage === 1">
                                                Previous
                                            </button>
                                        </li>
                                        <li class="page-item">
                                            <span class="btn ">Page {{ currentPage }} of {{ totalPages }}</span>
                                        </li>

                                        <li class="page-item">
                                            <button class="page-link" @click="nextPage" :class="{
                                                disabled: currentPage === totalPages,
                                            }">
                                                Next
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </DeshboardLayout>
    </div>
</template>
    
<script>

import axios from "axios";
import { transactionStore } from "../../store/transaction";
export default {

    data() {
        return {

            isOpen: false,
            selectedOption: "all", // Initial selected option
            filterOptions: ["all", "pending", "rejected", "success"], // Dropdown options

            transaction: [],
            searchQuery: '',

            // paginate
            currentPage: 1, // The current page number
            itemsPerPage: 10, // Number of items to display per page

        };
    },
    computed: {
        search() {
    if (!this.searchQuery) {
      return this.transaction;
    } else {
      const searchText = this.searchQuery.toLowerCase();
      return this.transaction.filter(item => {
        const trxid = item.trxid ? item.trxid.toLowerCase() : ''; // Handle null trxid
        return (
          item.type.toLowerCase().includes(searchText) ||
          trxid.includes(searchText)||item.status.toLowerCase().includes(searchText)
        );
      });
    }
  },
        filteredTransactions() {
            if (this.selectedOption === "all") {
                return this.search; // No filter applied, return all transactions
            } else if (this.selectedOption === "pending") {
                return this.search.filter(transaction => transaction.status === "pending");
            } else if (this.selectedOption === "rejected") {
                return this.search.filter(transaction => transaction.status === "rejected");
            } else {
                return this.search.filter(transaction => transaction.status === "success");
            }
        },
        // Calculate the total number of pages based on the total number of items and itemsPerPage
        totalPages() {
            return Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
        },
        // Get the items to display on the current page
        displayedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredTransactions.slice(start, end);


        },
    },

    async created() {
        // transactionStore===================================
        const getTransaction = transactionStore();

        // Try to get the data from the store
        const transactionData = getTransaction.allTransaction;

        if (transactionData) {
            this.transaction = transactionData;

        } else {
            // If data is not available, fetch it and set the component property
            this.transaction = await getTransaction.allUserTransaction();
            
        }
        this.$setLoading(false);

    },
    methods: {
        // paginate=================================
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        trxEdit(id, status) {

            this.$setLoading(true);



            const data = {
                status: status

            }


            axios.put(`api/transaction.edit/${id}`, data)
                .then((response) => {

                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",






                    });

                    const index = this.transaction.findIndex(item => item.id === id);
                    if (index !== -1) {

                        this.transaction[index].status = status;


                        this.$set(this.transaction, index, this.transaction[index]);
                    }
                })
                .catch((error) => {
                    this.$setLoading(false);
                    this.$notify({
                        title: "Error message",
                        text: error.response.data.message,
                        type: "error",
                    });
                });

            this.$setLoading(false);
            console.log(id, status)
        },
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.isOpen = false;

            // You can add logic here to filter transactions based on the selected option
            // For example, you can set a data property to store the selected filter option
            // and then filter the transactions accordingly.
        },
    },
};
</script>
<style scoped>
.dropdown {
    position: relative;
    display: inline-block;
}

button {
    background-color: #ffffff;
    border: 1px solid #b81515;
    padding: 10px;
    cursor: pointer;
}

.dropdown ul {
    list-style-type: none;
    padding: 0;

    position: absolute;
    right: -5px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 150px;
    overflow-y: auto;

    z-index: 199999;
    /* Ensure the dropdown appears above other content */
}

.dropdown li {
    padding: 10px;
    cursor: pointer;
}

.dropdown ul.show {
    display: block;
}
</style>

<style ></style>

    