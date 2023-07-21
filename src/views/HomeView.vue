<script>
import { logout } from "../midleware/auth.js";
import axios from "axios";
import TheWelcome from "../components/TheWelcome.vue";
import { useRouter } from "vue-router";
import auth from "../midleware/auth.js";
import CryptoPrice from "../components/Crypto/CryptoPrice.vue";

import SavingPlan from "../components/package/SavingPlan.vue";

export default {
  components: {
    TheWelcome,
    CryptoPrice,
    SavingPlan,
  },

  data() {
    return {
      banner: [
        {
          img: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          title: "30% discount now",
        },
        {
          img: "https://img.freepik.com/free-photo/smiling-young-man-filming-his-video-blog-episode-about-new-tech-devices-while-sitting-kitchen-table-with-laptop-showing-bunch-money-banknotes_171337-5530.jpg?w=900&t=st=1688490674~exp=1688491274~hmac=2ae6a48ea2c78660fb312e87a8accc5598782d0062f19f3940db925f2f862bef",
          title: "40% discount now",
        },
        {
          img: "https://e0.pxfuel.com/wallpapers/877/568/desktop-wallpaper-coin-money-bitcoin.jpg",
          title: "40% discount now",
        },
      ],
    };
  },

  methods: {
    logout() {
      logout(); // Change the authenticated value to false

      this.$router.push("/login");
      this.$notify({
        title: "message",
        text: "Your account logout!",
        type: "success",
      });
    },
  },
};
</script>

<template>
  <div>
    <HomeLayout>
      <main style="background-color: #f0f2f5">
        <div class="d-flex">
          <span>Notics!</span>
          <marquee
            behavior="scroll"
            direction="left"
            onmouseover="this.stop();"
            onmouseout="this.start();"
          >
            Wellcome in our company.you can deposit money any time but withdraw
            sunday and friday off.
          </marquee>
        </div>

        <div>
          <Carousel
            :autoplay="20000"
            :wrap-around="true"
            style="margin-top: -55px"
          >
            <Slide class="" v-for="slide in banner" :key="slide">
              <div
                :style="{
                  background:
                    'url(' + slide.img + ') no-repeat center center fixed',
                  backgroundSize: 'cover',
                }"
                class="carousel__item" data-aos="zoom-in-up"
              >
                <h1 style="color: #f0f2f5">{{ slide.title }}</h1>
                {{ slide.img }}
              </div>
            </Slide>

            <template #addons>
              <Pagination class="" />
            </template>
          </Carousel>
        </div>

        <CryptoPrice style="margin-top: -100px" class="" />

        <SavingPlan class="" />

        <!-- <button @click="logout">logout</button> -->
      </main>
    </HomeLayout>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

.carousel__item {
  min-height: 30rem;
  width: 100%;

  font-size: 20px;
  display: flex;
  margin-bottom: 0px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
}
</style>
