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
                                                    {{ index }}
                                                </td>
                                                <td>
                                                    {{ transactionItem.name }}
                                                </td>
                                                <td>{{ transactionItem.method }} </td>
                                                <td>
                                                    <img :src="transactionItem.image" class="me-2" alt="image"
                                                        style="width: 40px;">
                                                </td>
                                                <td>{{ transactionItem.address }} </td>
                                                <td>{{ transactionItem.network }} </td>

                                                <td> {{ transactionItem.created_at.substring(0, 10) }} </td>
                                                <td>
                                                    <div class="d-flex justify-content-between">


                                                        <i @click="paymentdelete(transactionItem.id)" class="bi bi-trash"
                                                            style="color: red;"></i>
                                                        <i @click="paymenteditmodal(transactionItem.id)" class="bi bi-pen"
                                                            style="color: rgb(10, 146, 101);"></i>

                                                    </div>
                                                </td>
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
                                <input type="file" name="image" @change="imagehandle" class="form-control" required />

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
                <Modal :showModal="showEditModal" :modalWidth="modalWidth" :modalHeight="modalHeight"
                    :position="modalPosition" @close="showEditModal = false" :title="'Method Update'">
                    <div class="col-12 my-3 card">
                        <form class="justify-content-center" method="POST" enctype="multipart/form-data"
                            @submit.prevent="paymentEdit">
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
                                <input type="file" name="image" @change="imagehandle" class="form-control" required />

                                <div class="d-flex">
                                    <label class="form-label" for="image"> Scan Image</label>
                                </div>
                            </div>


                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-grad">Update</button>

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
            showEditModal: false,
            editId: '',
            payment: '',
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
    computed: {
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

        imagehandle(event) {
            this.image = event.target.files[0];
        },

        paymentdelete(id) {


            this.$setLoading(true);

            axios.delete(`api/payment.delete/${id}`)
                .then((response) => {



                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });

                    const getpayment = paymentStore();

                    // Try to get the data from the store
                    this.payment= getpayment.deletepayment(id);
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

        },

        paymentStore() {
            this.$setLoading(true);

            const formData = new FormData(); // Create a FormData object
            formData.append('name', this.name);
            formData.append('method', this.method);
            formData.append('network', this.network);
            formData.append('image', this.image);
            formData.append('address', this.address);


            axios
                .post("/api/payment.store", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Set content type for file upload
                    },
                }).then((response) => {



                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: response.data.status,
                    });

                    const getpayment = paymentStore();

                    // Try to get the data from the store
                    const paymentData = getpayment.addpayment(response.data.payment);
                    this.payment = paymentData;
                    this.showModal = false
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
        },
        paymenteditmodal(id) {

            const item = this.payment.find(item => item.id === id);
            this.name = item.name

            this.method = item.method

            this.network = item.network

            this.image = item.image
            this.address = item.address
            this.editId = id

            this.showEditModal = true


        },
        vipLabelModal(id) {

            const item = this.payment.find(item => item.id === id);
            this.name = item.name

            this.method = item.method

            this.network = item.network

            this.image = item.image
            this.address = item.address
            this.editId = id

            this.showEditModal = true


        },
        paymentEdit() {

            this.showeditModal = false
            this.$setLoading(true);


            const id = this.editId
            const data = {
                name: this.name,

                method: this.method,
                network: this.network,
                image: this.image,
                address: this.address,

            }


            axios.put(`api/payment.edit/${id}`, data)
                .then((response) => {

                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });
                    this.showEditModal = false
                    const index = this.payment.findIndex(item => item.id === id);
                    if (index !== -1) {

                        this.payment[index].name = this.name;
                        this.payment[index].method = this.method;
                        this.payment[index].network = this.network;
                        this.payment[index].image = this.image;
                        this.payment[index].address = this.address;


                        this.$set(this.payment, index, this.payment[index]);
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

        },
        vipLabelCreate() {

            this.showeditModal = false
            this.$setLoading(true);


            const id = this.editId
            const data = {
                name: this.name,

                method: this.method,
                network: this.network,
                image: this.image,
                address: this.address,

            }


            axios.put(`api/payment.edit/${id}`, data)
                .then((response) => {

                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });
                    this.showEditModal = false
                    const index = this.payment.findIndex(item => item.id === id);
                    if (index !== -1) {

                        this.payment[index].name = this.name;
                        this.payment[index].method = this.method;
                        this.payment[index].network = this.network;
                        this.payment[index].image = this.image;
                        this.payment[index].address = this.address;


                        this.$set(this.payment, index, this.payment[index]);
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

        },

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
    