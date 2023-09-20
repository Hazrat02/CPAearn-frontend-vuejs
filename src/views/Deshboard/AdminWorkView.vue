<template>
    <div>
        <DeshboardLayout>
            <div class="content-wrapper">

                <div class="page-header d-flex justify-content-between align-item-center mb-2">
                    <h3 class="page-title">
                        <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
                            <i class="bi bi-universal-access-circle"></i>
                        </span>
                        Work
                    </h3>

                    <div class="">

                        <button class="btn btn-gradient-primary" @click="showModal = true">+ Add a Work</button>

                    </div>

                </div>

                <div class="work">

                    <div class="container">
                        <div class="row align-items-xl-center gy-5">
                            <div class="col-xl-12">
                                <div class="row gy-4 icon-boxes">
                                    <div v-for="(item, index) in work" :key="index" style="" class="col-md-6 col-xl-4">


                                        <div class="icon-box mt-0" style="">
                                            <div class="d-flex justify-content-end">
                                                <div class="d-flex gap-2">

                                                    <i @click="workdelete(item.id)" class="bi bi-trash"
                                                        style="color: red;"></i>
                                                    <i @click="workeditmodal(item.id)" class="bi bi-pen"
                                                        style="color: rgb(10, 146, 101);"></i>
                                                </div>

                                            </div>
                                            <div>
                                                <i class="bi workicon" :class="item.icon"></i>
                                                <h3>{{ item.name }}</h3>

                                                <p>
                                                    {{ item.description }}
                                                </p>
                                            </div>


                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End About div -->
            </div>

            <Modal :showModal="showModal" :modalWidth="modalWidth" :modalHeight="modalHeight" :position="modalPosition"
                @close="showModal = false" :title="'Work Make'">
                <div class="col-12 my-3 card">
                    <div>
                        Selected Options: {{ selectedOptions }}
                    </div>
                    <form class="justify-content-center" @submit.prevent="WorkStore">
                        <!-- Email input -->

                        <div class="form-outline mb-2">
                            <input placeholder="News Read" v-model="name" type="text" id="name" class="form-control"
                                required />
                            <div class="d-flex">
                                <label class="form-label" for="name">Work Name</label>
                            </div>
                        </div>
                        <div class="form-outline mb-2">
                            <textarea placeholder="its not work without vpn" type="text" v-model="description"
                                class="form-control" required />
                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="description">Description</label>
                            </div>
                        </div>

                        <div class="form-outline mb-2">
                            <input placeholder="0.05" type="text" v-model="earn" class="form-control" required />
                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="form3Example3">Earn</label>
                            </div>
                        </div>
                        <div class="form-outline  mb-2">
                            <input placeholder="news" type="text" v-model="component" class="form-control" required />
                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="form3Example3">Component</label>
                            </div>
                        </div>
                        <div class="form-outline  mb-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>

                            </select>
                            <!-- <MultiSelect label="Select Options" :options="options"
                                v-model="selectedOptions"></MultiSelect> -->

                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="form3Example3">VIP</label>
                            </div>
                        </div>

                        <div class="form-outline  mb-2">
                            <input placeholder="bi-0-circle" type="text" v-model="icon" class="form-control" required />
                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="form3Example3">Icon</label>
                            </div>
                        </div>







                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-grad">+ Create</button>

                        </div>
                    </form>
                </div>
            </Modal>
            <Modal :showModal="showEditModal" :modalWidth="modalWidth" :modalHeight="modalHeight" :position="modalPosition"
                @close="showEditModal = false" :title="'Work Update'">
                <div class="col-12 my-3 card">
                    <div>
                        Selected Options: {{ selectedOptions }}
                    </div>
                    <form class="justify-content-center" @submit.prevent="workEdit">
                        <!-- Email input -->

                        <div class="form-outline mb-2">
                            <input placeholder="News Read" v-model="name" type="text" id="name" class="form-control"
                                required />
                            <div class="d-flex">
                                <label class="form-label" for="name">Work Name</label>
                            </div>
                        </div>
                        <div class="form-outline mb-2">
                            <textarea placeholder="its not work without vpn" type="text" v-model="description"
                                class="form-control" required />
                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="description">Description</label>
                            </div>
                        </div>

                        <div class="form-outline mb-2">
                            <input placeholder="0.05" type="text" v-model="earn" class="form-control" required />
                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="form3Example3">Earn</label>
                            </div>
                        </div>
                        <div class="form-outline  mb-2">
                            <input placeholder="news" type="text" v-model="component" class="form-control" required />
                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="form3Example3">Component</label>
                            </div>
                        </div>
                        <div class="form-outline  mb-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>

                            </select>
                            <!-- <MultiSelect label="Select Options" :options="options"
                                v-model="selectedOptions"></MultiSelect> -->

                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="form3Example3">VIP</label>
                            </div>
                        </div>

                        <div class="form-outline  mb-2">
                            <input placeholder="bi-0-circle" type="text" v-model="icon" class="form-control" required />
                            <div class="d-flex">
                                <label class="form-label justify-content-start" for="form3Example3">Icon</label>
                            </div>
                        </div>







                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-grad">Update</button>

                        </div>
                    </form>
                </div>
            </Modal>
        </DeshboardLayout>
    </div>
