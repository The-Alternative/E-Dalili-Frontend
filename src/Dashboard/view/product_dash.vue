<template>
    <div class="parent">
        <div class="option_dash">
            <select v-model="selected">
                <option value="catlog" disabled>catlog</option>
                <option value="Product">Product</option>
                <option value="Catogeries">Catogeries</option>
                <option value="Brands">Brands</option>
                <option value="Custom field">Custom field</option>
            </select>
        </div>
        <div class="selected">{{ selected }}</div>
        <div class="new_product">
            <button @click="newProduct">New Product</button>
        </div>
        <div class="contain">
            <div class="nav_Product">
                <div class="id">id</div>
                <img class="img" src="" />
                <div class="name">name</div>

                <div class="status">status</div>
                <div class="edit">edit</div>
                <product
                    v-for="items in Product"
                    :key="items"
                    :id="items.id"
                    :name="items.name"
                    :image="items.image"
                    :is_appear="items.is_appear"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Product from '../components/product.vue';
import { mapState } from 'vuex';
export default {
    name: 'product_dash',
    components: {
        Product,
    },
    data() {
        return {
            selected: 'catlog',
        };
    },
    methods: {
        newProduct() {
            this.$router.push(`/new_product`);
        },
    },
    computed: {
        ...mapState(['Product']),
    },
    mounted() {
        this.$store.dispatch('loadProducts');
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
.new_product {
    grid-area: new_product;
    margin: 10px;
    padding: 10px;
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
.nav_Product {
    display: grid;
    grid-template-areas:
        'id img name status edit'
        'product product product product product';
}
.Contain_Product .id {
    grid-area: id;
}
.Contain_Product .img {
    grid-area: img;
}
.Contain_Product .status {
    grid-area: status;
}
.Contain_Product .edit {
    grid-area: edit;
}
.Contain_Product .product {
    grid-area: product;
}
</style>
