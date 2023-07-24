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
                <button class="btn btn-outline-primary" @click="showModal = true">Deposit</button>
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


        <Modal
          :showModal="showModal"
          :modalWidth="modalWidth"
          :modalHeight="modalHeight"
          :position="modalPosition"
          @close="showModal = false"
          :title="'Deposit'"
        >
          <div class="col-12 my-3">
            <form action="">
              <div class="form-outline mb-2">
                <label class="form-label" for="deposit">Deposit price</label>
                <input
                  placeholder="Min Deposit 2$"
                  v-model="deposit"
                  type="email"
                  id="deposit"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-outline mb-2">
                <label class="form-label" for="deposit">Method</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <hr />
              <div>
                <div class="d-flex justify-content-between">
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
                </div>
                <div class="row justify-content-center">
                  <div class="col-12 col-md-6">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                  <!-- <div class="rcol-12 col-md-6">
                    
                  </div> -->
                </div>
              </div>
            </form>
          </div>
          <!-- Your modal content goes here -->
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

  data() {
    return {
      showModal: false,
      modalWidth: "col-11 col-md-6 bg-white rounded-4",
      modalHeight: "auto",
      modalPosition: "center", // Set the default position here, other options: top, right, bottom, left
      textToCopy: "www.cpaearn.com/323294", // The text you want to copy
      isCopied: false, // Track the state of the button
      buttonText: "", // Initial button text
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
