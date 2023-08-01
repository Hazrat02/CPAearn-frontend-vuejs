<template>
  <div>
    <HomeLayout>
      <!-- Services Details Page Title & Breadcrumbs -->
      <div data-aos="fade" class="page-title">
        <div class="heading">
          <div class="container">
            <div class="row d-flex justify-content-center text-center">
              <div class="col-lg-8">
                <h1>Services Details</h1>
                <p class="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav class="breadcrumbs">
          <div class="container">
            <ol>
              <li><a href="index.html">Home</a></li>
              <li class="current">Services Details</li>
            </ol>
          </div>
        </nav>
      </div>
      <!-- End Page Title -->

      <!-- Service-details Section - Services Details Page -->
      <section id="service-details" class="service-details">
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="service-box">
                <h4>Serices List</h4>
                <div class="services-list">
                  <a href="#" class="active"
                    ><i class="bi bi-arrow-right-circle"></i
                    ><span>Web Design</span></a
                  >
                  <a href="#"
                    ><i class="bi bi-arrow-right-circle"></i
                    ><span>Web Design</span></a
                  >
                  <a href="#"
                    ><i class="bi bi-arrow-right-circle"></i
                    ><span>Product Management</span></a
                  >
                  <a href="#"
                    ><i class="bi bi-arrow-right-circle"></i
                    ><span>Graphic Design</span></a
                  >
                  <a href="#"
                    ><i class="bi bi-arrow-right-circle"></i
                    ><span>Marketing</span></a
                  >
                </div>
              </div>
              <!-- End Services List -->

              <div class="service-box">
                <h4>Download Catalog</h4>
                <div class="download-catalog">
                  <a href="#"
                    ><i class="bi bi-filetype-pdf"></i
                    ><span>Catalog PDF</span></a
                  >
                  <a href="#"
                    ><i class="bi bi-file-earmark-word"></i
                    ><span>Catalog DOC</span></a
                  >
                </div>
              </div>
              <!-- End Services List -->

              <div
                class="help-box d-flex flex-column justify-content-center align-items-center"
              >
                <i class="bi bi-headset help-icon"></i>
                <h4>Have a Question?</h4>
                <p class="d-flex align-items-center mt-2 mb-0">
                  <i class="bi bi-telephone me-2"></i>
                  <span>+1 5589 55488 55</span>
                </p>
                <p class="d-flex align-items-center mt-1 mb-0">
                  <i class="bi bi-envelope me-2"></i>
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </p>
              </div>
            </div>

            <div
              class="col-lg-8 ps-lg-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="./../assets\frontend\img\services.jpg"
                alt=""
                class="img-fluid services-img"
              />
              <h3>
                Temporibus et in vero dicta aut eius lidero plastis trand lined
                voluptas dolorem ut voluptas
              </h3>
              <p>
                Blanditiis voluptate odit ex error ea sed officiis deserunt.
                Cupiditate non consequatur et doloremque consequuntur.
                Accusantium labore reprehenderit error temporibus saepe
                perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem
                architecto eum et quos deleniti officia qui.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i>
                  <span>Aut eum totam accusantium voluptatem.</span>
                </li>
                <li>
                  <i class="bi bi-check-circle"></i>
                  <span
                    >Assumenda et porro nisi nihil nesciunt voluptatibus.</span
                  >
                </li>
                <li>
                  <i class="bi bi-check-circle"></i>
                  <span>Ullamco laboris nisi ut aliquip ex ea</span>
                </li>
              </ul>
              <p>
                Est reprehenderit voluptatem necessitatibus asperiores neque sed
                ea illo. Deleniti quam sequi optio iste veniam repellat odit.
                Aut pariatur itaque nesciunt fuga.
              </p>
              <p>
                Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam
                aut consequuntur recusandae mollitia doloremque est architecto
                cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
                repellendus eveniet velit sint quia sapiente cumque. Et ipsa
                perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
                Eaque iusto cupiditate et totam et quia dolorum in. Sunt
                molestiae ipsum at consequatur vero. Architecto ut pariatur
                autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit
                dolore alias explicabo ea.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- End Service-details Section -->

      <section id="faq" class="faq">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="content px-xl-5">
                <h3>
                  <span>Frequently Asked </span><strong>Questions</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>
            </div>

            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div class="faq-container">
                <div class="faq-item"  v-for=" (item,index) in ask" :key="index" :class="{
                'faq-active': item.id === this.activeAsk,
               
                
              }" @click="toggleActiveAsk(item.id)">
                  <h3>
                    <span class="num">{{index}}.</span>
                    <span>{{item.ask}}</span>
                  </h3>
                  <div class="faq-content">
                    <p>
                      {{item.ans}}
                    </p>
                  </div>
                  <i class="faq-toggle bi bi-chevron-right"></i>
                </div>
                <!-- End Faq item-->

                
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Faq Section -->
    </HomeLayout>
  </div>
</template>

<script>
import axios from 'axios';


export default {

  data() {
    return {
      ask:'',
      activeAsk:'',
    }
  },
  methods: {
    toggleActiveAsk(itemId) {
      if (this.activeAsk === itemId) {
        // If the clicked item is already the active item, set it to null
        this.activeAsk = null;
      } else {
        // Otherwise, set it to the clicked item's ID
        this.activeAsk = itemId;
      }
    },


    setup() {
      
    },
    showAns() {
      
    },
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/ask")
      .then((response) => {
        this.ask = response.data.ask;
        console.log(this.ask)
      })
      .catch((error) => {
        this.$notify({
          title: "Warning",
          text: error.response.data.message + ".Reload this page",
          type: "error",
        });
      });
    this.$setLoading(false);
  },
};
</script>
<style scoped>
/* Faq Section - Home Page
------------------------------*/
.faq .content h3 {
  color: var(--color-secondary);
  font-weight: 400;
  font-size: 34px;
}

.faq .content p {
  font-size: 15px;
  color: rgba(var(--color-default-rgb), 0.7);
}

.faq .faq-container .faq-item {
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgba(var(--color-default-rgb), 0.1);
  overflow: hidden;
}

.faq .faq-container .faq-item:last-child {
  margin-bottom: 0;
}

.faq .faq-container .faq-item h3 {
  color: var(--color-secondary);
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 0 30px 0 0;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
}

.faq .faq-container .faq-item h3 .num {
  color: var(--color-primary);
  padding-right: 5px;
}

.faq .faq-container .faq-item h3:hover {
  color: var(--color-primary);
}

.faq .faq-container .faq-item .faq-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
}

.faq .faq-container .faq-item .faq-content p {
  margin-bottom: 0;
  overflow: hidden;
}

.faq .faq-container .faq-item .faq-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  line-height: 0;
  transition: 0.3s;
  cursor: pointer;
}

.faq .faq-container .faq-item .faq-toggle:hover {
  color: var(--color-primary);
}

.faq .faq-container .faq-active h3 {
  color: var(--color-primary);
}

.faq .faq-container .faq-active .faq-content {
  grid-template-rows: 1fr;
  visibility: visible;
  opacity: 1;
  padding-top: 10px;
}

.faq .faq-container .faq-active .faq-toggle {
  transform: rotate(90deg);
  color: var(--color-primary);
}
</style>
