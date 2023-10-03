<template>
  <div>
    fds
  </div>
</template>

<script>
import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "../../midleware/auth";
import { vipStore } from "../../store/vip";
import { workStore } from "../../store/work";
import axios from "axios";

export default {
  data() {
    return {
      countdown: 60,
      countdownInterval: null,
      component: "",
      news: "Mailsell",
      authUser: "",
      vip: "",
      active: "",
      isLoading: true,
      cryptoData: {},
    };
  },
  mounted() {
    this.countdown = "60";
   
  },

  // beforeRouteLeave(to, from, next) {
  //   this.stopCountdown(); // Stop the countdown before leaving the route
  //   next();
  // },

  methods: {
    
    makeTime() {
      
        this.countdown--;
      
    },
    redirectToOtherRoute() {
      
      this.$router.push("/earning");

    },
  },

  computed: {
    startCountdown() {
      
      if (this.countdown > '0') {
        setTimeout(() => {
        this.countdown--;
        this.startCountdown();
      }, 1000);
      } else {
        this.$router.push("/earning");
        this.$notify({
          title: "Warning",
          text: 'Money added',
          type: "error",
        });
      }
      
    },
  },

  
  async created() {
    this.startCountdown();
    // this.news=news
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
    } else {
      this.authUser = "";
    }
    // auth user data +++++++++++++++++++++++++++++

    this.$setLoading(false);
  },
};
</script>
<style scoped>
.zoom-in-zoom-out {
 position: fixed  ;
 top: 50%;
 left: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 50px;
 width: 50px;
 padding: 5px;
 z-index: 666666666;
 border-radius: 100px;
  background: rgba(137, 139, 137, 0.747);
  animation: zoom-in-zoom-out 2s ease-out infinite;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
