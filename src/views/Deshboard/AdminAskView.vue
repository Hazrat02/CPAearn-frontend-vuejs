<template>
    <div>
        <DeshboardLayout>
            <div class="content-wrapper">

                <div class="page-header d-flex justify-content-between align-item-center mb-2">
                    <h3 class="page-title">
                        <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
                            <i class="bi bi-info-circle"></i>
                        </span>
                        Ask
                    </h3>

                    <div class="">

                        <button class="btn btn-gradient-primary" @click="showModal = true">+ Add a Ask</button>

                    </div>

                </div>
                <section id="faq" class="faq">
                    <div class="container">
                        <div class="row gy-4">
                            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <div class="content px-xl-5">
                                    <h3>
                                        <span>Frequently Asked </span><strong>Questions</strong>
                                    </h3>
                                    <p>
                                        If your problem or inquiry is not addressed in our Frequently
                                        Asked Questions (FAQs) section, we encourage you to get in
                                        touch with our dedicated support team. <router-link to="/contact">Contact
                                            Us</router-link>
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                                <div class="faq-container">
                                    <div class="faq-item" v-for="(item, index) in ask" :key="index" :class="{
                                        'faq-active': item.id === this.activeAsk,
                                    }">
                                        <h3 class="d-flex justify-content-between">
                                            <div>
                                                <span class="num">{{ index }}.</span>
                                                <span>{{ item.ask }}</span>
                                            </div>
                                            <div class="d-flex justify-content-end">
                                                <div class="d-flex gap-2">

                                                    <i @click="askdelete(item.id)" class="bi bi-trash"
                                                        style="color: red;"></i>
                                                    <i @click="askeditmodal(item.id)" class="bi bi-pen"
                                                        style="color: rgb(10, 146, 101);"></i>
                                                </div>

                                            </div>
                                        </h3>
                                        <div class="faq-content">
                                            <p>
                                                {{ item.ans }}
                                            </p>
                                        </div>


                                        <i class="faq-toggle bi bi-chevron-right" @click="toggleActiveAsk(item.id)"></i>
                                    </div>
                                    <!-- End Faq item-->
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Modal :showModal="showModal" :modalWidth="modalWidth" :modalHeight="modalHeight" :position="modalPosition"
                @close="showModal = false" :title="'Ask Make'">

                <div>
                    <form @submit.prevent="askCreate">

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Question</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="What is your name?" v-model="askStore"></textarea>
                        </div>
                        <div class="form-group mb-2">
                            <label for="exampleFormControlTextarea1">Answer</label>
                            <textarea class="form-control" placeholder="My name is jon a" id="exampleFormControlTextarea1"
                                rows="3" v-model="ans"></textarea>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-grad">+ Create</button>

                        </div>
                    </form>
                </div>
                <!-- Your modal content goes here -->
            </Modal>
            <Modal :showModal="showeditModal" :modalWidth="modalWidth" :modalHeight="modalHeight" :position="modalPosition"
                @close="showeditModal = false" :title="'Ask Update'">

                <div>
                    <form @submit.prevent="askEdit">

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Question</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="What is your name?" v-model="askStore"></textarea>
                        </div>
                        <div class="form-group mb-2">
                            <label for="exampleFormControlTextarea1">Answer</label>
                            <textarea class="form-control" placeholder="My name is jon a" id="exampleFormControlTextarea1"
                                rows="3" v-model="ans"></textarea>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-grad">Update</button>

                        </div>
                    </form>
                </div>
                <!-- Your modal content goes here -->
            </Modal>
            <!-- End Faq Section -->
        </DeshboardLayout>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    data() {
        return {
            editId: "",
            ask: "",
            askStore: "",
            ans: "",
            activeAsk: "",
            modalWidth: "col-11 col-md-6 bg-white rounded-4 top-0 ",
            showModal: false,
            showeditModal: false,
            modalHeight: "auto",
            modalPosition: "justify-content-center align-items-center", // Set the default position here, other options: top, right, bottom, left

        };
    },
    methods: {
        askdelete(id) {


            this.$setLoading(true);

            axios.delete(`api/ask.delete/${id}`)
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

        },
        askeditmodal(id) {

            const item = this.ask.find(item => item.id === id);


            this.askStore = item.ask,
                this.ans = item.ans
            this.editId = id
            this.showeditModal = true


        },
        askEdit() {

            this.showeditModal = false
            this.$setLoading(true);


            const id = this.editId
            const data = {
                ask: this.askStore,
                ans: this.ans,

            }


            axios.put(`api/ask.edit/${id}`, data)
                .then((response) => {
                    
                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });
                    const index = this.ask.findIndex(item => item.id === id);
                    if (index !== -1) {

                        this.ask[index].ask = this.askStore;
                        this.ask[index].ans = this.ans;


                        this.$set(this.ask, index, this.ask[index]);
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
        askCreate() {
            this.$setLoading(true);
            const data = {
                ask: this.askStore,
                ans: this.ans,

            }
            axios
                .post("/api/ask.store", data)
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
        },
        toggleActiveAsk(itemId) {
            if (this.activeAsk === itemId) {
                // If the clicked item is already the active item, set it to null
                this.activeAsk = null;
            } else {
                // Otherwise, set it to the clicked item's ID
                this.activeAsk = itemId;
            }
        },

        setup() { },
        showAns() { },
    },
    created() {
        axios
            .get("http://127.0.0.1:8000/api/ask")
            .then((response) => {
                this.ask = response.data.ask;
                console.log(this.ask);
            })
            .catch((error) => {
                this.$notify({
                    title: "Warning",
                    text: error.response.data.message + ".Reload this page",
                    type: "error",
                });
            });
        this.$setLoading(false);
    },
};
</script>
<style scoped></style>
  