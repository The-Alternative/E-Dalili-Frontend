<template>
    <div id="overlay2 mt-5">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Update Category {{ categories.category[0].name }}
                    </h5>
                </div>
                <div class="modal-body p-4">
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Name"
                            v-model="categories.category[0].name"
                        />
                    </div>
                    <!-- <div class="form-group">
                            <input
                                type="text"
                                name="is_active"
                                class="form-control form-control-lg"
                                placeholder="Status"
                                v-model="items.is_active"
                            />
                        </div> -->
                    <div class="form-group">
                        <button
                            class="btn btn-info btn-block btn-lg"
                            @click="updateCategory()"
                        >
                            Update Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
    name: 'categoryEdit',
    props: ['id'],
    data(){
        return{
            categories: {
 "category": [
      {
                        "name": null,
                        "local": "en",
                        "language_id": 1,
                    },
                    {
                        "name": "vghvhh",
                        "local": "fr",
                        "language_id": 1,
                    },
                    {
                        "name":"خضار" ,
                        "local": "ar",
                        "language_id": 1,
                    },
                ],
                "sulg": "kmmkm",
                "is_active": 1,
                "parent_id": 3,
                "image": 'cdfgcgf',
                "lang_id": 1,
                "section_id": 1,
                "created_at": 1,
                "updated_at": 1,
            },
        }
    },
    computed: {
        ...mapState(['Categories']),
        items () {
            return this.Categories.find((v) => v.id == this.$route.params.id);
        },
    },
    methods: {
        //     this.$router.push({ name: 'categories_dash' });
        updateCategory () {
            axios.put(
                `http://edalili.e-dalely.com/public/api/categories/update/${this.items.id}`,
                this.categories
            );
            console.log(JSON.stringify(this.categories));
        },
    },
};
</script>