</template>
  
<script>

import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "../../midleware/auth";
import { vipStore } from "../../store/vip";
import { workStore } from "../../store/work";
import MultiSelect from "../../components/others/MultiSelect.vue"; // Adjust the path to the MultiSelect component
import axios from "axios";

export default {
    components: {
        MultiSelect,
    },
    data() {
        return {
            options: [
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
            ],
            showEditModal: false,
            editId: "",
            name: '',
            vip_id: '1',
            description: '',
            earn: '',
            icon: '',
            component: '',

            selectedOptions: [], // Initialize it as an empty ar
            work: [],
            authUser: "",
            vip: "",
            active: "",
            isLoading: true,
            cryptoData: {},
            showModal: false,
            modalHeight: "auto",
            modalPosition: "justify-content-center align-items-center", // Set the default position here, other options: top, right, bottom, left
            modalWidth: "col-11 col-md-6 bg-white rounded-4 top-0 ",
        };
    },

    methods: {
        workdelete(id) {


            this.$setLoading(true);
            console.log(id)
            axios.delete(`api/work.delete/${id}`)
                .then((response) => {



                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });
                    const works = workStore();
                    this.work = works.deletework(id);
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


        WorkStore() {
            this.$setLoading(true);
            const data = {
                name: this.name,

                vip_id: this.vip_id,
                description: this.description,
                earn: this.earn,
                icon: this.icon,
                component: this.component,
            };
            axios
                .post("/api/work.create", data)
                .then((response) => {
                    this.showModal = false


                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });

                    const works = workStore();
                    this.work = works.addWork(response.data.work);
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
        workeditmodal(id) {

            const item = this.work.find(item => item.id === id);
            this.name = item.name

            this.vip_id = item.vip_id

            this.description = item.description

            this.earn = item.earn
            this.component = item.component



            this.icon = item.icon
            this.editId = id

            this.showEditModal = true


        },
        workEdit() {

            this.showeditModal = false
            this.$setLoading(true);


            const id = this.editId
            const data = {
                name: this.name,
                description: this.description,
                earn: this.earn,
                vip_id: this.vip_id,
                component: this.component,
                icon: this.icon,

            }


            axios.put(`api/work.edit/${id}`, data)
                .then((response) => {

                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });
                    this.showEditModal = false
                    const index = this.work.findIndex(item => item.id === id);
                    if (index !== -1) {

                        this.work[index].name = this.name;
                        this.work[index].description = this.description;
                        this.work[index].earn = this.earn;
                        this.work[index].vip_id = this.vip_id;
                        this.work[index].icon = this.icon;
                        this.work[index].component = this.component;


                        this.$set(this.work, index, this.work[index]);
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

        // Multiselect(event) {
        //     console.log(event)
        // }
    },


    async created() {
        this.$setLoading(false);
        if (isAuthenticated() == true) {
            // auth user data +++++++++++++++++++++++++++++

            const userStore = useAuthUserStore();

            const authUser = userStore.authUser;

            if (authUser) {
                this.authUser = authUser;
            } else {
                // userStore.reSetAuthUser();
                this.authUser = await userStore.reSetAuthUser();
            }
            // worrk dataaaa------------------------------------------
            const works = workStore();
            const allwork = works.work;
            if (allwork) {
                this.work = allwork;
            } else {
                // userStore.reSetAuthUser();
                this.work = await works.getWork();
            }

            console.log(this.work)
        } else {
            this.authUser = "";
            this.work = "";
        }

        console.log(this.work);
        // auth user data +++++++++++++++++++++++++++++

        const vipPlan = vipStore();
        const allVip = vipPlan.vip;

        if (allVip) {
            this.vip = allVip;
        } else {
            // userStore.reSetAuthUser();
            this.vip = await vipPlan.getVip();
        }

        this.$setLoading(false);
    },

};
</script>
  
<style scoped>
a {
    color: black !important;
    text-decoration: none;
    transition: 0.3s;
}

a:hover {
    color: rgb(1, 9, 17) !important;
    text-decoration: none;
}
</style>
  