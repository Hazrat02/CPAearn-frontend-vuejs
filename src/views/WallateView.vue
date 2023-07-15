<template>
  <div>
    <HomeLayout>
      <section class="section dashboard">
        <div class="row">
          <!-- Left side columns -->
          <div class="">
            <div class="row">
              <!-- Sales Card -->
              <div>
                <Carousel
                  v-bind="settings"
                  :breakpoints="breakpoints"
                  
                  :wrap-around="true"
                  style="margin-top: -55px"
                >
                  <Slide class="" v-for="slide in analysis" :key="slide">
                    <div class="carousel__item">
                      <!-- Revenue Card -->
                      <div class="">
                        <div class="card info-card revenue-card">
                          <div class="card-body">
                            <h5 class="card-title">
                              Revenue <span>| {{ slide.time }}</span>
                            </h5>

                            <div class="d-flex align-items-center">
                              <div
                                class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                              >
                                
                              </div>
                              <div class="ps-3">
                                <h6>${{ slide.earn }}</h6>
                                <span class="text-success small pt-1 fw-bold"
                                  >8%</span
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
                    <Pagination class="" />
                  </template>
                </Carousel>
              </div>

              <!-- Reports -->
              <div class="col-12">
                <div class="">
                  <div class="">
                    <h5 class="">TRX Details</h5>
                  </div>
                </div>
              </div>
              <!-- End Reports -->

              <!-- Recent Sales -->
              <div class="col-12">
                <div class="card recent-sales overflow-auto">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"
                      ><i class="bi bi-three-dots"></i
                    ></a>
                    <ul
                      class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                    >
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Recent Sales <span>| Today</span>
                    </h5>

                    <table class="table table-borderless datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Customer</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><a href="#">#2457</a></th>
                          <td>Brandon Jacob</td>
                          <td>
                            <a href="#" class="text-primary"
                              >At praesentium minu</a
                            >
                          </td>
                          <td>$64</td>
                          <td>
                            <span class="badge bg-success">Approved</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#">#2147</a></th>
                          <td>Bridie Kessler</td>
                          <td>
                            <a href="#" class="text-primary"
                              >Blanditiis dolor omnis similique</a
                            >
                          </td>
                          <td>$47</td>
                          <td><span class="badge bg-warning">Pending</span></td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#">#2049</a></th>
                          <td>Ashleigh Langosh</td>
                          <td>
                            <a href="#" class="text-primary"
                              >At recusandae consectetur</a
                            >
                          </td>
                          <td>$147</td>
                          <td>
                            <span class="badge bg-success">Approved</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#">#2644</a></th>
                          <td>Angus Grady</td>
                          <td>
                            <a href="#" class="text-primar"
                              >Ut voluptatem id earum et</a
                            >
                          </td>
                          <td>$67</td>
                          <td><span class="badge bg-danger">Rejected</span></td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#">#2644</a></th>
                          <td>Raheem Lehner</td>
                          <td>
                            <a href="#" class="text-primary"
                              >Sunt similique distinctio</a
                            >
                          </td>
                          <td>$165</td>
                          <td>
                            <span class="badge bg-success">Approved</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- End Recent Sales -->
            </div>
          </div>
          <!-- End Left side columns -->
        </div>
      </section>
    </HomeLayout>
  </div>
</template>

<script>

import "vue3-carousel/dist/carousel.css";
export default {
  data() {
    return {
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

  created() {
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
