<template>
  <div>
    <HomeLayout>
      <section id="vip" class="vip">
        <!--  Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>vip</h2>
          <p>
            Our Premium Package is a specialized subscription plan designed to offer enhanced features and benefits for our valued users. By subscribing to the Premium Package, you gain access to exclusive tools and services that can amplify your investment experience and yield potential. Here are the key features of our Premium Package:


          </p>
        </div>
        <!-- End Section Title -->

        <div class="container" data-aos="zoom-in" data-aos-delay="100">
          <div class="row g-4">
            <div v-for="(item, index) in vip"
                  :key="index" class="col-lg-4" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <div class="vip-item">
                <h3>{{item.name}}</h3>
                <div class="icon">
                  <i class="bi" :class="item.icon"></i>
                </div>
                <h4><sup>$</sup>{{item.price}}<span> / {{ item.duration }} month</span></h4>
                <ul>
                  <li v-for="(li, index) in item.vipunlock"
                  :key="index" >
                    <i class="bi" :class="{
                        'bi-check':
                        li.type == '1',
                        'na bi-x':
                        li.type == '2',
                      }"></i>
                    <span>{{li.limit}}</span>
                  </li>
                  
                </ul>
                <div class="text-center">
                  <a href="#" class="buy-btn">Buy Now</a>
                </div>
              </div>
            </div>
            
          </div>
          
            <!-- End vip Item -->
        </div>
      </section>
      <!-- End vip Section -->
    </HomeLayout>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { vipStore } from "../store/vip";
export default {
  data() {
    return {
      vip:'',
      isLoading: true,
      cryptoData: {},
      settings: {
        itemsToShow: 1.5,
        snapAlign: "center",
      },
      analysis: [
        {
          time: "Today",
          earn: "10",
          change: "-2",
        },
        {
          time: "Monthly",
          earn: "101",
          change: "2",
        },
        {
          time: "Yearly",
          earn: "1000",
          change: "-2",
        },
      ],
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        400: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },

  async created() {
    // auth user data +++++++++++++++++++++++++++++

    const vipPlan = vipStore();
    const allVip = vipPlan.vip;

    if (allVip) {
      this.vip = allVip;
    } else {
      // userStore.reSetAuthUser();
      this.vip = await vipPlan.getVip();
    }

    

    this.$setLoading(false);
  },
};
</script>
<style scoped>
.carousel__item {
  width: 100%;

  font-size: 20px;
  display: flex;
  margin-bottom: 0px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
}


</style>
