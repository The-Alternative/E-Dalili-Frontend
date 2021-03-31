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
import AppHeader from '@/components/header/AppHeader.vue';


export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter: () => import('@/components/Footer/AppFooter.vue')
    },
};
</script>

<style lang="scss">
#app {
    text-align: center;
}
</style>
