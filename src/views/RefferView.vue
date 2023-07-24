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
                  class="btn btn-primary"
                >
                  <i :class="['bi', isCopied ? 'fa-check' : 'bi-files']"></i>
                  {{ buttonText }}
                  <!-- <i class="bi bi-files"></i> -->
                </button>
                <!-- <input type="submit" class="btn btn-primary" value="Copy" /> -->
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
            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img
                  src="./../assets/frontend/img/team/team-1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <!-- <div class="social">
                  <a href="#"><i class="bi bi-twitter"></i></a>
                  <a href="#"><i class="bi bi-facebook"></i></a>
                  <a href="#"><i class="bi bi-instagram"></i></a>
                  <a href="#"><i class="bi bi-linkedin"></i></a>
                </div> -->
              </div>
              <div class="member-info text-center">
                <h4>Walter White</h4>

                <p><b>Balance :</b>10.5$</p>
                <p><b>Transfer :</b>Yes</p>
              </div>
            </div>
            <!-- End Team Member -->

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="member-img">
                <img
                  src="./../assets/frontend/img/team/team-2.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info text-center">
                <h4>Sarah Jhonson</h4>
                <p><b>Balance :</b>10.5$</p>
                <p><b>Transfer :</b>Yes</p>
              </div>
            </div>
            <!-- End Team Member -->

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="member-img">
                <img
                  src="./../assets/frontend/img/team/team-3.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info text-center">
                <h4>William Anderson</h4>
                <p><b>Balance :</b>10.5$</p>
                <p><b>Transfer :</b>Yes</p>
              </div>
            </div>
            <!-- End Team Member -->

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="member-img">
                <img
                  src="./../assets/frontend/img/team/team-4.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info text-center">
                <h4>Amanda Jepson</h4>
                <p><b>Balance :</b>10.5$</p>
                <p><b>Transfer :</b>Yes</p>
              </div>
            </div>
            <!-- End Team Member -->

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div class="member-img">
                <img
                  src="./../assets/frontend/img/team/team-5.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info text-center">
                <h4>Brian Doe</h4>
                <p><b>Balance :</b>10.5$</p>
                <p><b>Transfer :</b>Yes</p>
              </div>
            </div>
            <!-- End Team Member -->

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="member-img">
                <img
                  src="./../assets/frontend/img/team/team-6.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info text-center">
                <h4>Josepha Palas</h4>
                <p><b>Balance :</b>10.5$</p>
                <p><b>Transfer :</b>Yes</p>
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
export default {
  data() {
    return {
      textToCopy: "www.cpaearn.com/323294", // The text you want to copy
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
  created() {
    this.$setLoading(false);
    console.log(this.$isLoading);
  },
};
</script>
