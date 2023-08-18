<script>
import { RouterLink, RouterView } from "vue-router";
import { logout } from "../midleware/auth.js";
export default {
  mounted() {
    document.addEventListener("touchend", this.handlePinchGesture);
  },
  beforeDestroy() {
    document.removeEventListener("touchend", this.handlePinchGesture);
  },
  methods: {
    handlePinchGesture(event) {
      if (event.touches.length === 2) {
        // Perform additional checks or logic here if needed
        location.reload();
      }
    },
  },
};
</script>
<template>

  <body
    class=" pb-5"

    style="background-color: #f0f2f5"
  >
  <!-- -->
      <!-- ======= Header ======= -->
  <div class="sticky2">
    <Header /> 
    </div>
    

    <main id="main " style="margin-top: 0px;">
      <slot />
      <a
      href="#"
      id="scroll-top"
      class="scroll-top align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
    </main>

    <!-- Scroll Top Button -->
    
    <Footer />
    <!-- <Loading /> -->
    <div v-if="this.$isLoading()" id="preloader">
      <Loading />
    </div>
    <br>

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
}

</style>
