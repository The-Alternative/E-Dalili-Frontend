<template>
    <div class="parent">
        <dash />
        <div class="contain">brand_dash</div>
    </div>
</template>

<script>
import dash from '../view/dash';
export default {
    name: 'brand_dash',
    components: { dash },
    data() {
        return {};
    },
    computed: {},
};
</script>
<style scoped>
.parent {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas:
        'option selected selected new_product new_product . . . . .'
        'option contain contain contain contain contain contain contain contain contain';
}
.option_dash {
    grid-area: option;
    background-color: #ccc;
}

.selected {
    grid-area: selected;
    margin: 10px;
    padding: 10px;
}
.contain {
    width: 100%;
    grid-area: contain;
}
</style>
