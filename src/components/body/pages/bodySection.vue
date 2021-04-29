<template>
    <div class="mt-5 mb-5">
        <Cartmini />
        <div class="row align-middle cont-market">
            <div
                v-for="category in Categories.slice(0, 4)"
                :key="category.id"
                class="col-lg-3 col-md-3 col-sm-6  column"
            >
                <div class="card card-market">{{ category }}</div>
            </div>
        </div>
        <div class="show-prod mt-5">
            <div class="all-section">
                <span class="text">ALL PRODUCT</span>
            </div>
            <div class="row mt-2">
                <BodyProductStore
                    v-for="items in product"
                    :key="items.pr"
                    :id="items.id"
                    :price="items.price"
                    :title="items.title"
                    :description="items.description"
                    v-on:click="gotodetails(id, title, description, price)"
                >
                </BodyProductStore>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bodySection',
    props: ['id', 'title', 'workingHours'],
    components: {
        BodyProductStore: () =>
            import('@/components/body/pages/BodyProductStore'),
        Cartmini: () => import('@/components/cart/Cartmini.vue'),
    },
    computed: {
        Categories() {
            return this.$store.state.Categories;
        },
        product() {
            return this.$store.state.stores[0].products;
        },
    },
    methods: {
        gotodetails(i, t, d, p) {
            this.$router.push(`ProductDetailsStore/${i}/${t}/${d}/${p}`);
        },
    },
};
</script>

<style scoped>
.card {
    /*min-height: 240px;*/
    margin: 0;
    padding: 1.7rem 1.2rem;
    border: none;
    border-radius: 0;
    color: rgba(0, 0, 0, 1);
    letter-spacing: 0.05rem;
    font-family: 'Oswald', sans-serif;
    box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
    cursor: pointer;
    transition: all 0.8s ease-in-out;
}
.card:hover {
    transform: scale(1.2);
    background-color: #0f6674;
}
.card-market {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    justify-content: center;
    align-items: center;
}
.cont-market {
    margin: 0 20px;
}
.row {
    justify-content: center;
}
.show-prod {
    /*margin-bottom: 10%;*/
    background-color: #fefefe;
    margin: 20px 20px;
    height: 100%;
    border-radius: 10px;
}
</style>
