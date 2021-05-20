<template>
    <div class="parent">
        <div class="selected">{{ selected }} <span style="color:red">/</span> New Product</div>
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
                <div>name</div>
                <input
                    type="text"
                    v-model="products.product[0].name"
                    placeholder="name product"
                />
                <br />

                <div>long_dsicription</div>
                <input
                    type="text"
                    v-model="products.product[0].long_des"
                    placeholder="long_des"
                />
                <br />

            <div>short_dsicription</div>  
            <input type="text" v-model='products.product[0].short_des' placeholder="short_des"> <br/>
            <div>img</div> 
                            <select v-model="products.image">
                        <option disabled value="">Please select img</option>
                        <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6iZq7N0bOew1ttlwpQRgf-SmI4MHbWZU3Q&usqp=CAU">img 1</option>
                        <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6iZq7N0bOew1ttlwpQRgf-SmI4MHbWZU3Q&usqp=CAU">img 2</option>
                        <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6iZq7N0bOew1ttlwpQRgf-SmI4MHbWZU3Q&usqp=CAU">img 3</option>
                </select>
        </form>

            <button class="save" @click="postPost()">save</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'new_product',
    components: {},
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
                image: 1,
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
        postPost() {
            axios.post(
                'http://edalili.e-dalely.com/public/api/products/create',
                this.products
            );
            console.log(JSON.stringify(this.products));
        },
    },
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
.parent .save{
    background-color: #18ade8;
    border: none;
    padding: 10px;
    width: 80px;
    color: #fff;
    margin: 20px;
    border-radius: 10px;
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
