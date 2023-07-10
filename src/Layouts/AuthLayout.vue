<script>
import { RouterLink, RouterView } from 'vue-router'


</script>
<template>


    <div>
      <Bgs/>
        <section class="overflow-hidden content-wrapper">
       


        <div class="container  px-4 py-5 px-md-5 text-center text-lg-start my-5">

            <div class="row gx-lg-5 align-items-center mb-5">
                <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10 ; height: 50vw;">
                    <h1 class="my-2 display-5 fw-bold ls-tight" style="color: black">
                        The best offer <br />
                        <span style="color: hsl(218, 81%, 75%);">for your business</span>
                    </h1>
                    <slot name="bodytext" />
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0 position-relative ">
                    

                    <div class="card bg-glass">
                        <div>
                            <div class="btn btn-secondary"><RouterLink to="/login">Login</RouterLink></div>
                        </div>
                        
                        <RouterLink to="/register">Register</RouterLink>

                        <slot />
                       

                    </div>
                </div>

            </div>

        </div>
    </section>
    </div>
</template>




<style>

.bg-glass {
    background-color: hsla(192, 100%, 99%, 0.267) !important;
    backdrop-filter: saturate(200%) blur(5px);
    background-color: black;

}
nav a.router-link-exact-active {
  color: var(--color-text);
  background-color: aqua;
}
</style>