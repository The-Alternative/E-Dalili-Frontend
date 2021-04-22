<template>
    <div>
        <form class="col-lg-12 mt-5 mb-5" @submit="postDatastore" method="post">
            <div class="mb-3">
                <input
                    type="text"
                    name="title"
                    id="title"
                    v-model="stores.title"
                    placeholder="title"
                />
            </div>
            <div class="mb-3">
                <input
                    type="text"
                    name="delivery"
                    id="delivery"
                    v-model="stores.delivery"
                    placeholder="delivery"
                />
            </div>
            <div class="mb-3">
                <input
                    type="text"
                    name="edalilyPoint"
                    id="edalilyPoint"
                    v-model="stores.edalilyPoint"
                    placeholder="edalilyPoint"
                />
            </div>
            <div class="mb-3">
                <input
                    type="text"
                    name="workingHours"
                    id="workingHours"
                    v-model="stores.workingHours"
                    placeholder="workingHours"
                />
            </div>
            <div class="mb-3">
                <input
                    type="text"
                    name="logo"
                    id="logo"
                    v-model="stores.logo"
                    placeholder="logo"
                />
            </div>
            <button type="submit">ADD</button>
        </form>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
export default {
    name: 'addStore',
    data() {
        return {
            stores: {
                title: null,
                delivery: null,
                edalilyPoint: null,
                workingHours: null,
                logo: null,
            },
        };
    },
    methods: {
        postDatastore(e) {
            // this.axios.post(
            //     'http://edalili.e-dalely.com/public/api/stores/create',
            //     this.stores
            //         .then((result) => {
            //             console.warn(result);
            //         })
            //         .catch(function(error) {
            //             console.log('Error: ', error);
            //         })
            // );
            console.warn(this.stores);
            e.preventDefault();
        },
    },
};
</script>

<style scoped></style>
