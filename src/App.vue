<template>
  <div id="app">
    <!-- Header -->
    <AppHeader />
    <router-view /> 
       

       <!-- Fotter -->
     <AppFooter />
  </div>
</template>

<script>

import AppHeader from "@/components/header/AppHeader.vue";
import AppFooter from "@/components/Footer/AppFooter.vue";

export default {
    name :"App",
    components: {
        AppHeader,
        AppFooter
    }
}

</script>

<style lang="scss">
#app {
  text-align: center;
}

</style>

