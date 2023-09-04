<template>
  <header id="header" class="header">
    <div class="container-fluid row justify-content-between ">
      <div class="d-none d-md-block  col-md-3">
        <RouterLink to="/" class="">
          
          <h1>CPAearn</h1>
        </RouterLink>
      </div>
      <!-- justify-content-lg-end justify-content-md-between -->
      <!-- Nav Menu -->
      <div class="col-md-9 col-12 d-md-flex justify-content-md-end">
        <nav id="navmenu" class="navmenu ">
          <ul class="ul d-flex justify-content-between">
            <li>
              <RouterLink class="hovdiv" to="/">
                <div>
                  <i class="bi bi-house-fill"></i>
                  <span class="spanhide"> Home</span>
                </div></RouterLink
              >
            </li>

            <!-- <RouterLink to="/register">Register</RouterLink> -->
            <li>
              <RouterLink class="hovdiv" to="/helpcenter"
                ><div>
                  <i class="bi bi-headset"></i>
                  <span class="spanhide"> Services</span>
                </div></RouterLink
              >
            </li>
            <li>
              <RouterLink class="hovdiv" to="/wallate"
                ><div>
                  <i class="bi bi-wallet2"></i>
                  <span class="spanhide"> Wallate</span>
                </div></RouterLink
              >
            </li>
            <li>
              <RouterLink class="hovdiv" to="/deshboard"
                ><div>
                  <i class="bi bi-wallet2"></i>
                  <span class="spanhide"> Deshboard</span>
                </div></RouterLink
              >
            </li>
            <li>
              <RouterLink class="hovdiv" to="/vip">
                <div>
                  <i class="bi bi-rocket-fill"></i>
                  <span class="spanhide"> Vip</span>
                </div></RouterLink
              >
            </li>
            <li>
              <RouterLink class="hovdiv" to="/earning"
                ><div>
                  <i class="bi bi-cash-coin"></i>
                  <span class="spanhide"> Earn</span>
                </div></RouterLink
              >
            </li>
            <li class="">
              <RouterLink class="hovdiv" to="/contact"
                ><div>
                  <i class="bi bi-wechat"></i>
                  <span class="spanhide"> Contact</span>
                </div></RouterLink
              >
            </li>

            <li class="dropdown has-dropdown d-none d-md-block">
              <a><span>More</span> <i class="bi bi-chevron-down"></i></a>
              <ul class="dd-box-shadow">
                <li>
                  <RouterLink to="/reffer"
                    ><div><span class="">Reffer</span></div></RouterLink
                  >
                </li>
                <li v-if="isAuthenticated">
                  <div class="pe-auto">
                    <a class="pe" @click="logout">Logout</a>
                  </div>
                </li>
                <li v-if="!isAuthenticated">
                  <div class="pe-auto">
                    <router-link class="pe" to="/login">Login</router-link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>

          <i class="mobile-nav-toggle d-none bi bi-list"></i>
        </nav>
      </div>

      <!-- End Nav Menu -->
    </div>
  </header>
</template>
<script>
import isAuthenticated from "../../midleware/auth";
import { logout } from "../../midleware/auth";
import axios from "axios";

export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },

  created() {
    if (isAuthenticated()) {
      this.isAuthenticated = true;
    }
  },

  methods: {
    logout() {
      this.$setLoading(true);
      logout();
      axios
        .post(this.$setbackedUrl("api/auth/logout"))
        .then((response) => {
          this.$setLoading(false);

          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });

          // Change the authenticated value to false

          this.$router.push("/login");
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
  },
};
</script>
<style scoped></style>
