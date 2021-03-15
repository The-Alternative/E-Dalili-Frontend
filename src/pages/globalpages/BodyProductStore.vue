<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
        <div class="product-top">
            <img
                src="../../../public/img/w.jpg"
                class="new"
            />
            <div class="overlay">
                <button type="button" class="btn btn-secondary" title="Quick Shop">
                    <i class="fa fa-eye"></i>
                </button>
                <button type="button" class="btn btn-secondary" id="heart" title="Add to wishlist">
                    <i class="fa fa-heart"></i>
                </button>
                <button type="button" class="btn btn-secondary cartshop" id="cart" title="Add to cart">
                    <i class="fa fa-shopping-cart"></i>
                </button>
            </div>
        </div>
        <div class="product-bottom text-center">
            <div class="stars">
                <i class="fa fa-star  checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star"></i>
            </div>
            <div class="name-prod">
                bbb
            </div>
            <div class="category">
                bb
            </div>
            <div>
                <span> 80.00 ل.س</span>
                <div class="price" style="display: inline-block"></div>
            </div>
            <div class="avilble">
                <div style="display: inline-block"></div>
                <span class="fa fa-check-circle"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Products',
    props: ['id', 'title', 'description', 'price'],
    data() {
        return {
            details: {
                id: this.id,
                title: this.title,
                description: this.description,
                price: this.price,
            },
        };
    },
    methods: {
        // goto: function(i, t, d, p) {
        //     this.$router.push(`ProductDetalis/${i}/${t}/${d}/${p}`);
        // },
        // heartlike: function() {
        //     this.$el.lastChild.lastChild.lastChild.classList.toggle('is-active');
        // },
        addToCart() {
            this.$store.dispatch('addToCart', this.details);
            this.$el.animate(
                [
                    // keyframes
                    {
                        transform:
                            'perspective(500px) translate3d(-200px, 1000px,-10000px)',
                    },
                ],
                {
                    // timing options
                    duration: 1000,
                }
            );
            document.getElementById('cart').animate(
                [
                    // keyframes
                    { transform: 'rotate(-20deg)' },
                    { transform: 'rotate(20deg)' },
                    { transform: 'scale(3,3)' },
                    { transform: 'scale(1,1)' },
                ],
                {
                    // timing options
                    duration: 1000,
                }
            );
        },
    },
    computed: {
        // count() {
        //     return this.$store.state.count;
        // },
    },
};
</script>

<style scoped>
.coler{
    width: 100%;
    margin-top:10px ;
    letter-spacing: 1px;
}
.new {
    width: 100%;
    cursor: pointer;
}
.overlay{
    display: block;
    opacity: 0;
    position: absolute;
    top: 10%;
    margin-left: 0;
    width:70px;
}
.product-top:hover .overlay{
    opacity: 1;
    margin-left: 5%;
    transition: 0.5s;
}
.overlay .fa{
    cursor: pointer;
    background-color: #fff;
    color: #000;
    height: 35px;
    width: 35px;
    font-size: 20px;
    padding: 7px;
    margin: 5%;
    margin-bottom: 5%;
}
.overlay .btn-secondary{
    background:transparent !important;
    border: none !important;
    box-shadow: none !important;
}
.cartshop:hover {
    background-color: #d3b85f;
}
.name-prod,
.category {
    cursor: pointer;
}
.checked {
    color: #dcd741;
}
.avilble {
    color: #19e653;
}
.avilble div {
    margin-right: 10px;
}
</style>
