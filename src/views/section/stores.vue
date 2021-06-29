<template>
    <div>
        <Cartmini />
        <BodyStore />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    name: 'stores',
    components: {
        BodyStore: defineAsyncComponent(() =>
            import(`@/components/body/BodyStore.vue`)
        ),
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        ),
    },
};
</script>

<style scoped></style>
