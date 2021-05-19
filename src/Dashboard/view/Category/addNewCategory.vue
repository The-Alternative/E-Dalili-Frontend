<template>
    <div class="m-5">
        <h5 class="modal-title">Add New Category</h5>
        <div class="row">
            <div id="overlay1 mt-5 col-9">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body p-4">
                            <form>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        class="form-control form-control-lg"
                                        placeholder="Name"
                                        v-model="items.name"
                                    />
                                </div>
                                <!-- <div class="form-group">
                                    <input
                                        type="text"
                                        name="status"
                                        class="form-control form-control-lg"
                                        placeholder="Status"
                                        v-model="items.is_active"
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        name="image"
                                        class="form-control form-control-lg"
                                        placeholder="ImageURL"
                                        v-model="items.image"
                                    />
                                </div> -->
                                <div class="form-group">
                                    <button
                                        type="submit"
                                        class="btn btn-info btn-block btn-lg"
                                        @click="createCategory"
                                    >
                                        Add Category
                                    </button>
                                </div>
                            </form>
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
                            <h5 class="card-title">{{ items.name }}</h5>
                            <!-- <p class="card-text">
                                {{ items.is_active }}
                            </p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addnewcategory',
    data () {
        return {
            showAddModal: false,
            Categories:{
                "category":[
                    {
                        "name":null,
                        "local":"en",
                        "language_id":1
                    },
                    {
                        "name":null,
                        "local":"fr",
                        "language_id":1
                    },
                    {
                        "name":null,
                        "local":"ar",
                        "language_id":1
                    },
                ],
                "sulg":"bjhbh",
                "is_active":1,
                "parent_id":3,
                "image":null,
                "lang_id":1,
                "section_id":1,
                "created_at":null,
                "updated_at":null
            },
            items: {},
        };
    },
    methods: {
        createCategory () {
            this.$store.dispatch('CreateCategory', this.items);
        },
    },
};
</script>
