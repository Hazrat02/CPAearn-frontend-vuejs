
<script>
import { RouterLink, RouterView } from "vue-router";
import isAuthenticated from "../midleware/auth";
import { logout } from "../midleware/auth";
import axios from "axios";
import { useAuthUserStore } from "../store/user";

export default {
 
  data() {
    return {
      isAuthenticated: false,
      showSidebar:false,
      authUser:'',










      
     
      
      showModal: false,
      showWithdrawModal: false,
      modalWidth: "col-11 bg-white top-0",
      modalHeight: "auto",
      modalPosition: "justify-content-start", // Set the default position here, other options: top, right, bottom, left
    
    };
  },
  
  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    sideShow() {
      if (this.showSidebar == true) {
       return 'sidebar-offcanvas.active'
      } else {
        return 'sidebar-offcanvas'
      }
    },
   
  },
  async created(){
    
    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }
    if (this.authUser.role != '0') {
      
          this.$notify({
            title: "Error",
            text: 'You are not Admin',
            type: "error",
          });

          // Change the authenticated value to false

          this.$router.push("/");
    }
    


  },
 
  methods: {
    logout() {
      this.$setLoading(true);
      logout();
      axios
        .post("api/auth/logout")
        .then((response) => {
          
          this.$setLoading(false);
          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });

          // Change the authenticated value to false

          this.$router.push("/login");
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
    sidebar(){
      if (this.showSidebar == true) {
        this.showSidebar = false
      } else {
        this.showSidebar = true
      }
      
    }
  }}
</script>

<template>

