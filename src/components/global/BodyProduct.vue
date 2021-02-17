<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
        <div class="content-pro text-center">
            <img src="@/assets/w.jpg" class="new" />
            <div class="name-prod">{{ title }}</div>
            <div class="category">{{ description }}</div>

            <div class="stars">
                <span class="fa fa-star  checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>
            <div>
                <span>ل.س{{ price }} </span>
                <div class="price" style="display: inline-block"></div>
            </div>
            <div class="avilble">
                <div style="display: inline-block">متوفر في متاجر</div>
                <span class="fa fa-check-circle"></span>
            </div>
            <button
                @click="goto(id, title, description, price)"
                type="button"
                class="btn btn-light"
            >
                اختیار
            </button>
            <span @click="addToCart" class="cartshop"
                ><i class="fa fa-shopping-cart"></i
            ></span>
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
        goto: function(i, t, d, p) {
            this.$router.push(`ProductDetalis/${i}/${t}/${d}/${p}`);
        },
        addToCart() {
            this.$store.dispatch('addToCart', this.details);
        },
    },
    computed: {
        count() {
            return this.$store.state.count;
        },
    },
};
</script>

<style scoped>
/* body of products */
.cartshop {
    background-color: #ccc;
    width: 20px;
    padding: 11px;
    border-radius: 50%;
}
.cartshop:hover {
    background-color: #d3b85f;
}
.coler .rot {
    color: #585b5e;
    text-decoration: none;
}

.show-prod .row .content-pro {
    font-size: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    margin-top: 10vh;
    margin-bottom: 10vh;
}
.show-prod .row .content-pro .new {
    width: 100%;
}
.show-prod .row .content-pro .stars {
    margin-top: 20px;
}
.show-prod .content-pro .checked {
    color: #dcd741;
}
.show-prod .content-pro .avilble {
    color: #19e653;
}
.show-prod .content-pro .avilble div {
    margin-right: 10px;
}
.show-prod .content-pro button {
    background-color: #a5abac;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 13px;
    font-weight: 1;
    padding: 10px 20px;
    width: 80px;
    font-size: 14px;
}
.show-prod .content-pro button:hover {
    background-color: #d3b85f;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-prod .row .content-pro {
        font-size: 10px;
        height: auto;
        margin-top: 5vh;
    }
    .show-prod .row .content-pro .name-prod {
        margin-bottom: 10px;
    }

    .show-prod .reower .col-xs-6 {
        flex: 1 0 50%;
        max-width: 50%;
    }
    .show-prod .content-pro button {
        margin-top: 12px;
        border-radius: 13px;
        font-weight: 1;
        padding: 5px 10px;
        width: 50px;
    }
}
</style>
