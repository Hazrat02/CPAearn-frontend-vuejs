<template>
  <div >
            gdfgdfg
          </div>
    
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import { useAuthUserStore } from "../../store/user";
export default {
  
  data() {
    

    return {
      showSidebar:false

    };
  },
  
  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    sideShow() {
      if (this.showSidebar == true) {
       return 'sidebar-offcanvas.active'
      } else {
        return 'sidebar-offcanvas'
      }
    },
   
  },
  methods: {
    sidebar(){
      if (this.showSidebar == true) {
        this.showSidebar = false
      } else {
        this.showSidebar = true
      }
      console.log(this.showSidebar)
    }
  },
  
};
</script>