<body>
  <div>
    <Modal
          :showModal="showSidebar"
          :modalWidth="modalWidth"
          :modalHeight="modalHeight"
          :position="modalPosition"
          @close="showSidebar = false"
          :title="'bal'"
        >
          <div  class="col-12 my-3">
            <nav class="sidebar">
        <!-- v-if="this.$router"  -->
        <ul class="nav" >
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="nav-profile-image">
                  <img v-if="authUser.profile" v-bind:src="authUser.profile" alt="profile">
                  <img v-else src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="profile">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">{{this.authUser.name}}</span>
                  <span class="text-secondary text-small">Admin</span>
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
              
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard"><span class="menu-title">Dashboard</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item ">
              <RouterLink class="nav-link" to="/deshboard/user">
                <span class="menu-title">User Manage</span>
                <i class="bi bi-person-gear"></i>
              </RouterLink>
             
             
            </li>
            <li class="nav-item ">
              <RouterLink class="nav-link" to="/deshboard/vip">
                <span class="menu-title">Vip Manage</span>
                
              </RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/work"><span class="menu-title">Work Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/ask"><span class="menu-title">Ask Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/transaction"><span class="menu-title">Transaction Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/payment"><span class="menu-title">Payment Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            
          </ul>
        </nav>
          </div>
        </Modal>
  </div>
    <div class="container-scroller">
      <nav class="sticky2">
        <header id="header" class="header">
    <div class="container-fluid row justify-content-between ">
      <div class="d-none d-md-block  col-md-3">
        <RouterLink to="/" class="">
          
          <h1>CPAearn</h1>
        </RouterLink>
      </div>
 
      <!-- justify-content-lg-end justify-content-md-between -->
      <!-- Nav Menu -->
      <div class="col-md-9 col-12 d-md-flex justify-content-md-end">
        <nav id="navmenu" class="navmenu ">
          <ul class="ul d-flex justify-content-between">
            <li>
              <RouterLink class="hovdiv" to="/">
                <div>
                  <i class="bi bi-house-fill"></i>
                  <span class="spanhide"> Home</span>
                </div></RouterLink
              >
            </li>

            <!-- <RouterLink to="/register">Register</RouterLink> -->
            <li>
              <RouterLink class="hovdiv" to="/helpcenter"
                ><div>
                  <i class="bi bi-headset"></i>
                  <span class="spanhide"> Services</span>
                </div></RouterLink
              >
            </li>
            <li>
              <RouterLink class="hovdiv" to="/wallate"
                ><div>
                  <i class="bi bi-wallet2"></i>
                  <span class="spanhide"> Wallate</span>
                </div></RouterLink
              >
            </li>
            <li>
              <RouterLink class="hovdiv " to="/deshboard" style="color: white;
  /* font-size: 20px; */
  background-color:  #71bdf093;
  border-radius: 6px;"
                ><div>
                  <i class="bi bi-gear-wide-connected"></i>
                  <span class="spanhide"> Deshboard</span>
                </div></RouterLink
              >
            </li>
            <li>
              <RouterLink class="hovdiv" to="/vip">
                <div>
                  <i class="bi bi-rocket-fill"></i>
                  <span class="spanhide"> Vip</span>
                </div></RouterLink
              >
            </li>
            <li class=""  @click="showSidebar = true">
              <i class="mobile-nav-toggle d-xl-none d-md-none bi bi-list"></i>
            </li>
            <li>
              <RouterLink class="hovdiv" to="/earning"
                ><div>
                  <i class="bi bi-cash-coin"></i>
                  <span class="spanhide"> Earn</span>
                </div></RouterLink
              >
            </li>
            <li class="">
              <RouterLink class="hovdiv" to="/contact"
                ><div>
                  <i class="bi bi-wechat"></i>
                  <span class="spanhide"> Contact</span>
                </div></RouterLink
              >
            </li>
            

            <li class="dropdown has-dropdown d-none d-md-block">
              <a><span>More</span> <i class="bi bi-chevron-down"></i></a>
              <ul class="dd-box-shadow">
                <li>
                  <RouterLink to="/reffer"
                    ><div><span class="">Reffer</span></div></RouterLink
                  >
                </li>
                <li >
                  <div class="pe-auto">
                    <a class="pe" @click="logout">Logout</a>
                  </div>
                </li>
               
              </ul>
              <i class="mobile-nav-toggle d-none bi bi-list"></i>
            </li>
          </ul>

        </nav>
      </div>
     

      <!-- End Nav Menu -->
    </div>
  </header>
  
      </nav>

     
      <!-- partial -->
      <div class="container-fluid page-body-wrapper ">
        <!-- partial:partials/_sidebar.html -->
        <nav class="sidebar  d-none d-md-block" :class="sideShow" id="sidebar" style="height: 100vh;color: rgb(195, 255, 235);">
        <!-- v-if="this.$router"  -->
          <ul class="nav" >
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="nav-profile-image">
                  <img v-if="authUser.profile" v-bind:src="authUser.profile" alt="profile">
                  <img v-else src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="profile">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">{{this.authUser.name}}</span>
                  <span class="text-secondary text-small">Admin</span>
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
              
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard"><span class="menu-title">Dashboard</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item ">
              <RouterLink class="nav-link" to="/deshboard/user">
                <span class="menu-title">User Manage</span>
                <i class="bi bi-person-gear"></i>
              </RouterLink>
             
             
            </li>
            <li class="nav-item ">
              <RouterLink class="nav-link" to="/deshboard/vip">
                <span class="menu-title">Vip Manage</span>
                
              </RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/work"><span class="menu-title">Work Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/ask"><span class="menu-title">Ask Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/transaction"><span class="menu-title">Transaction Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/payment"><span class="menu-title">Payment Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            
          </ul>
        </nav>
        <!-- partial -->
        <div class="main-panel">
          
          <slot />
          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <footer class="footer">
            
      <Footer />
          </footer>
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
      <!-- Scroll Top Button -->
      <a
      href="#"
      id="scroll-top"
      class="scroll-top align-items-center justify-content-center d-none"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
    <!-- <Loading /> -->
    <div v-if="this.$isLoading()" id="preloader">
      <Loading />
    </div>


  </body>



</template>

<style scoped>
.sticky2 {
  position: sticky;
  top: 0;
  z-index: 999; /* Use an appropriate z-index to ensure it appears above other content */
}



@media (max-width: 767px) {
  .sticky2 {
    width: 100vw;
    position: fixed;
    bottom: 0;
    top: initial; /* Reset top to default */
   
  }
  .nav-link{
   
    display: flex;
    justify-content: space-between;
  }
}



</style>
