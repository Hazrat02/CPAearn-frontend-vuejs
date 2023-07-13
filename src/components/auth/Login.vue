<template>
  
  <body class="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">

<!-- ======= Header ======= -->


      


<main id="main">
  <!-- <i class="mobile-nav-toggle d-none bi bi-list"></i> -->
  <div>
    <AuthLayout>
      <template v-slot:bodytext>
        <p class="mb-4 opacity-60" style="color: hsl(219, 61%, 76%)" data-aos="zoom-in" data-aos-delay="100">
          Log in your account and earn money from our international company
        </p>
      </template>

      <div class="card-body px-4 py-5 px-md-5">
        <div style="z-index: 444444444444"></div>

        <h1 class="mb-4 mb-lg-4 text-center">log in</h1>

        <form class="justify-content-center" action="">
          <!-- Email input -->

          <div class="form-outline mb-4">
            <input
              name="email"
              placeholder="Enter Your Email"
              v-model="email"
              type="email"
              id="form3Example3"
              class="form-control"
              required
            />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->

          <div class="form-outline mb-4">
            <input
              name="password"
              placeholder="******"
              type="password"
              id="form3Example4"
              class="form-control"
              v-model="password"
              required
            />

            <div class="d-flex" style="justify-content: space-between">
              <label class="form-label" for="form3Example4">password</label>
              <a
                href=""
                style="
                  color: cadetblue;
                  cursor: pointer;
                  text-decoration: underline;
                "
                >forget password</a
              >
            </div>
          </div>

          <!-- Checkbox -->
          <div class="form-check d-flex justify-content-center mb-4">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example33"
              required
            />
            <p><a href="">Read all team.</a>Uderested?</p>
          </div>

          <!-- Submit button -->
          <div class="container container-fluid justify-content-center">
            <button
              type="submit"
              class="btn btn-primary d-block px-4 container-fluid mb-4"
              @click.prevent="login"
            >
              log in
            </button>
          </div>

          <!-- Register buttons -->
          <div class="text-center">
            <p>or log in with:</p>
            <button
              type="button"
              class="btn btn-link btn-floating btn-outline-info mx-1"
            >
              <i class="fab fa-twitter"></i>
            </button>

            <a
              href=""
              type="button"
              class="btn btn-link btn-floating btn-outline-info mx-1"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              href=""
              type="button"
              class="btn btn-link btn-floating btn-outline-info mx-1"
            >
              <i class="fab fa-facebook"></i>
            </a>

            <a
              href=""
              type="button"
              class="btn btn-link btn-outline-secondary mx-1"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </form>
      </div>
    </AuthLayout>
 
  </div>

</main>

<!-- Scroll Top Button -->
<a href="#" id="scroll-top" class="scroll-top d-none align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<!-- Preloader -->


</body>
  <!-- <template v-slot:bodytext ></template> -->
</template>

<script>
import axios from 'axios';
import { login } from '../../midleware/auth.js';


// import { notify } from 'vue3-notify'
export default {
  
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    // animation() {
    //   return {
    //     /**
    //      * Animation function
    //      *
    //      * Runs before animating, so you can take the initial height, width, color, etc
    //      * @param  {HTMLElement}  element  The notification element
    //      */
    //     enter(element) {
    //       let height = element.clientHeight;
    //       return {
    //         // animates from 0px to "height"
    //         height: [height, 777],

    //         // animates from 0 to random opacity (in range between 0.5 and 1)
    //         opacity: [Math.random() * 0.5 + 0.5, 0],
    //       };
    //     },
    //     leave: {
    //       height: 0,
    //       opacity: 0,
    //     },
    //   };
    // },
  },

  methods: {
    showNotification() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
      });
    },
    login() {
        const data = {
      email: this.email,
      password: this.password
    };

      axios
        .post("http://127.0.0.1:8000/api/auth/login",data)
        .then((response) => {
          
          login(response.data.authorisation.token);
            
            // window.location.reload();
          // Handle the response data
          this.$router.push('/')
          this.$notify({
            title: "message",
            text: 'User succesfully login',
            type: "success",
          });
        })
        .catch(() => {
          // Handle the error
          
          this.$notify({
        title: "Error message",
        text: "Wrong email or password!",
        type:'error'
      });
        });
    },
  },
};
</script>

<style scoped>
  /* @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"); */
</style>
