<template>
  <div>
    <HomeLayout>
      <!-- <div v-if="authUser">
        <p>Welcome, {{ authUser.name }}!</p>
        <p>Email: {{ authUser.email }}</p>
      </div> -->
      <div style="position: relative; margin-bottom: 100px ;" class="">
        
        <div
          class=""
          style="
            background-image: url('https://wallpaperaccess.com/full/2895055.jpg');
       
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
            position: relative;
          "
        >
        <img src="../assets/svg/circle.svg" style="   position: absolute;
      top: 0;
      right: 0;
      height: 100%;" alt="circle-image" />
        
          <div
            style="padding-bottom: 100px;"
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
                  <div>= {{authUser.main_balance}}$</div>
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
                  <div>= {{authUser.frozen_balance}} $</div>
                </div>
              </div>

              <div class="col-3 col-md-12" style="z-index: 1">
                <div class="col-md-12 ml-5 d-flex justify-content-center">
                  <canvas ref="chartCanvas"></canvas>
                </div>
              </div>
            </div>
            <div style="align-items: center;z-index: 1" class="col-md-4 col-12 mt-3 row" >
              <div class="d-flex justify-content-evenly">
                <button
                  class="btn btn-grad"
                  @click="showWithdrawModal = true"
                >
                  Withdraw
                </button>
                <button
                  class="btn btn-grad"
                  @click="showModal = true"
                >
                  Deposit
                </button>
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
            <Carousel :breakpoints="breakpoints" style="margin-top: -55px">
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
            <table class="table-borderless datatable mt-2 mb-4 container">
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
                <tr
                  v-for="(transactionItem, index) in displayedItems"
                  :key="index"
                >
                  <th>
                    <i
                      class="bi"
                      :class="{
                        'bi-arrow-down-square':
                          transactionItem.type === 'deposit',
                        'bi-arrow-up-square':
                          transactionItem.type === 'withdraw',
                      }"
                    >
                    </i>
                  </th>
                  <td>{{ transactionItem.method.name }}</td>
                  <td>{{ transactionItem.type }}</td>
                  <td>{{ transactionItem.created_at.substring(0, 10) }}</td>
                  <td>${{ transactionItem.price }}</td>
                  <td>
                    <span
                      class="badge"
                      :class="{
                        'bg-warning': transactionItem.status === 'pending',
                        'bg-danger': transactionItem.status === 'rejected',
                        'bg-success': transactionItem.status === 'success',
                      }"
                      >{{ transactionItem.status }}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <nav v-show="totalPages>1" aria-label="Page navigation example mt-3">
              <ul class="pagination justify-content-center">
                <li
                  class="page-item"
                  :class="{
                    disabled: currentPage === 1,
                  }"
                >
                  <button
                    class="page-link"
                    @click="previousPage"
                    :disabled="currentPage === 1"
                  >
                    Previous
                  </button>
                </li>
                <li class="page-item">
                  <span class="page-link"
                    >Page {{ currentPage }} of {{ totalPages }}</span
                  >
                </li>

                <li class="page-item">
                  <button
                    class="page-link"
                    @click="nextPage"
                    :class="{
                      disabled: currentPage === totalPages,
                    }"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div>
        <CryptoPrice />
      </div>

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
            <form action="" @submit.prevent="depositNow">
              <div class="row">
                <div class="form-outline mb-2 col-12 col-md-6">
                  <b
                    ><label class="form-label" for="deposit"
                      >Deposit price</label
                    ></b
                  >
                  <input
                    placeholder="Min Deposit 2$"
                    v-model="deposit"
                    type="text"
                    id="deposit"
                    class="form-control"
                  />
                </div>

                <div class="form-outline mb-2 col-12 col-md-6">
                  <b><label class="form-label" for="deposit">Method</label></b>
                  <select
                    id="paymentmethod"
                    name="paymentmethod"
                    @change="handleClick"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>Open this select menu</option>
                    <option
                      v-for="item in payment"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>

              <br />
              <hr class="my-3" />
              <div v-show="tutorial">
                <div
                  class="container p-2"
                  style="border: dotted 4px rgba(0, 0, 0, 0.432)"
                >
                  <p>
                    <b class="text-danger"
                      ><i class="bi bi-exclamation-triangle-fill"></i>
                      Step-1:</b
                    >
                    Fill Your diposit price and select payment Method.
                  </p>
                  <p>
                    <b class="text-danger"
                      ><i class="bi bi-exclamation-triangle-fill"></i>
                      Step-2:</b
                    >
                    See coin symbol and network.and copy address for payment
                  </p>
                  <p>
                    <b class="text-danger"
                      ><i class="bi bi-exclamation-triangle-fill"></i>
                      Step-3:</b
                    >
                    Go to your crypto account. Withdraw coin set this network
                    than paste this address or scan QR code
                  </p>
                </div>
              </div>
              <div v-for="item in filteredPayment" :key="item.id">
                <div>
                  <div class="d-flex justify-content-evenly">
                    <p>
                      <b>Symbol:</b><span>{{ item.name }}</span>
                    </p>
                    <p>
                      <b>Network:</b><span>{{ item.network }}</span>
                    </p>
                  </div>

                  <div class="d-flex justify-content-between">
                    <input
                      v-model="item.address"
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
                      <i
                        :class="['bi', isCopied ? 'fa-check' : 'bi-files']"
                      ></i>
                      {{ buttonText }}
                    </button>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-11 col-md-6 mt-2">
                      <img
                        class="img-thumbnail"
                        :src="item.image"
                        alt="payment"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="form-outline mb-2 col-9">
                      <b
                        ><label class="form-label" for="deposit"
                          >TRX ID</label
                        ></b
                      >
                    </div>
                    <div class="row">
                      <div class="col-8 col-md-9">
                        <input
                          class="d-block form-control"
                          placeholder="TRX*******"
                          v-model="trxid"
                          type="text"
                          id="trxid"
                          required
                        />
                      </div>
                      <div class="col-md-3 col-4">
                        <button class="btn d-block btn-outline-primary">
                          Deposit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- Your modal content goes here -->
        </Modal>
        <Modal
          :showModal="showWithdrawModal"
          :modalWidth="modalWidth"
          :modalHeight="modalHeight"
          :position="modalPosition"
          @close="showWithdrawModal = false"
          :title="'Withdraw'"
        >
          <div  class="col-12 my-3">
            <form action="" @submit.prevent="withdrawNow">
              <div class="row">
                <div class="form-outline mb-2 col-12 col-md-6">
                  <b
                    ><label class="form-label" for="deposit"
                      >Withdraw price</label
                    ></b
                  >
                  <input
                    placeholder="Min withdraw 2$"
                    v-model="withdrawprice"
                    type="number"
                    class="form-control"
                  />
                </div>

                <div class="form-outline mb-2 col-12 col-md-6">
                  <b><label class="form-label" for="deposit">Method</label></b>
                  <select
                    id="paymentmethod"
                    name="paymentmethod"
                    @change="handleClick"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>Open this select menu</option>
                    <option
                      v-for="item in payment"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>

              <br />
              <hr class="my-3" />
              <div v-show="tutorial">
                <div
                  class="container p-2"
                  style="border: dotted 4px rgba(0, 0, 0, 0.432)"
                >
                  <p>
                    <b class="text-danger"
                      ><i class="bi bi-exclamation-triangle-fill"></i>
                      Step-1:</b
                    >
                    Fill Your diposit price and select payment Method.
                  </p>
                  <p>
                    <b class="text-danger"
                      ><i class="bi bi-exclamation-triangle-fill"></i>
                      Step-2:</b
                    >
                    See coin symbol and network.and copy address for payment
                  </p>
                  <p>
                    <b class="text-danger"
                      ><i class="bi bi-exclamation-triangle-fill"></i>
                      Step-3:</b
                    >
                    Go to your crypto account. Withdraw coin set this network
                    than paste this address or scan QR code
                  </p>
                </div>
              </div>
              <div v-for="item in filteredPayment" :key="item.id">
                <div>
                  <div class="d-flex justify-content-evenly">
                    <p>
                      <b>Symbol:</b><span>{{ item.name }}</span>
                    </p>
                    <p>
                      <b>Network:</b><span>{{ item.network }}</span>
                    </p>
                    <p><b>Fee:</b><span>2%</span></p>
                  </div>

                  <div>
                    <div class="form-outline mb-2 col-9">
                      <b
                        ><label class="form-label" for="deposit"
                          >Withdraw Address</label
                        ></b
                      >
                    </div>
                    <div class="row">
                      <div class="col-9">
                        <input
                          class="d-block form-control"
                          placeholder="TM3Ex5GM6sj******"
                          v-model="withdrawAddress"
                          type="text"
                          id="withdrawaddress"
                          required
                        />
                      </div>
                      <div class="col-3">
                        <button class="btn d-block btn-outline-primary">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
       
        <div></div>
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

