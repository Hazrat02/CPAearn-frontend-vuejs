<template>
  <div>
    <HomeLayout>
      <div>
        <div class="row mb-0 pb-0">
          <div class="col-md-4">
            <section id="vip p-0 m-0" class="vip">
              <div class="container" data-aos="zoom-in" data-aos-delay="100">
                <div class="row">
                  <div
                    
                    class=""
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <div class="vip-item">
                      <h3>Your Free Plan</h3>
                      <div class="icon">
                        <i class="bi bi-box"></i>
                      </div>
                      <h4><sup>$</sup>0<span> / month</span></h4>
                      <ul>
                        <li>
                          <i class="bi bi-check"></i>
                          <span>Unlock News Read</span>
                        </li>
                        <li>
                          <i class="bi bi-check"></i>
                          <span>Unlock Banner Ads</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="col-md-8 mb-0 pb-0">
            <canvas ref="chartCanvas" width="400" height="200"></canvas>
          </div>
        </div>
        <hr />
        <div id="about" class="about mt-2">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row align-items-xl-center gy-5">
              <div class="col-xl-12">
                <div class="row gy-4 icon-boxes">
                  <div v-for="(item, index) in work"
                    :key="index"
                    style="height: 300px"
                    class="col-md-6 col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <router-link :to="`/work/${item.component}`">
                      <div class="icon-box mt-0" style="height: 300px">
                        <div class="d-flex justify-content-end">0/5</div>

                        <i class="bi " :class="item.icon"></i>
                        <h3>{{item.name}}</h3>

                        <p>
                          {{item.discribtion}}
                        </p>
                      </div>
                    </router-link>
                  </div>
                  <div
                    style="height: 300px"
                    class="col-md-6 col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div class="icon-box" style="height: 300px">
                      <i class="bi bi-code-slash"></i>
                      <h3>Web Design</h3>
                      <p>
                        Magni repellendus vel ullam hic officia accusantium ipsa
                        dolor omnis dolor voluptatem
                      </p>
                    </div>
                  </div>
                  <div
                    style="height: 300px"
                    class="col-md-6 col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div class="icon-box" style="height: 300px">
                      <i class="bi bi-collection-play"></i>
                      <h3>Video Ads</h3>
                      <p>
                        Magni repellendus vel ullam hic officia accusantium ipsa
                        dolor omnis dolor voluptatem
                      </p>
                    </div>
                  </div>

                  <div
                    style="height: 300px"
                    class="col-md-6 col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div class="icon-box">
                      <i class="bi bi-envelope-check"></i>
                      <h3>Mail Sales</h3>
                      <p>
                        Autem saepe animi et aut aspernatur culpa facere. Rerum
                        saepe rerum voluptates quia
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 col-xl-4 height"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div class="icon-box">
                      <i class="bi bi-file-richtext"></i>
                      <h3>Banner Ads</h3>
                      <p>
                        Omnis perferendis molestias culpa sed. Recusandae quas
                        possimus. Quod consequatur corrupti
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 col-xl-4 height"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div class="icon-box">
                      <i class="bi bi-clipboard-data"></i>
                      <h3>Data Entry</h3>
                      <p>
                        Sint et dolor voluptas minus possimus nostrum.
                        Reiciendis commodi eligendi omnis quideme lorenda
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-xl-4 height"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div class="icon-box">
                      <i class="bi bi-graph-up-arrow"></i>
                      <h3>1xBet</h3>
                      <p>
                        Sint et dolor voluptas minus possimus nostrum.
                        Reiciendis commodi eligendi omnis quideme lorenda
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-xl-4 height"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div class="icon-box">
                      <i class="bi bi-megaphone"></i>
                      <h3>Social Promote</h3>
                      <p>
                        Sint et dolor voluptas minus possimus nostrum.
                        Reiciendis commodi eligendi omnis quideme lorenda
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-xl-4 height"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div class="icon-box">
                      <i class="bi bi-graph-up-arrow"></i>
                      <h3>Delares sapiente</h3>
                      <p>
                        Sint et dolor voluptas minus possimus nostrum.
                        Reiciendis commodi eligendi omnis quideme lorenda
                      </p>
                    </div>
                  </div>
                  <!-- End Icon Box -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End About div -->
      </div>
    </HomeLayout>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { useAuthUserStore } from "../store/user";
import isAuthenticated from "../midleware/auth";
import { vipStore } from "../store/vip";
import { workStore } from "../store/work";
export default {
  data() {
    return {
      work: [],
      authUser: "",
      vip: "",
      active: "",
      isLoading: true,
      cryptoData: {},
    };
  },
  mounted() {
    const ctx = this.$refs.chartCanvas.getContext("2d");
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Day 1",
          "Day 2",
          "Day 3",
          "Day 4",
          "Day 5",
          "Day 6",
          "day7",
          "Day 1",
          "Day 2",
          "Day 3",
          "Day 4",
          "Day 5",
          "Day 6",
          "day7",
        ],
        datasets: [
          {
            label: "Dataset",
            data: [10, 5, 20, 10, 25, 15, 24, 10, 5, 20, 10, 25, 15, 24],
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            pointStyle: "circle",
            pointRadius: 10,
            pointHoverRadius: 15,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: (ctx) =>
              "Point Style: " + ctx.chart.data.datasets[0].pointStyle,
          },
        },
      },
    });

    this.$setLoading(false);
  },
  beforeDestroy() {
    // Cleanup chart before component is destroyed
    if (this.chart) {
      this.chart.destroy();
    }
  },
  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();

      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
      // worrk dataaaa------------------------------------------
      const works = workStore();
      const allwork = works.work;
      if (allwork) {
        this.work = allwork;
      } else {
        // userStore.reSetAuthUser();
        this.work = await works.getWork();
      }
    } else {
      this.authUser = "";
      this.work = "";
    }

    console.log(this.work);
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
a {
  color: black !important;
  text-decoration: none;
  transition: 0.3s;
}
a:hover {
  color: rgb(1, 9, 17) !important;
  text-decoration: none;
}
</style>
