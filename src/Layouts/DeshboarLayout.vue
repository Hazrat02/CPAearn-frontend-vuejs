
<script>
import { RouterLink, RouterView } from "vue-router";
import { logout } from "../midleware/auth.js";
export default {
 
  data() {
    return {
      showSidebar:false
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
    sidebar(){
      if (this.showSidebar == true) {
        this.showSidebar = false
      } else {
        this.showSidebar = true
      }
      
    }
  },
  created(){
    console.log(this.$route.path)
  }
};
</script>

<template>

<body>
    <div class="container-scroller">
      <nav class="sticky2">
        <Header /> 
      </nav>

     
      <button class="btn btn-gradient-primary d-none" @click="sidebar">
        show
      </button>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper ">
        <!-- partial:partials/_sidebar.html -->
        
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
   
    <!-- <Loading /> -->
    <div v-if="this.$isLoading()" id="preloader">
      <Loading />
    </div>


  </body>



</template>

<style >
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
}


</style>
