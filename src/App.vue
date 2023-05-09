
<script>
// import { notify } from 'vue3-notify'
import { RouterLink, RouterView } from 'vue-router'
export default {


}

</script>

<template>
   <Notifications   :animation="animation"  />
 

  <component :is="$route.meta.Layout"> 
      
      <RouterView/>
  </component>

  

</template>

