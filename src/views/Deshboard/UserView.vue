<template>
    <div>
        <DeshboardLayout>

            <div class="content-wrapper" style="">
                <div class="page-header row justify-content-between mb-2">
                    <h3 class="col-12 col-md-6 page-title">
                        <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
                            <i class="bi bi-person-gear"></i>
                        </span>
                        User Manage
                    </h3>
                    <div class="col-12 col-md-6">
                        <div class="add-items d-flex justify-content-between">
                            <input type="text" class="form-control todo-list-input" placeholder="who want search..?">
                            <button class="add btn btn-gradient-primary "
                                id="add-task">Search..</button>
                        </div>
                    </div>

                </div>


                <div class="row">
                    <div class="col-12 grid-margin">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">User</h4>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>photo</th>


                                                <th>Email</th>
                                                <th>Vip</th>
                                                <th>Balance</th>
                                                <th>Frizen</th>
                                                <th>Reffer</th>
                                                <th>Use Reffer</th>
                                                <th>Date Created</th>

                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(user, index) in displayedItems" :key="index">
                                                <td>
                                                    {{index}}
                                                </td>
                                                <td>
                                                    {{user.name}}
                                                </td>
                                                <td>
                                                    <img src="" class="me-2" alt="image">
                                                </td>
                                                <td>  {{user.email}}</td>
                                                <td>  {{user.vip}}</td>
                                                <td>  {{user.main_balance}}</td>
                                                <td>  {{user.frozen_balance}}</td>
                                                <td>  {{user.my_reffer}}</td>
                                                <td>  {{user.use_reffer}}</td>

                                                <td>{{ user.created_at.substring(0, 10) }}</td>
                                                <td><div @click="userdelete" >delete</div> </td>
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
import axios from "axios";
import { useAuthUserStore } from "../../store/user";
 
export default {

    data() {
        return {
            alluser:'',

              // paginate
              currentPage: 1, // The current page number
            itemsPerPage: 10, // Number of items to display per page

        };
    },
    methods: {
        userdelete(){
            console.log('sasa'),
            axios
        .get("/api/user.delete/1")
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
   
    computed:{
        // Calculate the total number of pages based on the total number of items and itemsPerPage
        totalPages() {
            return Math.ceil(this.alluser.length / this.itemsPerPage);
        },
        // Get the items to display on the current page
        displayedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.alluser.slice(start, end);
        },
    },

   async created() {
          // auth user data +++++++++++++++++++++++++++++

    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.alluser = alluser;
    } else {
      // userStore.reSetAuthUser();
      this.alluser = await userStore.getAllUser();
    }
    console.log(this.alluser)
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
</style>
    