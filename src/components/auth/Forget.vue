<template>
  <body class="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">
    <!-- ======= Header ======= -->

    <main id="main">
      <!-- <i class="mobile-nav-toggle d-none bi bi-list"></i> -->
      <div>
        <AuthLayout>
          <template v-slot:bodytext>
            <p
              class="mb-4 opacity-60"
              style="color: hsl(219, 61%, 76%)"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Forget Your account.
            </p>
          </template>

          <div class="card-body px-4 py-5 px-md-5">
            <div style="z-index: 444444444444"></div>

            <h1 class="mb-4 mb-lg-4 text-center">Forget Now</h1>

            <form
              class="justify-content-center"
              action=""
              @submit.prevent="forget"
            >
              <!-- Email input -->
              <div v-if="showCode">
                <div class="form-outline mb-4">
                  <input
                    
                    placeholder="Enter Your Code"
                    v-model="userCode"
                    type="text"
                    id="userCode"
                    class="form-control"
                    required
                  />
                  <label class="form-label" for="userCode">Code</label>
                </div>

                <!-- Password input -->

                <!-- Submit button -->
                <div class="container container-fluid justify-content-center">
                  <button
                    type="button"
                    class="btn btn-primary d-block px-4 container-fluid mb-4"
                    @click="codeMatch"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div v-if="showEmail">
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
                  <label class="form-label" for="form3Example3"
                    >Email address</label
                  >
                </div>

                <!-- Password input -->

                <!-- Submit button -->
                <div class="container container-fluid justify-content-center">
                  <div
                    type="submit"
                    class="btn btn-primary d-block px-4 container-fluid mb-4"
                    @click="next"
                  >
                    Next
                  </div>
                </div>
              </div>
              <div v-if="showReset">
                <div class="form-outline mb-4">
                  <input
                    name="email"
                    placeholder="******"
                    v-model="password"
                    type="password"
                    id="password"
                    class="form-control"
                    required
                  />
                  <label class="form-label" for="resetPassword"
                    >New Password</label
                  >
                </div>
                <div class="form-outline mb-4">
                  <input
                    name="email"
                    placeholder="******"
                    v-model="password_confirmation"
                    type="password"
                    id="password_confirmation"
                    class="form-control"
                    required
                  />
                  <label class="form-label" for="password_confirmation"
                    >Confirmation New Password</label
                  >
                </div>

                <!-- Password input -->

                <!-- Submit button -->
                <div class="container container-fluid justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-primary d-block px-4 container-fluid mb-4"
                    
                  >
                    Forget
                  </button>
                </div>
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
    <a
      href="#"
      id="scroll-top"
      class="scroll-top d-none align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>

    <!-- Preloader -->
  </body>
  <!-- <template v-slot:bodytext ></template> -->
</template>

<script>
import axios from "axios";
import { login } from "../../midleware/auth.js";
import { useAuthUserStore } from "../../store/user";

// import { notify } from 'vue3-notify'
export default {
  data() {
    return {
      oldCode:'55555555555555534534434',
      userCode:'',
      showReset:false,
      showCode: false,
      showEmail: true,
      email: "",
      password: "",
      password_confirmation: "",
     
    };
  },

  created() {
    this.$setLoading(false);
  },

  methods: {
    codeMatch(){
      this.$setLoading(true);
      if (this.oldCode == this.userCode) {
        this.showReset = true
        this.showCode = false;
        this.showEmail = false;
      } else {
        
        this.$notify({
            title: "Warning",
            text: 'Code do not match!',
            type: "error",
          });
       
      }
      this.$setLoading(false);
    },
    showNotification() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
      });
    },
    async next() {
      this.$setLoading(true);
      
      const data = {
        email: this.email,
        sub:'Cpaearn Forget code',
        bodytext:'Your Cpaearn forget code is:',
        footertext:'Do not share our code anyone.It is very importent',
        btn:''
      };
      await axios
        .post("http://127.0.0.1:8000/api/auth/forgetcode", data)
        .then((response) => {
          this.showCode = true;
        this.showEmail = false;
          this.oldCode=response.data.code;
          console.log(this.oldCode)
          
        })
        .catch((error) => {
          this.showCode = false;
          this.showEmail = true;
          // Handle the error
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });
        this.$setLoading(false);
    },
    forget() {
      this.$setLoading(true);
      const data = {
        email:this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

      axios
        .post("http://127.0.0.1:8000/api/auth/forget", data)
        .then((response) => {
          this.$router.push('/login')
          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });
        })
        .catch((error) => {
          // Handle the error
          
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });
        this.$setLoading(false);
    },
  },
};
</script>