import axios from "axios";
import { useAuthUserStore } from "../store/user";
import { transactionStore } from "../store/transaction";
import { paymentStore } from "../store/payment";

export default {
  components: {
    CryptoPrice,
  
  },
  data() {
    return {
      chart:'',
      transaction: "",
      authUser: "",
      trxid: "",
      user_id: "",
      tutorial: true,
      deposit: "",
      
      withdrawAddress: "",
      withdrawMethod: "",
      withdrawnetwork: "",
      withdrawprice: "",
      
      showWithdrawModal: false,
      modalWidth: "col-11 col-md-6 bg-white rounded-4 top-0 ",
      showModal: false,
      modalHeight: "auto",
      modalPosition: "justify-content-center align-items-center", // Set the default position here, other options: top, right, bottom, left
      textToCopy: "sssssssssssssssss", // The text you want to copy
      isCopied: false, // Track the state of the button
      buttonText: "", // Initial button text
      cryptoData: {},
      payment: [],
      filteredPayment: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page

      s: {
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

  mounted() {
    this.renderChart();
  },
  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.transaction.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.transaction.slice(start, end);
    },
  },

  methods: {
    async depositNow() {
      this.$setLoading(true);
      const data = {
        trxid: this.trxid,
        status: "pending",
        user_id: this.authUser.id,
        method: this.filteredPayment["0"].id,
        type: "deposit",
        network: this.filteredPayment["0"].network,
        price: this.deposit,
        address: this.filteredPayment["0"].address,
      };

      await axios
        .post("api/deposit", data)
        .then((response) => {
          this.$setLoading(false);
          // transactionStore===================================
          const getTransaction = transactionStore();

          getTransaction.addTransaction(response.data);
          // Try to get the data from the store
          (this.transaction = getTransaction.authTransaction),


          (this.showModal = false),
            (this.filteredPayment = ""),
            (this.tutorial = true),
            (this.deposit = ""),
            this.$notify({
              title: "message",
              text: response.data.message,
              type: "success",
            });
        })
        .catch((error) => {
          // Handle the error
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });
    },
    withdrawNow() {
      this.$setLoading(true);
      const data = {
        trxid: "",
        status: "pending",
        network: this.filteredPayment["0"].network,
        method: this.filteredPayment["0"].id,
        type: "withdraw",

        price: this.withdrawprice,
        address: this.withdrawAddress,
      };

      axios
        .post("/api/deposit", data)
        .then((response) => {
          this.$setLoading(false);
          (this.showWithdrawModal = false),
            (this.filteredPayment = ""),
            (this.tutorial = true),
            (this.withdrawAddress = ""),
            (this.withdrawprice = "");

            const getTransaction = transactionStore();

              getTransaction.addTransaction(response.data);
              // Try to get the data from the store
              (this.transaction = getTransaction.authTransaction),


            this.$notify({
              title: "message",
              text: 'Withdraw request done!',
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
    },

    // paginate=================================
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    handleClick(event) {
      this.tutorial = false;

      const bal = (this.filteredPayment = this.payment.filter(
        (item) => item.id == event.target.value
      ));
      this.textToCopy = this.filteredPayment[0].address;
    },

    renderChart() {




      this.$nextTick(() => {
    const ctx = this.$refs.chartCanvas.getContext("2d");
    if (!this.authUser) {
        return;
      }
      if (this.chart) {
        this.chart.destroy();
      }
      
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
              data: [ this.authUser.main_balance , this.authUser.frozen_balance],

              backgroundColor: ["#1234", "rgb(216, 221, 216)"],
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
  });
      
      
      
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
  
  async created() {
    // auth user data +++++++++++++++++++++++++++++

    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }

    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.authTransaction;

    if (transactionData) {
      this.transaction = transactionData;
   
    } else {
      // If data is not available, fetch it and set the component property
      this.transaction = await getTransaction.authUserTransaction();
     
    }
    console.log(this.transaction)

    // payment data=====================================================
    const getpayment = paymentStore();

// Try to get the data from the store
const paymentData = getpayment.payment;

if (paymentData) {
  this.payment = paymentData;

} else {
  // If data is not available, fetch it and set the component property
  this.payment = await getpayment.getPayment();
 
}
    
    this.$setLoading(false);
  },
  watch: {
    authUser: {
      handler() {
        // Watch for changes in authUser and re-render the chart
        this.renderChart();
      },
      immediate: true, // Call the handler immediately on component creation
    },
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
