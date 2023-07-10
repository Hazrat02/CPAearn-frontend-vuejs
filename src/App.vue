<script>
// import { notify } from 'vue3-notify'
import { RouterLink, RouterView } from "vue-router";
export default {};
</script>

<template>
  <div>
    <Notifications :animation="animation" />

    <RouterView />
  </div>
</template>
