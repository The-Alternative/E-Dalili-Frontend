<template>
    <div id="app">
        <BodyStore />
    </div>
</template>

<script>
import BodyStore from './components/BodyStore.vue';
export default {
    name: 'app',
    components: {
        BodyStore,
    },
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
