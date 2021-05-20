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
    data() {
        return {
            categories: {
                category: [
                    {
                        name: 'mknkn',
                        local: 'en',
                        language_id: 1,
                    },
                    {
                        name: 'ljlkjlkj',
                        local: 'fr',
                        language_id: 1,
                    },
                    {
                        name: null,
                        local: 'ar',
                        language_id: 1,
                    },
                ],
                slug: 'hbhjb',
                is_active: 1,
                parent_id: 1,
                image: 'https://img.lovepik.com/photo/50015/8348.jpg_wh860.jpg',
                lang_id: 1,
                section_id: 1,
                created_at: null,
                updated_at: null,
            },
        };
    },
    computed: {
        ...mapState(['CategoryID']),
    },
    mounted() {
        this.$store.dispatch('loadCategory', this.$route.params.id);
    },
    methods: {
        updateCategory() {
            axios.put(
                `http://edalili.e-dalely.com/public/api/categories/update/${this.CategoryID.id}`,
                this.categories
            );
            console.log(JSON.stringify(this.categories));
            this.$router.push({ name: 'categories_dash' });
        },
    },
};
</script>
