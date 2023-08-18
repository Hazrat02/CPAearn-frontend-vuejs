<script>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <body id="header">
    <!-- ======= Header ======= -->

    <main id="main">
      <i class="mobile-nav-toggle d-none bi bi-list"></i>

      <div>
        <Bgs />
        <section class="overflow-hidden content-wrapper">
          <div
            class="container px-4 py-5 px-md-5 text-center text-lg-start my-5"
          >
            <div class="row gx-lg-5 align-items-center mb-5">
              <div
                class="col-lg-6 mb-5 mb-lg-0"
                style="z-index: 10; height: 50vw"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <h1
                  class="my-2 display-5 fw-bold ls-tight"
                  style="color: black"
                >
                  The best offer <br />
                  <span style="color: hsl(218, 81%, 75%)"
                    >for your business</span
                  >
                </h1>
                <slot name="bodytext" />
              </div>

              <div class="col-lg-6 position-relative">
                <div class="card bg-glass">
                  
                  <nav id="navmenu" class="navmenu bg-white py-2">
                    <ul class="d-flex justify-content-evenly ">
                      <li>
                        <RouterLink class="hovdiv" to="/">
                          <div>
                            <i class="bi bi-house-fill"></i>
                            <span class="spanhide">Home</span>
                          </div></RouterLink
                        >
                      </li>

                      <!-- <RouterLink to="/register">Register</RouterLink> -->
                      <li>
                        <RouterLink class="hovdiv" to="/register"
                          ><div>
                            <i class="bi bi-person-plus-fill"></i> 
                            <span class="spanhide"> Register</span>
                          </div></RouterLink
                        >
                      </li>
                      <li>
                        <RouterLink class="hovdiv" to="/login"
                          ><div>
                            <i class="bi bi-key-fill"></i>
                            <span class="spanhide"> Login</span>
                          </div></RouterLink
                        >
                      </li>
                    </ul>

                    <i class="mobile-nav-toggle d-none bi bi-list"></i>
                  </nav>

                  <slot />
                  <a
                    href="#"
                    id="scroll-top"
                    class="scroll-top d-none align-items-center justify-content-center"
                    ><i class="bi bi-arrow-up-short"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <div v-if="this.$isLoading()" id="preloader">
      <Loading />
    </div>
  </body>
</template>

<style>
.bg-glass {
  background-color: hsla(192, 100%, 99%, 0.267) !important;
  backdrop-filter: saturate(200%) blur(5px);
  background-color: black;
}
</style>
