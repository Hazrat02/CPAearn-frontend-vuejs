<template>
  <div>
    <DeshboardLayout>
      <div class="content-wrapper mt-0" style="">
   
                <div class="page-header row justify-content-between mb-2 mt-0">
                    <h3 class="col-12 col-md-6 page-title">
                        <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
                          <i class="bi bi-gear-wide-connected"></i>
                        </span>
                        Dashboard
                    </h3>
                    <div class="col-12 col-md-6">
                        <div class="add-items d-flex justify-content-between">
                            <input type="text" class="form-control todo-list-input" placeholder="search..?">
                            <button class="add btn btn-gradient-primary "
                                id="add-task">Search..</button>
                        </div>
                    </div>

                </div>
        <div class="row mb-3 justify-content-between">
          <div class="col-md-4 mb-2">
            <div class="card bg-danger card-img-holder text-white">
              <div class="card-body">
                <img src="../../assets/svg/circle.svg" class="card-img-absolute" alt="circle-image" />
                <h4 class="font-weight-normal mb-3">Weekly Sales <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 class="mb-5">$ 15,0000</h2>
                <h6 class="card-text">Increased by 60%</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card  card-img-holder text-white" style="background-color: rgb(131, 122, 0);">
              <div class="card-body">
                <img src="../../assets/svg/circle.svg" class="card-img-absolute" alt="circle-image" />
                <h4 class="font-weight-normal mb-3">Weekly Orders <i
                    class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 class="mb-5">45,6334</h2>
                <h6 class="card-text">Decreased by 10%</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-img-holder text-white" style="background-color: rgb(114, 8, 201);">
              <div class="card-body">
                <img src="../../assets/svg/circle.svg" class="card-img-absolute" alt="circle-image" />
                <h4 class="font-weight-normal mb-3">Visitors Online <i class="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
                <h2 class="mb-5">95,5741</h2>
                <h6 class="card-text">Increased by 5%</h6>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
    </DeshboardLayout>
  </div>
</template>
  
<script>
export default {
  data() {
    return {

    };
  },

  created() {
    this.$setLoading(false);
    this.$isSidebar();
    console.log(this.$isSidebar);
  },
};
</script>
<style>
.card-img-absolute {
  position: absolute;
  top: 0;
  right: 0%;
  height: 100%;
}


</style>
  