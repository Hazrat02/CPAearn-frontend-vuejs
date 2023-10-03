<template>
  <div>
    <HomeLayout>
      <section id="hero" class="hero" style="background-color: #ffffff">
        <img
          src="./../assets/frontend/img/reffer2.png"
          alt=""
          data-aos="fade-in"
        />

        <div class="container">
          <div class="row">
            <div class="col-lg-10">
              <h2 data-aos="fade-up" data-aos-delay="100">Earn extra 2$</h2>
              <p data-aos="fade-up" data-aos-delay="200">
                When your friend buy our vip plan autometic refferal balance
                transfer your main balance.
              </p>
            </div>
            <div class="col-lg-5">
              <form
                action="#"
                class="sign-up-form d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <input
                  v-model="textToCopy"
                  readonly
                  type="text"
                  class="form-control"
                  disabled
                />
                <button
                  @click="copyText"
                  :disabled="isCopied"
                  class="btn btn-grad"
                >
                  <i :class="['bi', isCopied ? 'fa-check' : 'bi-files']"></i>
                  {{ buttonText }}
                  <!-- <i class="bi bi-files"></i> -->
                </button>
                <!-- <input type="submit" class="btn btn-grad" value="Copy" /> -->
              </form>
            </div>
          </div>
        </div>
      </section>
      <!-- End Hero Section -->

      <!-- Team Section - Home Page -->
      <section id="team" class="team">
        <!--  Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>
            Your latest 6 refferal friends.When balance tranfer in your main
            balance tranfer status will yes.
          </p>
        </div>
        <!-- End Section Title -->

        <div class="container">
          <div class="row gy-5">
            <div  v-for="item in refferUser"
                      :key="item.id"
                      :value="item.id"
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img v-if="item.profile" v-bind:src="item.profile" alt="profile" class="img-fluid" >
                <img v-else class="img-fluid"  src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=2000" alt="profile">
             
                
              </div>
              <div class="member-info text-center">
                <h4>{{ item.name }}</h4>

                <p><b>Balance :</b>{{item.main_balance}}$</p>
                <p v-if=" item.vip > '1'"><b >Transfer :</b  >Yes</p>
                <p v-else><b >Transfer :</b  >Not</p>
              </div>
            </div>
            <!-- End Team Member -->

          </div>
        </div>
      </section>
      <!-- End Team Section -->
      <!-- End Faq Section -->
    </HomeLayout>
  </div>
</template>

<script>
import { useAuthUserStore } from "./../store/user";
export default {
  data() {
    return {
      authUser:'',
      refferUser:'',
      textToCopy: "", // The text you want to copy
      isCopied: false, // Track the state of the button
      buttonText: "", // Initial button text
    };
  },
  methods: {
    copyText() {
      const textarea = document.createElement("textarea");
      textarea.value = this.textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      this.isCopied = true; // Set the button state to copied
      this.buttonText = "Copied"; // Change the button text

      // Reset the button state and text after a delay (optional)
      setTimeout(() => {
        this.isCopied = false;
        this.buttonText = "";
      }, 2000); // Change back to original text after 2 seconds (adjust as needed)
    },
  },
 async created() {
   
    const userStore = useAuthUserStore();


    if (userStore.authUser) {
        this.authUser = userStore.authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
      this.textToCopy=this.authUser.my_reffer;

    if (userStore.refferUser) {
      this.refferUser = userStore.refferUser;
    } else {
      // userStore.reSetAuthUser();
      this.refferUser = await userStore.getRefferUser();
    }

    this.$setLoading(false);
  },

  
};
</script>
<style scoped>
.img-fluid{

  height: 185px;
 border-radius: 50%;
  width: 185px;
  border: 5px solid white;
}
</style>