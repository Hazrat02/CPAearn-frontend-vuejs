<template>
  <div>
    <HomeLayout>
      <div style="position: relative; margin-bottom: 100px" class="">
        <div
          class=""
          style="
            background-image: url('https://wallpaperaccess.com/full/2895055.jpg');

            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          "
        >
          <div
            style="padding-bottom: 80px"
            class="row container"
            data-aos="fade-down"
          >
            <div
              class="row justify-content-between pt-3 align-item-center col-12 col-md-8"
            >
              <div class="col-md-12 col-8 row justify-content-evenly">
                <div class="col-md-4 col-12 mb-3">
                  <div><i class="bi bi-wallet2"></i> Main Balance</div>
                  <div>
                    <h3 class="mb-0">
                      0.00000102<i class="bi bi-currency-bitcoin"></i>
                    </h3>
                  </div>
                  <div>= 1.4$</div>
                </div>
                <div class="col-md-4 col-12">
                  <div>
                    <i class="bi bi-database-fill-lock"></i> Frozen Balence
                  </div>
                  <div>
                    <h3 class="mb-0">
                      0.0000002<i class="bi bi-currency-bitcoin"></i>
                    </h3>
                  </div>
                  <div>= 00.40$</div>
                </div>
              </div>

              <div class="col-3 col-md-12">
                <div class="col-md-12 ml-5 d-flex justify-content-center">
                  <canvas ref="chartCanvas"></canvas>
                </div>
              </div>
            </div>
            <div style="align-items: center" class="col-md-4 col-12 mt-3 row">
              <div class="d-flex justify-content-evenly">
                <button class="btn btn-outline-primary">Withdraw</button>
                <button class="btn btn-outline-primary">Deposit</button>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            border-radius: 20px;

            position: absolute;
            top: 80%;

            display: block;
            width: 80%;
            left: 10%;
            right: 10%;
            justify-content: center;
          "
        >
          <div class="" data-aos="fade-left">
            <Carousel
              v-bind="settings"
              :breakpoints="breakpoints"
              style="margin-top: -55px"
            >
              <Slide class="" v-for="slide in analysis" :key="slide">
                <div class="carousel__item">
                  <!-- Revenue Card -->
                  <div class="">
                    <div
                      style="
                        border-top-left-radius: 40px;
                        border-top-right-radius: 40px;
                        border: solid #f0f2f5 10px;
                      "
                      class="card info-card revenue-card"
                    >
                      <div class="card-body">
                        <h5 class="card-title">
                          Revenue <span>| {{ slide.time }}</span>
                        </h5>

                        <div class="d-flex align-items-center">
                          <div
                            class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                          ></div>
                          <div class="ps-3">
                            <h6>${{ slide.earn }}</h6>
                            <span class="text-success small pt-1 fw-bold"
                              ><i class="bi bi-bar-chart-line"></i> 8%</span
                            >
                            <span class="text-muted small pt-2 ps-1"
                              >increase</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Revenue Card -->
                </div>
              </Slide>
              <template #addons>
                <Pagination class="d-xl-none" style="margin-top: -20px" />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
      <hr />

      <div class="" data-aos="fade-right">
        <h5 class="card-title"><i class="bi bi-receipt"></i> Recent TRX</h5>
        <div class="">
          <div class="overflow-auto py-3" style="background: #9c9c9c1a">
            <table class="table-borderless datatable mt-2 container">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Method</th>
                  <th>W/D</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><i class="bi bi-arrow-down-square"></i></th>
                  <td>Bitcoin</td>
                  <td>Deposit</td>
                  <td>20/04/23</td>
                  <td>$64</td>
                  <td>
                    <span class="badge bg-success">Approved</span>
                  </td>
                </tr>
                <tr>
                  <th><i class="bi bi-arrow-up-square"></i></th>
                  <td>Tron</td>
                  <td>Withdraw</td>
                  <td>20/04/23</td>
                  <td>$6</td>
                  <td>
                    <span class="badge bg-danger">Rejected</span>
                  </td>
                </tr>
                <tr>
                  <th><i class="bi bi-arrow-down-square"></i></th>
                  <td>Bitcoin</td>
                  <td>Deposit</td>
                  <td>20/04/23</td>
                  <td>$64</td>
                  <td>
                    <span class="badge bg-success">Approved</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <CryptoPrice />
      </div>

      <!-- Button trigger modal -->
      <div>
        <button @click="showModal = true">Open Modal</button>
        <Modal
          :visible="showModal"
          @update:visible="showModal = $event"
          modalWidth="500px"
          modalHeight="300px"
        >
          <!-- Modal content goes here -->
          <h2>Hello from the modal!</h2>
          <p>This is the modal content.</p>
          <button @click="showModal = false">Close Modal</button>
        </Modal>
      </div>
    </HomeLayout>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import CryptoPrice from "../components/Crypto/CryptoPrice.vue";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PieController,
} from "chart.js";
import Modal from "../components/others/Modal.vue";

export default {
  components: {
    CryptoPrice,

    Modal,
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chartCanvas.getContext("2d");

      Chart.register(
        CategoryScale,
        LinearScale,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        PieController
      );

      const chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Main", "Frozen"],
          datasets: [
            {
              data: [0.00000012, 0.00000102],
              backgroundColor: ["yellow", "green "],
              borderColor: ["black", "rgba(25, 99, 132, 1)", "blue"],
              borderWidth: 5,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });

      // Set canvas height and width using CSS
      this.$refs.chartCanvas.style.height = "150px";
      this.$refs.chartCanvas.style.width = "150px";
    },
  },

  data() {
    return {
      showModal: true,
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
        300: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2,
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

  created() {
    this.$setLoading(false);
  },
};
</script>
<style scoped>
.carousel__item {
  width: 100%;
  gap: 10px;
  display: flex;
  margin: 0px;
  padding: 0px;
  justify-content: center;
}
</style>
