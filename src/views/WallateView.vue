<template>
  <div>
    <HomeLayout>
      <div style="position: relative; margin-bottom: 100px" class="">
        <div
          style="
            background-image: url('https://wallpaperaccess.com/full/2895055.jpg');
            height: 300px;

            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          "
        ></div>
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
          <div class="">
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
            </Carousel>
          </div>
        </div>
        
        
      </div>
      <div>
        <div class="col-12">
          <div class="card recent-sales overflow-auto">
            

            <div class="card-body">
              <h5 class="card-title"><i class="bi bi-receipt"></i> Recent TRX</h5>

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
                      <a href="#" class="text-primary">At praesentium minu</a>
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
      </div>
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
