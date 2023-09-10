<template>
    <div>
        <DeshboardLayout>

            <div class="content-wrapper" style="">

                <div class="page-header d-flex justify-content-between align-item-center mb-2">
                    <h3 class="page-title">
                        <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
                            <i class="bi bi-info-circle"></i>
                        </span>
                        Payment
                    </h3>

                    <div class="">

                        <button class="btn btn-gradient-primary" @click="showModal = true">+ Add a Method</button>

                    </div>

                </div>


                <div class="row">
                    <div class="col-12 grid-margin">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Payment</h4>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Method</th>
                                                <th>photo</th>
                                                <th>Address</th>


                                                <th>Network</th>
                                                <th>Date Created</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(transactionItem, index) in displayedItems" :key="index">
                                                <td>
                                                    {{index}}
                                                </td>
                                                <td>
                                                    {{transactionItem.name}}
                                                </td>
                                                <td>{{transactionItem.method}} </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td>{{transactionItem.address}} </td>
                                                <td>{{transactionItem.network}} </td>

                                                <td> {{transactionItem.created_at.substring(0, 10)}} </td>
                                                <td><button>delete</button> </td>
                                            </tr>
                                            


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal :showModal="showModal" :modalWidth="modalWidth" :modalHeight="modalHeight" :position="modalPosition"
                    @close="showModal = false" :title="'Payment Method'">
                    <div class="col-12 my-3 card">
                        <form class="justify-content-center" method="POST" enctype="multipart/form-data"
                            @submit.prevent="paymentStore">
                            <!-- Email input -->

                            <div class="form-outline mb-2">
                                <input name="methodname" placeholder="Bitcoin" v-model="name" type="text" id="name"
                                    class="form-control" required />
                                <div class="d-flex">
                                    <label class="form-label" for="name">Method Name</label>
                                </div>
                            </div>
                            <div class="form-outline mb-2">
                                <input placeholder="btc" type="text" v-model="network" class="form-control" required />
                                <div class="d-flex">
                                    <label class="form-label justify-content-start" for="form3Example3">Network</label>
                                </div>
                            </div>
                            <div class="form-outline mb-2">
                                <input placeholder="bitcoin" type="text" v-model="method" class="form-control" required />
                                <div class="d-flex">
                                    <label class="form-label justify-content-start" for="form3Example3">Method</label>
                                </div>
                            </div>
                            <div class="form-outline mb-2">
                                <input placeholder="1x09358bsdfjks2" type="text" v-model="address" class="form-control"
                                    required />
                                <div class="d-flex">
                                    <label class="form-label justify-content-start" for="form3Example3">Address</label>
                                </div>
                            </div>


                            <div class="form-outline mb-2">
                                <input type="file" name="image" onchange="image" class="form-control" required />

                                <div class="d-flex">
                                    <label class="form-label" for="image"> Scan Image</label>
                                </div>
                            </div>


                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-grad">+ Create</button>

                            </div>
                        </form>
                    </div>
                    <!-- Your modal content goes here -->
                </Modal>

            </div>
        </DeshboardLayout>
    </div>
</template>
    
<script>
import axios from 'axios';
import { paymentStore } from '../../store/payment';
export default {
    data() {
        return {
              // paginate
              currentPage: 1, // The current page number
            itemsPerPage: 10, // Number of items to display per page


            payment:'',
            name: '',
            method: '',
            network: '',
            address: '',
            image: '',
            modalWidth: "col-11 col-md-6 bg-white rounded-4 top-0 ",
            showModal: false,
            modalHeight: "auto",
            modalPosition: "justify-content-center align-items-center", // Set the default position here, other options: top, right, bottom, left

        };
    },
    computed:{
        // Calculate the total number of pages based on the total number of items and itemsPerPage
        totalPages() {
            return Math.ceil(this.payment.length / this.itemsPerPage);
        },
        // Get the items to display on the current page
        displayedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.payment.slice(start, end);
        },
    },
    methods: {

        paymentStore() {
            this.$setLoading(true);
            const data = {
                name: this.name,

                method: this.method,
                network: this.network,
                image: this.image,
                address: this.address,
            };
            axios
        .post("/api/payment.store", data)
        .then((response) => {
          

          
          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });
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
        }

    },

    async created() {
        // payment data=====================================================
        const getpayment = paymentStore();

        // Try to get the data from the store
        const paymentData = getpayment.payment;

        if (paymentData) {
            this.payment = paymentData;

        } else {
            // If data is not available, fetch it and set the component property
            this.payment = await getpayment.getPayment();

        }
        this.$setLoading(false);

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

.card {
    padding: 3%;
}
</style>
    