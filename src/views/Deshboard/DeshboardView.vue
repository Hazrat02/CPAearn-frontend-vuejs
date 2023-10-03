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
              <button class="add btn btn-gradient-primary " id="add-task">Search..</button>
            </div>
          </div>

        </div>
        <div class="row mb-3 justify-content-between">
          <div class="col-md-4 mb-2">


            <div class="card bg-danger card-img-holder text-white">
              <div class="card-body">
                <img src="../../assets/svg/circle.svg" class="card-img-absolute" alt="circle-image" />
                <h4 class="font-weight-normal mb-3">All User <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 class="mb-5">{{ userCount }}</h2>
                <h6 class="card-text">Last Month Increased by {{ userChange }}%</h6>
              </div>
            </div>



          </div>
          <div class="col-md-4">
            <div class="card  card-img-holder text-white" style="background-color: rgb(131, 122, 0);">
              <div class="card-body">
                <img src="../../assets/svg/circle.svg" class="card-img-absolute" alt="circle-image" />
                <h4 class="font-weight-normal mb-3">Vip Buy <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 class="mb-5">{{ filteredUsers.count }}</h2>
                <h6 class="card-text">Last Month Increased By {{ filteredUsers.change }}%</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-img-holder text-white" style="background-color: rgb(114, 8, 201);">
              <div class="card-body">
                <img src="../../assets/svg/circle.svg" class="card-img-absolute" alt="circle-image" />
                <h4 class="font-weight-normal mb-3">Transection<i class="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
                <h2 class="mb-5">{{filterTrx.count}}</h2>
                <h6 class="card-text">Last Month Increased By {{filterTrx.change}}%</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-img-holder text-white" style="background-color: rgb(61, 156, 233);">
              <div class="card-body">
                <img src="../../assets/svg/circle.svg" class="card-img-absolute" alt="circle-image" />
                <h4 class="font-weight-normal mb-3">Transection<i class="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
                <h2 class="mb-5">{{filterTrx.count}}</h2>
                <h6 class="card-text">Last Month Increased By {{filterTrx.change}}%</h6>
              </div>
            </div>
          </div>
        </div>


      </div>
    </DeshboardLayout>
  </div>
</template>
  
<script>
import { useAuthUserStore } from "../../store/user";
import { transactionStore } from "../../store/transaction";

export default {

  data() {
    return {
      alluser: [],
      userCount: '',
      userChange: '',
      transaction:[],
    };
  },

  computed: {
    filteredUsers() {
      const oneMonthAgoUser = this.alluser.filter((item) => {
        const itemDate = new Date(item.created_at);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        return item.vip > 0 && itemDate < thirtyDaysAgo;
      });
      const lastMonthUser = this.alluser.filter((item) => {
        const itemDate = new Date(item.created_at);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        return item.vip > 0 && itemDate >= thirtyDaysAgo;
      });

      
      return {
        count: this.alluser.filter(user => user.vip > 0).length.toString().padStart(4, '0'),
        change:(lastMonthUser.length / oneMonthAgoUser.length) * 100
      };

    },
    filterTrx() {
      const oneMonthAgotransaction = this.transaction.filter((item) => {
        const itemDate = new Date(item.created_at);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        return itemDate < thirtyDaysAgo;
      });
      const lastMonthtransaction = this.transaction.filter((item) => {
        const itemDate = new Date(item.created_at);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        return itemDate >= thirtyDaysAgo;
      });

      
      return {
        count: this.transaction.length.toString().padStart(4, '0'),
        change:(lastMonthtransaction.length / oneMonthAgotransaction.length) * 100
      };

    }


  },

  async created() {
    // auth user data +++++++++++++++++++++++++++++

    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.alluser = alluser;
    } else {
      // userStore.reSetAuthUser();
      this.alluser = await userStore.getAllUser();
    }
    this.userCount = this.alluser.length.toString().padStart(4, '0');


    const oneMonthAgoUser = this.alluser.filter((item) => {
      const itemDate = new Date(item.created_at); // Convert itemDate to a Date object
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return itemDate < thirtyDaysAgo;
    });
    const lastMonthUser = this.alluser.filter((item) => {
      const itemDate = new Date(item.created_at); // Convert itemDate to a Date object
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return itemDate >= thirtyDaysAgo;
    });
    this.userChange = (lastMonthUser.length / oneMonthAgoUser.length) * 100









    const getTransaction = transactionStore();

        // Try to get the data from the store
        const transactionData = getTransaction.allTransaction;

        if (transactionData) {
            this.transaction = transactionData;

        } else {
            // If data is not available, fetch it and set the component property
            this.transaction = await getTransaction.allUserTransaction();
            
        }

    this.$setLoading(false);

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
  