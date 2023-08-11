<template>
  <div>
    <HomeLayout>
      
        <!-- End Section Title -->

        <component :is="component" />

      <!-- End vip Section -->
    </HomeLayout>
  </div>
</template>

<script>
import news from "./workView/ReadNews.vue";
import mailsell from "./workView/Mailsell.vue";
import videoads from "./workView/VideoAds.vue";
import promote from "./workView/Promote.vue";
import bannerads from "./workView/BannerAds.vue";
import dataentry from "./workView/DataEntry.vue";
import webdesign from "./workView/WebDesign.vue";

import { useAuthUserStore } from "../store/user";
import isAuthenticated from "../midleware/auth";
import { vipStore } from "../store/vip";
import { workStore } from "../store/work";
import axios from "axios";

export default {
  components:{
    news,
    mailsell,
    videoads,
    promote,
    bannerads,
    dataentry,
    webdesign,
    



  },
  data() {
    return {
      component:'',
      news: "Mailsell",
      authUser: "",
      vip: "",
      active: "",
      isLoading: true,
      cryptoData: {},
    };
  },
  methods: {},

  // computed: {
  //   async selectedComponent() {
  //     const componentMapping = {
  //       news: () => import(`./workView/ReadNews.vue`), // 'news' id maps to the news component path
  //       mailsell: () => import(`./workView/Mailsell.vue`), // 'news' id maps to the news component path
  //       // Add other id-component path mappings here...
  //     };
  //     const componentName = this.$route.params.id;
  //      const componentPath = await componentMapping[componentName];
  //     console.log('sd',componentPath);
  //     if (!componentPath) {
  //       // Return a default component or null if the componentName is not found in the mapping
  //       return null;
  //     }

  //     return () => componentPath(); // Load the component using import function
  //   },
  // },

  async created() {
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





    // worrk dataaaa------------------------------------------
    const works = workStore();
      const allwork = works.work;
      if (allwork) {
        this.work = allwork;
      } else {
        // userStore.reSetAuthUser();
        this.work = await works.getWork();
      }
    

     const issetVip=this.work.filter(
        (item) => item.component == this.$route.params.id
      )



      
      if (issetVip[0]) {
        const curretVip=issetVip[0].vip_id.filter(
        (item) => item.id == this.authUser.vip
      )
        if (curretVip[0]) {
          this.component=this.$route.params.id
        } else {
          this.$router.push('/earning')
          this.$notify({
          title: "Warning",
          text: 'Sorry!You need upgrate your Plan',
          type: "error",
        });
        }
        
       
      } else {
        this.$router.push('/')
        this.$notify({
          title: "Warning",
          text: 'Sorry!You need right URL',
          type: "error",
        });
      }
      // console.log('fdgfg',issetVip)

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

</style>