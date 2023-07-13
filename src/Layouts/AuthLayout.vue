<script>
import { RouterLink, RouterView } from 'vue-router'


</script>
<template>

<body class="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">

<!-- ======= Header ======= -->


      


<main id="main">
  <i class="mobile-nav-toggle d-none bi bi-list"></i>
    
  <div id="main">
      <Bgs/>
        <section class="overflow-hidden content-wrapper">
       


        <div class="container  px-4 py-5 px-md-5 text-center text-lg-start my-5">

            <div class="row gx-lg-5 align-items-center mb-5">
                <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10 ; height: 50vw;" data-aos="zoom-in" data-aos-delay="100">
                    <h1 class="my-2 display-5 fw-bold ls-tight" style="color: black" >
                        The best offer <br />
                        <span style="color: hsl(218, 81%, 75%);">for your business</span>
                    </h1>
                    <slot  name="bodytext" />
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0 position-relative ">
                    

                    <div class="card bg-glass">
                        <div>
                            <div class="btn btn-secondary"><RouterLink to="/login">Login</RouterLink></div>
                            <div class="btn btn-secondary"><RouterLink to="/">Home</RouterLink></div>
                        </div>
                        
                        <RouterLink to="/register">Register</RouterLink>

                        <slot />
                       

                    </div>
                </div>

            </div>

        </div>
    </section>
    </div>

</main>

<!-- Scroll Top Button -->
<a href="#" id="scroll-top" class="scroll-top d-none align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<!-- Preloader -->
<!-- <div id="preloader">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div> -->


</body>


</template>




<style>

.bg-glass {
    background-color: hsla(192, 100%, 99%, 0.267) !important;
    backdrop-filter: saturate(200%) blur(5px);
    background-color: black;

}

</style>