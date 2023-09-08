
<script>
import { RouterLink, RouterView } from "vue-router";
import isAuthenticated from "../midleware/auth";
import { logout } from "../midleware/auth";
import axios from "axios";

export default {
 
  data() {
    return {
      isAuthenticated: false,
      showSidebar:false,










      
     
      
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
            
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard"><span class="menu-title">Dashboard</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/user"><span class="menu-title">User Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/deshboard/work"><span class="menu-title">Work Manage</span>
                <i class="mdi mdi-home menu-icon"></i></RouterLink>
             
             
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span class="menu-title">Basic UI Elements</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                  <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/icons/mdi.html">
                <span class="menu-title">Icons</span>
                <i class="mdi mdi-contacts menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/forms/basic_elements.html">
                <span class="menu-title">Forms</span>
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/charts/chartjs.html">
                <span class="menu-title">Charts</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/tables/basic-table.html">
                <span class="menu-title">Tables</span>
                <i class="mdi mdi-table-large menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                <span class="menu-title">Sample Pages</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-medical-bag menu-icon"></i>
              </a>
              <div class="collapse" id="general-pages">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <a class="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                  <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
                  <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
                  <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                  <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item sidebar-actions">
              <span class="nav-link">
                <div class="border-bottom">
                  <h6 class="font-weight-normal mb-3">Projects</h6>
                </div>
                <button class="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>
                <div class="mt-4">
                  <div class="border-bottom">
                    <p class="text-secondary">Categories</p>
                  </div>
                  <ul class="gradient-bullet-list mt-4">
                    <li>Free</li>
                    <li>Pro</li>
                  </ul>
                </div>
              </span>
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
                <li v-if="isAuthenticated">
                  <div class="pe-auto">
                    <a class="pe" @click="logout">Logout</a>
                  </div>
                </li>
                <li v-if="!isAuthenticated">
                  <div class="pe-auto">
                    <router-link class="pe" to="/login">Login</router-link>
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
                  <img src="../assets/2895055.jpg" alt="profile">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">David Grey. H</span>
                  <span class="text-secondary text-small">Project Manager</span>
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
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span class="menu-title">Basic UI Elements</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                  <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/icons/mdi.html">
                <span class="menu-title">Icons</span>
                <i class="mdi mdi-contacts menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/forms/basic_elements.html">
                <span class="menu-title">Forms</span>
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/charts/chartjs.html">
                <span class="menu-title">Charts</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/tables/basic-table.html">
                <span class="menu-title">Tables</span>
                <i class="mdi mdi-table-large menu-icon"></i>
              </a>
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
