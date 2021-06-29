<template>
    <AppHeader />
    <div id="app"></div>
    <router-view />
    <AppFooter />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppHeader from '@/components/header/AppHeader.vue'; // @ is an alias to /src
import AppFooter from '@/components/Footer/AppFooter.vue';
@Options({
    components: {
        AppHeader,
        AppFooter,
    },
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
