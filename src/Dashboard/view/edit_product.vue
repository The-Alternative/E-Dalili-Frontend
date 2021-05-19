<template>
    <div class="parent">
        <div class="option_dash">
            <select>
                <option value="catlog" disabled>catlog</option>
                <option value="Product">Product</option>
                <option value="Catogeries">Catogeries</option>
                <option value="Brands">Brands</option>
                <option value="Custom field">Custom field</option>
            </select>
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
                    v-model="products.product[0].long_des"
                    placeholder="long_des"
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
                    v-model="products.image"
                    placeholder="img url"
                />
                <br />
            </form>

            <button @click="updateProduct()">save</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
    name: 'new_product',
    components: {},
    data () {
        return {
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
        // Pushes posts to the server when called.
        updateProduct () {
            axios.put(
                `/api/products/update/${this.ProductID[0].id}`,
                this.products
            );
            console.log(JSON.stringify(this.products));
        },
    },
    computed: {
        ...mapState(['ProductID']),
    },
    mounted () {
        this.$store.dispatch('loadProduct', this.$route.params.id);
    },
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
form input {
    margin: 20px;
}
</style>
