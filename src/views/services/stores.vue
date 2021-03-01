<template>
    <div>
         <Cartmini />
        <BodyStore />
    </div>
</template>

<script>
import BodyStore from '../../components/body/BodyStore';
import Cartmini from '@/components/cart/Cartmini.vue';
export default {
    name: 'stores',
    components: {
        BodyStore,
        Cartmini
    },
};
</script>

<style scoped></style>
