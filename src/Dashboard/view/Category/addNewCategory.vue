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
                                    name="name"
                                    class="form-control form-control-lg"
                                    placeholder="Name"
                                    v-model="Categories.category[0].name"
                                />
                            </div>

                            <!-- <div class="form-group">
                                    <input
                                        type="text"
                                        name="image"
                                        class="form-control form-control-lg"
                                        placeholder="ImageURL"
                                        v-model="items.image"
                                    />
                                </div>  -->
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
            <div class="col-3 card ml-5" style="max-width: 540px;">
                <div class="row no-gutters">
                    <!-- <div class="col-md-4">
                        <img
                            :src="items.image"
                            width="50%"
                            height="100%"
                            class="card-img"
                        />
                    </div> -->
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
    data () {
        return {
            // showAddModal: false,
            Categories: {
    "category": [
        {
            "name": null,
            "local": "en",
            "language_id": 1
        },
        {
            "name": "fahed",
            "local": "fr",
            "language_id": 1
        },
        {
            "name": "فهد",
            "local": "ar",
            "language_id": 1
        }
    ],
    "slug": "فهد",
    "is_active": 1,
    "parent_id": 3,
    "image": "fafaffafa",
    "lang_id": 1,
    "section_id":1,
    "created_at": 1,
    "updated_at": 1
}
            // items: {},
        };
    },
    methods: {
        postCategory () {
            axios.post(
                'http://edalili.e-dalely.com/public/api/categories/create',
                this.Categories
            );
            console.log(JSON.stringify(this.Categories));
        },

        // createCategory () {
        //     this.$store.dispatch('CreateCategory', this.items);
        // },
    },
};
</script>
