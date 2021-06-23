<template>
    <div class="parent">
        <dash />
        <div class="selected">{{ selected }}</div>
        <div class="new_product">
            <button @click="newProduct">New Product</button>
        </div>
        <div class="contain">
            <div class="nav_Product">
                <div style="background-color: #ddd; padding: 20px" class="id">
                    id
                </div>
                <div style="background-color: #ddd; padding: 20px">
                    img<img class="img" src="" />
                </div>
                <div style="background-color: #ddd; padding: 20px" class="name">
                    name
                </div>

                <div
                    style="background-color: #ddd; padding: 20px"
                    class="status"
                >
                    status
                </div>
                <div style="background-color: #ddd; padding: 20px" class="edit">
                    edit
                </div>
                <product
                    v-for="items in Product"
                    :key="items.pr"
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
import dash from '../view/dash';
import Product from '../components/product.vue';
import { mapState } from 'vuex';
export default {
    name: 'product_dash',
    components: {
        Product,
        dash,
    },
    data() {
        return {
            selected: localStorage.getItem('selected'),
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
<style scoped>
.parent {
    font-size: 18px;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas:
        'option selected selected new_product new_product . . . . .'
        'option contain contain contain contain contain contain contain contain contain';
}
.new_product {
    border-radius: 5px;
    grid-area: new_product;
    margin: 10px;
}
.new_product button {
    border: none;
    background-color: #0eacc6;
    padding: 10px;
    color: #fff;
}

.selected {
    grid-area: selected;
    margin: 10px;
    padding: 10px;
    background-color: #eee;
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
