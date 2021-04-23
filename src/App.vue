<template>
    <div id="app">
        <!-- Header -->
        <AppHeader />
        <transition name="view">
            <router-view />
        </transition>
        <!-- Footer -->
        <AppFooter />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
        AppHeader: () => import('@/components/header/AppHeader.vue'),
        AppFooter: () => import('@/components/Footer/AppFooter.vue'),
    },
};
</script>

<style lang="scss">
#app {
    text-align: center;
}
.view-enter-active,
.view-leave-active {
    transition: opacity 0.8s ease-in-out, transform 0.5s ease;
}
.view-enter-active {
    transition-delay: 0.8s;
}
.view-enter {
    opacity: 0;
    transform: translateY(-100px);
}
.view-enter-to {
    opacity: 1;
    transform: translateY(0px);
}
.view-leave {
    opacity: 1;
    transform: translateY(0px);
}
.view-leave-to {
    opacity: 0;
    transform: translateY(100px);
}
// html:lang(en) *{
//     text-align: left;
// }
</style>
