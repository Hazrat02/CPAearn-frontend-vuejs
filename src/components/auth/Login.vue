<template>
  
  <body >

<!-- ======= Header ======= -->


      


<main id="main">
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
            <div class="form-outline mb-2">
            <div style="position: relative">
              <input
                name="password"
                placeholder="******"
                v-model="password"
                :type="passwordFieldType"
                id="password"
                class="form-control"
                required
              />

              <i
                style="position: absolute; top: 7%; right: 5%; font-size: 25px"
                class="bi "
                :class="icon"
                @click="togglePasswordVisibility"
              ></i>
            </div>

            
          </div>

            <div class="d-flex" style="justify-content: space-between">
              <label class="form-label" for="form3Example4">password</label>
              <router-link to="/forget" style="
                  color: cadetblue;
                  cursor: pointer;
                  text-decoration: underline;
                "
                >forget password
              </router-link>
              
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
              class="btn btn-grad d-block px-4 container-fluid mb-4"
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

<!-- Preloader -->


</body>
  <!-- <template v-slot:bodytext ></template> -->
</template>

<script>
import axios from 'axios';
import { login } from '../../midleware/auth.js';
import { useAuthUserStore } from '../../store/user';

// import { notify } from 'vue3-notify'
export default {
  
  data() {
    return {
   
      showicon: true,
      showPassword: false,
      email: "",
      password: "",
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    icon() {
      return this.showicon ? "bi-eye-slash-fill" : "bi-eye-fill";
    },
   
  },
  created(){
    this.$setLoading(false);
  },

  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.showicon = !this.showicon;

    },
    showNotification() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
      });
    },
    login() {
      this.$setLoading(true);
        const data = {
      email: this.email,
      password: this.password
    };

      axios
        .post("/api/auth/login",data)
        .then((response) => {
          console.log(response.data.user);
          login(response.data.authorisation.token);
          const userStore = useAuthUserStore();

          const user =response.data.authUser;
          userStore.setAuthUser(user);
          this.$setLoading(false);
    
          this.$router.push('/wallate')
          this.$notify({
            title: "message",
            text: 'User succesfully login',
            type: "success",
          });
        })
        .catch((error) => {
          // Handle the error
          this.$setLoading(false);
          this.$notify({
        title: "Error message",
        text: error.response.data.message,
        type:'error'
      });
        });
    },
  },
};
</script>
