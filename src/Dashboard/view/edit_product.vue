<template>
    <div class="parent">
        <dash />
        <div class="selected">
            {{ selected }} <span style="color: red">/</span> Edit Product
        </div>
        <div class="custom">
            <div>Brand</div>
            <div v-for="brand in Brands" :key="brand.id">
                <input type="checkbox" /> {{ brand.name }}
            </div>
        </div>
        <div class="contain">
            <form>
                <input
                    type="text"
                    v-model="products.product[0].name"
                    placeholder="name"
                />
                <br />
                <input
                    type="text"
                    v-model="products.product[0].short_des"
                    placeholder="short_des"
                />
                <br />
                <input
                    type="text"
                    v-model="products.product[0].long_des"
                    placeholder="long_des"
                />
                <br />

                <select v-model="products.image">
                    <option disabled value="">Please select img</option>
                    <option
                        value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6iZq7N0bOew1ttlwpQRgf-SmI4MHbWZU3Q&usqp=CAU"
                    >
                        img 1
                    </option>
                    <option
                        value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6iZq7N0bOew1ttlwpQRgf-SmI4MHbWZU3Q&usqp=CAU"
                    >
                        img 2
                    </option>
                    <option
                        value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6iZq7N0bOew1ttlwpQRgf-SmI4MHbWZU3Q&usqp=CAU"
                    >
                        img 3
                    </option>
                </select>
            </form>

            <button class="save" @click="updateProduct()">save</button>
        </div>
    </div>
</template>

<script>
import dash from '../view/dash';
import { mapState } from 'vuex';
import axios from 'axios';
export default {
    name: 'new_product',
    components: { dash },
    data() {
        return {
            selected: localStorage.getItem('selected'),
            products: {
                product: [
                    {
                        local: 'ar',
                        name: null,
                        meta: 'arefe',
                        short_des: null,
                        long_des: null,
                    },
                    {
                        local: 'en',
                        name: 'efen',
                        meta: 'efefen',
                        short_des: 'en en',
                        long_des: 'en en',
                    },
                    {
                        local: 'fr',
                        name: 'ffer',
                        meta: 'ffefr',
                        short_des: 'fr fr',
                        long_des: 'fr fr',
                    },
                ],
                brand_id: '1',
                barcode: 'mobiles',
                slug: 'mobiles',
                rating_id: 1,
                offer_id: 1,
                image: null,
                custom_feild_id: 1,
                is_active: 1,
                is_appear: 1,
                category_id: 2,
                category: [
                    {
                        category_id: 1,
                    },
                    {
                        category_id: 2,
                    },
                    {
                        category_id: 3,
                    },
                ],
                customFeild: [
                    {
                        customfield_id: 1,
                    },
                    {
                        customfield_id: 2,
                    },
                    {
                        customfield_id: 3,
                    },
                ],
                images: [
                    {
                        product_id: 1,
                        image: 'asdasd',
                        is_cover: 1,
                    },
                    {
                        product_id: 1,
                        image: 'asdasd',
                        is_cover: 0,
                    },
                    {
                        product_id: 1,
                        image: 'asdasd',
                        is_cover: 0,
                    },
                ],
            },
        };
    },
    methods: {
        // Pushes posts to the server when called.//
        updateProduct() {
            axios.put(
                `/api/products/update/${this.ProductID[0].id}`,
                this.products
            );
            console.log(JSON.stringify(this.products));
        },
    },
    computed: {
        ...mapState(['ProductID', 'Brands']),
    },
    mounted() {
        this.$store.dispatch('loadProduct', this.$route.params.id);
        this.$store.dispatch('loadBrands');
    },
};
</script>
<style scoped>
.parent {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas:
        'option selected selected new_product new_product . . . custom custom'
        'option contain contain contain contain contain contain contain custom custom';
}

.selected {
    grid-area: selected;
    margin: auto;
    padding: 10px;
    background-color: #eee;
}
.custom {
    width: 100%;
    background-color: #ddd;
    grid-area: custom;
}
.contain {
    width: 100%;
    grid-area: contain;
}
form input {
    margin: 20px;
}
.parent .save {
    background-color: #18ade8;
    border: none;
    padding: 10px;
    width: 80px;
    color: #fff;
    margin: 20px;
    border-radius: 10px;
}
</style>
