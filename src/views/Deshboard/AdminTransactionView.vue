<template>
    <div>
        <DeshboardLayout>

            <div class="content-wrapper" style="">
                <div class="page-header row justify-content-between mb-2">
                    <h3 class="col-12 col-md-6 page-title">
                        <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
                            <i class="bi bi-person-gear"></i>
                        </span>
                        Transaction
                    </h3>
                    <div class="col-12 col-md-6">
                        <div class="add-items d-flex justify-content-between">
                            <input type="text" class="form-control todo-list-input" placeholder="who want search..?">
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
                                            <i @click="toggleDropdown" class="bi bi-filter-square"></i>
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

                                <div class="table-responsive" style="background: #9c9c9c1a">
                                    <table class="table" style="background: #9c9c9c1a">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Method</th>
                                                <th>W/D</th>
                                                <th>Date</th>
                                                <th>Price</th>
                                                <th>TRXID</th>
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
                                                <td>{{ transactionItem.trxid }}</td>
                                                <td>
                                                    <span class="badge" :class="{
                                                        'bg-warning': transactionItem.status === 'pending',
                                                        'bg-danger': transactionItem.status === 'rejected',
                                                        'bg-success': transactionItem.status === 'success',
                                                    }">{{ transactionItem.status }}</span>
                                                </td>
                                                <td>
                                                    edit
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </DeshboardLayout>
    </div>
</template>
    
<script>

import { transactionStore } from "../../store/transaction";
export default {

    data() {
        return {

            isOpen: false,
            selectedOption: "all", // Initial selected option
            filterOptions: ["all", "pending", "rejected","success"], // Dropdown options

            transaction: '',

            // paginate
            currentPage: 1, // The current page number
            itemsPerPage: 10, // Number of items to display per page

        };
    },
    computed: {

        filteredTransactions() {
            if (this.selectedOption === "all") {
                return this.transaction; // No filter applied, return all transactions
            } else if (this.selectedOption === "pending") {
                return this.transaction.filter(transaction => transaction.status === "pending");
            } else if (this.selectedOption === "rejected") {
                return this.transaction.filter(transaction => transaction.status === "rejected");
            } else {
                return this.transaction.filter(transaction => transaction.status === "success");
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
        const transactionData = getTransaction.authTransaction;

        if (transactionData) {
            this.transaction = transactionData;

        } else {
            // If data is not available, fetch it and set the component property
            this.transaction = await getTransaction.authUserTransaction();

        }
        this.$setLoading(false);

    },
    methods: {
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
<style>
.card-img-absolute {
    position: absolute;
    top: 0;
    right: 0%;
    height: 100%;
}
</style>

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

ul {
    list-style-type: none;
    padding: 0;
    margin-left: -50px;
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 150px;
    overflow-y: auto;

    z-index: 199999;
    /* Ensure the dropdown appears above other content */
}

li {
    padding: 10px;
    cursor: pointer;
}

ul.show {
    display: block;
}
</style>

    