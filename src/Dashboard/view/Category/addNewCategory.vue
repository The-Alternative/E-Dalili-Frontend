<template>
    <div class="m-5">
        <h5 class="modal-title">Add New Category</h5>
        <div class="row">
            <div id="overlay1 mt-5 col-9">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body p-4">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Name"
                                    v-model="Categories.category[0].name"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Status"
                                    v-model="Categories.sulg"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="ImageURL"
                                    v-model="Categories.image"
                                />
                            </div>
                            <div class="form-group">
                                <button
                                    class="btn btn-info btn-block btn-lg"
                                    @click="postCategory()"
                                >
                                    Add Category
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 card ml-5" style="max-width: 540px">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img :src="Categories.image" class="card-img" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ Categories.category[0].name }}
                            </h5>
                            <p class="card-text">
                                {{ Categories.sulg }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'addnewcategory',
    data() {
        return {
            // showAddModal: false,
            Categories: {
                category: [
                    {
                        name: null,
                        local: 'en',
                        language_id: 1,
                    },
                    {
                        name: 'vghvhh',
                        local: 'fr',
                        language_id: 1,
                    },
                    {
                        name: 'خضار',
                        local: 'ar',
                        language_id: 1,
                    },
                ],
                sulg: null,
                is_active: 1,
                parent_id: 3,
                image: null,
                lang_id: 1,
                section_id: 1,
                created_at: 1,
                updated_at: 1,
            },
        };
    },
    methods: {
        postCategory() {
            axios.post(
                'http://edalili.e-dalely.com/public/api/categories/create',
                this.Categories
            );
            console.log(JSON.stringify(this.Categories));
            this.$router.push({ name: 'categories_dash' });
        },
    },
};
</script>
<style scoped>
img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: auto;
}
</style>
