<template>
  
        <div class="option_dash">
            <select v-model="selected" @change="handleChange($event)">
                <option value="catlog" disabled>catlog</option>

                <option @click="gotoProductAll" value="Product">Product</option>

                <option @click="gotoCategoriesAll" value="Catogeries">
                    Catogeries
                </option>
                <option @click="gotoBrandAll" value="Brands">Brands</option>
                <option value="Custom field">Custom field</option>
            </select>
     
        <!-- <div class="selected">{{selected}}</div>  -->



    </div>
</template>

<script>
export default {
    name: 'Admin',

    components: {},
    data() {
         
        return {
           selected: localStorage.getItem('selected'),
        };
    },
    methods: {
        gotoProductAll() {
            this.$router.push(`/Admin/product_dash`);
        },
        gotoCategoriesAll() {
            this.$router.push(`/categories_dash`);
        },
        gotoBrandAll() {
            this.$router.push(`/brand_dash`);
        },
        handleChange(event) {
            localStorage.setItem('selected', event.target.value);
           
        },
    },
    computed: {},
};
</script>
<style>
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
