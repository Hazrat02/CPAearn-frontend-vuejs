<template>
  <div>
    <AuthLayout>
      <template v-slot:bodytext>
        <p class="mb-4 opacity-60" style="color: hsl(218, 81%, 85%)">
          Register in your account and earn money from our international company
        </p>
      </template>

      <div class="card-body px-4 py-5 px-md-5">
        <h1 class="mb-4 mb-lg-4 text-center">Sing Up</h1>

        <form
          class="justify-content-center"
          method="POST"
          enctype="multipart/form-data" @submit.prevent="register"
        >
          <!-- Email input -->

          <div class="form-outline mb-2">
            <input
              name="name"
              placeholder="Enter Your Name"
              v-model="name"
              type="text"
              id="name"
              class="form-control"
              required
            />
            <div class="d-flex">
              <label class="form-label" for="name">Full Name</label>
            </div>
          </div>
          <div class="form-outline mb-2">
            <input
              name="email"
              placeholder="Enter Your Email"
              type="email"
              v-model="email"
              class="form-control"
              required
            />
            <div class="d-flex">
              <label
                class="form-label justify-content-start"
                for="form3Example3"
                >Email address</label
              >
            </div>
          </div>
          <div class="form-outline mb-2">
            <div style="position: relative">
              <input
                id="userCode"
                placeholder="Enter Your Code"
                type="text"
                v-model="userCode"
                class="form-control"
                required
              />

              <div
                v-if="sendcode"
                style="position: absolute; top: 20%; right: 5%; cursor: pointer"
                @click="sentCode"
              >
                sent code
              </div>
              <div
                v-if="resendcode"
                style="position: absolute; top: 20%; right: 5%; cursor: pointer"
                @click="sentCode"
              >
                Resent
              </div>
              <div
                v-if="countdown"
                style="position: absolute; top: 20%; right: 5%; cursor: pointer"
              >
                00:00:{{ countdown }}
              </div>
            </div>

            <div class="d-flex">
              <label class="form-label justify-content-start" for="userCode"
                >Code</label
              >
            </div>
          </div>

          <!-- Password input -->
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

            <div class="d-flex" style="justify-content: space-between">
              <label class="form-label" for="password">password</label>
            </div>
          </div>
          <div class="form-outline mb-2">
            <input
              name="password_confirmation"
              placeholder="******"
              :type="passwordFieldType"
              v-model="password_confirmation"
              class="form-control"
              required
            />

            <div class="d-flex">
              <label class="form-label" for="password_confirmation"
                >Retype password</label
              >
            </div>
          </div>
          <div class="text-center form-outline mb-2" aria-required="true">
            <label
              class="form-outline mb-2 text-center form-label"
              for="profile_photo_path"
            >
              <img
                style="width: 70px"
                class="rounded"
                src="data:image/png;base64,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"
                alt="fdf"
              />
            </label>

            <input
            id="profile_photo_path"
              style="display: none"
              type="file"
              onchange="profile"
              class="form-control"
            />
          </div>

          <!-- Checkbox -->
          <div class="form-check d-flex justify-content-center mb-4">
            <input
              class="form-check-input me-2"
              type="checkbox"
              id="form2Example33"
              required
            />
            <p><a href="">Read all team.</a>Uderested?</p>
          </div>
          <input type="hidden" name="role" value="1" />

          <!-- Submit button -->
          <div class="container container-fluid justify-content-center">
            <button
              
              type="submit"
              class="btn btn-primary d-block px-4 container-fluid mb-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  </div>

  <!-- <template v-slot:bodytext ></template> -->
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      authEmail:'',
      oldCode:'',
      passwordType: "password",
      sendcode: true,
      showicon: true,
      showPassword: false,
      resendcode: false,
      userCode: "",
      countdown: "",
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      profile: "",
     
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

  created() {
    this.$setLoading(false);
  },

  methods: {
    async sentCode() {
      (this.sendcode = false),
        (this.resendcode = false),
        (this.countdown = "60");
      this.startCountdown();

      const data = {
        email: this.email,
        sub:'Cpaearn registation code',
        bodytext:'Your Cpaearn registation code is:',
        footertext:'Do not share our code anyone.It is very importent',
        btn:''

      };
      await axios
        .post("/api/auth/forgetcode", data)
        .then((response) => {
         
          this.oldCode=response.data.code;
          this.authEmail=response.data.email
          console.log(this.oldCode)
          
        })
        .catch((error) => {
          
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: 'Server busy now.Please try later!',
            type: "error",
          });
        });
    },
    startCountdown() {
      if (this.countdown > "0") {
        setTimeout(() => {
          this.countdown--;
          this.startCountdown();
        }, 1000);
      } else {
        this.resendcode = true;
      }
    },
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
    register() {

      this.$setLoading(true);
      if (this.userCode = this.oldCode) {
        const data = {
         oldCode:this.oldCode,
         userCode:this.userCode,
        email: this.authEmail,
        password: this.password,
        name: this.name,
        password_confirmation: this.password_confirmation,
      };
      

      axios
        .post("/api/auth/register", data)
        .then((response) => {
          

          this.$router.push("/login");
          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });
      } else {
        this.$notify({
            title: "Error message",
            text: 'Code does not match!',
            type: "error",
          });
      }
      this.$setLoading(false);
     
    },
  },
};
</script>
