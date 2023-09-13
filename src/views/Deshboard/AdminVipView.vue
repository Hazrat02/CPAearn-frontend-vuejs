<template>
  <div>

    <DeshboardLayout>
      <div class="content-wrapper">

        <div class="page-header d-flex justify-content-between align-item-center mb-2">
          <h3 class="page-title">
            <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
              <i class="bi bi-rocket-fill"></i>
            </span>
            VIP
          </h3>

          <div class="">

            <button class="btn btn-gradient-primary" @click="showModal = true">+ Add a VIP</button>

          </div>

        </div>
        <section class="vip content-wrapper">

          <!--  Section Title -->
          <div class="container section-title">
            <h2>vip</h2>
            <p>
              Our Premium Package is a specialized subscription plan designed to
              offer enhanced features and benefits for our valued users. By
              subscribing to the Premium Package, you gain access to exclusive
              tools and services that can amplify your investment experience and
              yield potential. Here are the key features of our Premium Package:
            </p>
          </div>
          <!-- End Section Title -->
        
          <div class="container">
            <div class="row g-4">
              <div v-for="(item, index) in vip" :key="index" class="col-lg-4 " data-aos="flip-right"
                data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                
                <div class="vip-item">
                  <div class="d-flex justify-content-end">
                    <div class="gap-5">
                      <i @click="toggleDropdown" class="bi bi-building-add" ></i>
                    <i @click="toggleDropdown" class="bi bi-trash" ></i>
                    <i @click="toggleDropdown" class="bi bi-pen" ></i>
                    </div>
                    
                  </div>
                 
                    <h3>{{ item.name }}</h3>
                    
    
          
                  <div class="icon">
                    <i class="bi" :class="item.icon"></i>
                  </div>
                  <h4>
                    <sup>$</sup>{{ item.price
                    }}<span> / {{ item.duration }} month</span>
                  </h4>
                  <ul>
                    <li v-for="(li, index) in item.vipunlock" :key="index">
                      <i class="bi" :class="{
                        'bi-check': li.type == '1',
                        'na bi-x': li.type == '2',
                      }"></i>
                      <span>{{ li.limit }}</span>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            <!-- End vip Item -->
          </div>
        </section>
      </div>
      <Modal
          :showModal="showModal"
          :modalWidth="modalWidth"
          :modalHeight="modalHeight"
          :position="modalPosition"
          @close="showModal = false"
          :title="'Vip Make'"
        >
        <div class="col-12 my-3 card">
        
                        <form class="justify-content-center" method="POST" enctype="multipart/form-data"
                            @submit.prevent="vipCreate">
                            <!-- Email input -->

                            <div class="form-outline mb-2">
                                <input  placeholder="Free Plan" v-model="name" type="text" id="name"
                                    class="form-control" required />
                                <div class="d-flex">
                                    <label class="form-label" for="name">Plan Name</label>
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
                                <input  placeholder="40" type="text" v-model="price"
                                    class="form-control" required />
                                <div class="d-flex">
                                    <label class="form-label justify-content-start" for="form3Example3">Price <span>$</span></label>
                                </div>
                            </div>
                            <div class="form-outline mb-2">
                                <input placeholder="5" type="text" v-model="task"
                                    class="form-control" required />
                                <div class="d-flex">
                                    <label class="form-label justify-content-start" for="form3Example3">Task</label>
                                </div>
                            </div>
                           <div class="row justify-content-between">
                            <div class="form-outline col-12 col-md-6 mb-2">
                                <input placeholder="bi-0-circle" type="text" v-model="icon"
                                    class="form-control" required />
                                <div class="d-flex">
                                    <label class="form-label justify-content-start" for="form3Example3">Icon</label>
                                </div>
                            </div>
                            <div class="form-outline col-12 col-md-6 mb-2">
                                <input placeholder="12" type="text" v-model="duration"
                                    class="form-control" required />
                                <div class="d-flex">
                                    <label class="form-label justify-content-start" for="form3Example3">Duration</label>
                                </div>
                            </div>
                           
                           </div>
                            

                          
                            

                            <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-grad">+ Create</button>
                    
                </div>
                        </form>
                    </div>
          <!-- Your modal content goes here -->
        </Modal>
      <!-- End vip Section -->
    </DeshboardLayout>
  </div>
</template>

<script>

import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "../../midleware/auth";
import { vipStore } from "../../store/vip";
import axios from "axios";
export default {
  data() {
    return {
         isOpen: false,
        selectedOption: "all", // Initial selected option
        filterOptions: ["all", "pending", "rejected","success"], // Dropdown options




        name:'',
        description:'',
        price:'',
        task:'',
        duration:'',
        icon:'',
      showModal: false,
      modalHeight: "auto",
      modalPosition: "justify-content-center align-items-center", // Set the default position here, other options: top, right, bottom, left
      modalWidth: "col-11 col-md-6 bg-white rounded-4 top-0 ",
      authUser: "",
      vip: "",
      active: '',
      isLoading: true,
      cryptoData: {},
      
    };
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
  vipCreate() {
    this.$setLoading(true);
    const data = {
      name:this.name,
        description:this.description,
        price:this.price,
        task:this.task,
        duration:this.duration,
        icon:this.icon,
    }
    axios
        .post("/api/vip.store", data)
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
    async buyNow(item) {
      this.$setLoading(true);
      if (isAuthenticated() === false) {
        this.$router.push("login");

        this.$notify({
          title: "Error message",
          text: "You Need Login First!",
          type: "error",
        });
      } else {

        if (this.authUser.main_balance < item.price) {
          this.$router.push("wallate");
          this.$notify({
            title: "Error message",
            text: "You haven't required balance.Deposit now!",
            type: "error",
          });
        } else {
          const data = {
            vip: item.id,
            main_balance: this.authUser.main_balance - item.price,
          };
          axios
            .post("http://127.0.0.1:8000/api/useredit", data)
            .then((response) => {

              userStore.setAuthUser(response.data)
              this.$router.push('earning')
              this.$notify({
                title: "Success",
                text: "Package activated!",
                type: "status",
              });
              console.log(response.data);
            })
            .catch((error) => {
              this.$notify({
                title: "Warning",
                text: error.response.data.message + ".Reload this page",
                type: "error",
              });
            });
        }
      }

      this.$setLoading(false);
    },
  },

  async created() {

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

    } else {
      this.authUser = '';
    }
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
.carousel__item {
  width: 100%;

  font-size: 20px;
  display: flex;
  margin-bottom: 0px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
}

.active2 {
  background: #d6d3d3 !important;
}

.activeb {
  background: #8b7e7e !important;
}
</style>
