<script>

import { RouterLink, RouterView } from "vue-router";export default {
  mounted() {
    document.addEventListener('touchend', this.handlePinchGesture);
  },
  beforeDestroy() {
    document.removeEventListener('touchend', this.handlePinchGesture);
  },
  methods: {
    handlePinchGesture(event) {
      if (event.touches.length === 2) {
        // Perform additional checks or logic here if needed
        location.reload();
      }
    },
  },
  }
</script>
<template>
  <body
    class=""
    data-bs-spy="scroll"
    data-bs-target="#navmenu"
    style="background-color: #f0f2f5"
  >
    <!-- ======= Header ======= -->
    <div class="sticky-top">
      <Header />
    </div>

    <main id="main">
      <slot />
    </main>

    <!-- Scroll Top Button -->
    <a
      href="#"
      id="scroll-top"
      class="scroll-top  align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
    <Footer />
        <!-- <Loading /> -->
        <div v-if="this.$isLoading()" id="preloader">
    <Loading />
  </div>
  </body>
</template>

<style>
/* .bg-glass {
  background-color: hsla(192, 100%, 99%, 0.267) !important;
  backdrop-filter: saturate(200%) blur(5px);
  background-color: black;
} */

</style>
