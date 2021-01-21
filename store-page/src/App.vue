<template>
    <div id="app">
        <Stores />
    </div>
</template>

<script>
import Stores from './view/Stores';
export default {
    name: 'app',
    components: {
        Stores,
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
