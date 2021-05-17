<template>
    <div class="parent">
        <div class="option_dash">
            <select v-model="selected">
                <option value="catlog" disabled>catlog</option>

                <option @click="gotoProductAll" value="Product">Product</option>

                <option @click="gotoCategoriesAll" value="Catogeries">
                    Catogeries
                </option>
                <option @click="gotoBrandAll" value="Brands">Brands</option>
                <option value="Custom field">Custom field</option>
            </select>
        </div>
        <!-- <div class="selected">{{selected}}</div>  -->

        <div class="contain">
            <h2>get statred</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard',

    components: {},
    data() {
        return {
            selected: 'catlog',
        };
    },
    methods: {
        gotoProductAll() {
            this.$router.push(`/product_dash`);
        },
        gotoCategoriesAll() {
            this.$router.push(`/categories_dash`);
        },
        gotoBrandAll() {
            this.$router.push(`/brand_dash`);
        },
    },
    computed: {},
};
</script>
<style>
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
