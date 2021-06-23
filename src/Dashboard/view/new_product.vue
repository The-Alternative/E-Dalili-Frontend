<template>
    <div class="parent">
        <dash />
        <div class="selected">
            {{ selected }} <span style="color: red">/</span> New Product
        </div>

        <div class="custom">
            <div class="custom_Gender">Gender</div>
            <div>
                <input
                    id="radio1"
                    name="radios"
                    type="radio"
                    value="1"
                    v-model="products.customFeild[0].Gender[0].Male"
                />
                <label for="radio1">Male</label>
            </div>
            <div>
                <input
                    id="radio2"
                    name="radios"
                    type="radio"
                    value="1"
                    v-model="products.customFeild[0].Gender[0].Female"
                />
                <label for="radio2">Female</label>
            </div>
            <hr />
            <div class="custom_Size">Size</div>
            <div>
                <input
                    id="radio3"
                    name="radios"
                    type="radio"
                    value="1"
                    v-model="products.customFeild[1].Size[0].Large"
                />
                <label for="radio3">Large</label>
            </div>
            <div>
                <input
                    id="radio4"
                    name="radios"
                    type="radio"
                    value="1"
                    v-model="products.customFeild[1].Size[0].Medium"
                />
                <label for="radio4">Medium</label>
            </div>
            <div>
                <input
                    id="radio5"
                    name="radios"
                    type="radio"
                    value="1"
                    v-model="products.customFeild[1].Size[0].Small"
                />
                <label for="radio5">Small</label>
            </div>
            <hr />
            <div class="custom_Brand">Brand</div>
            <div v-for="item in Brands" :key="item.id">
                <input type="checkbox" /> {{ item.name }}
            </div>
        </div>
        <div class="contain">
            <form>
                <input
                    type="text"
                    v-model="products.product[0].name"
                    placeholder="name"
                />
                <hr />
                <br />
                <br />

                <input
                    type="text"
                    v-model="products.product[0].long_des"
                    placeholder="long_des"
                />
                <hr />
                <br />
                <br />

                <div></div>
                <input
                    type="text"
                    v-model="products.product[0].short_des"
                    placeholder="short_des"
                />
                <hr />
                <br />
                <div>img</div>
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

            <button class="save" @click="postPost()">save</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
//import axios from 'axios';
import dash from '../view/dash';
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
                        Gender: [
                            {
                                Male: 0,
                                Female: 0,
                            },
                        ],
                    },
                    {
                        Size: [
                            {
                                Large: 0,
                                Medium: 0,
                                Small: 0,
                            },
                        ],
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
            //  axios.post(
            //     'http://edalili.e-dalely.com/public/api/products/create',
            //     this.products
            // );

            console.log(JSON.stringify(this.products));
        },
    },
    computed: {
        ...mapState(['Brands']),
    },
    mounted() {
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
.parent .save {
    background-color: #18ade8;
    border: none;
    padding: 10px;
    width: 80px;
    color: #fff;
    margin: 20px;
    border-radius: 10px;
}
.custom {
    width: 100%;
    background-color: #ddd;
    grid-area: custom;
}
.custom_Gender,
.custom_Size,
.custom_Brand {
    margin: 10px;
    border: 1px solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    background-color: #dec;
}
.selected {
    grid-area: selected;
    margin: auto;
    padding: 10px;
    background-color: #eee;
}
.contain {
    width: 100%;
    grid-area: contain;
}
form input {
    border: none;
}
form input:focus {
    outline: none;
}
form input:focus::placeholder {
    color: transparent;
}
form hr {
    width: 200px;
    margin: 0 auto;
}
</style>
