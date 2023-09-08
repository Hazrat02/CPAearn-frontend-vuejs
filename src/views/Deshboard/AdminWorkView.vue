<template>
    <div>
        <DeshboardLayout>
            <div class="content-wrapper">

                <div class="page-header d-flex justify-content-between align-item-center mb-2">
                    <h3 class="page-title">
                        <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
                            <i class="bi bi-universal-access-circle"></i>
                        </span>
                        Work
                    </h3>

                    <div class="">

                        <button class="btn btn-gradient-primary">+ Add a Work</button>

                    </div>

                </div>

                <div id="about" class="about mt-2">
                    <div class="container">
                        <div class="row align-items-xl-center gy-5">
                            <div class="col-xl-12">
                                <div class="row gy-4 icon-boxes">
                                    <div v-for="(item, index) in work" :key="index" style="height: 300px"
                                        class="col-md-6 col-xl-4">
                                        <router-link :to="`/work/${item.component}`">
                                            <div class="icon-box mt-0" style="height: 300px">
                                                <div class="d-flex justify-content-end">0/5</div>

                                                <i class="bi " :class="item.icon"></i>
                                                <h3>{{ item.name }}</h3>

                                                <p>
                                                    {{ item.discribtion }}
                                                </p>
                                            </div>
                                        </router-link>
                                    </div>

                                    <!-- End Icon Box -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End About div -->
            </div>
        </DeshboardLayout>
    </div>
</template>
  
<script>

import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "../../midleware/auth";
import { vipStore } from "../../store/vip";
import { workStore } from "../../store/work";
export default {
    data() {
        return {
            work: [],
            authUser: "",
            vip: "",
            active: "",
            isLoading: true,
            cryptoData: {},
        };
    },

 
    async created() {
        this.$setLoading(false);
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
            // worrk dataaaa------------------------------------------
            const works = workStore();
            const allwork = works.work;
            if (allwork) {
                this.work = allwork;
            } else {
                // userStore.reSetAuthUser();
                this.work = await works.getWork();
            }

            console.log(this.work)
        } else {
            this.authUser = "";
            this.work = "";
        }

        console.log(this.work);
        // auth user data +++++++++++++++++++++++++++++

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
a {
    color: black !important;
    text-decoration: none;
    transition: 0.3s;
}

a:hover {
    color: rgb(1, 9, 17) !important;
    text-decoration: none;
}
</style>
  