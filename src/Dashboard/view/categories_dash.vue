<template>
    <div class="parent">
        <div class="col-12">
            <div class="option_dash col-2 mr-4">
                <select v-model="selected">
                    <option value="catlog" disabled>catlog</option>
                    <option value="Product">Product</option>
                    <option value="Catogeries">Catogeries</option>
                    <option value="Brands">Brands</option>
                    <option value="Custom field">Custom field</option>
                </select>
            </div>
            <div class="contain m-4 col-10">
                <div class="container">
                    <div class="float-right row m-6">
                        <button
                            class="btn btn-info float-right"
                            @click="showAddModal = true"
                        >
                            <i class="fa fa-plus"></i>
                            &nbsp;&nbsp; Add New Category
                        </button>
                    </div>
                    <hr class="bg-info mt-5" />
                    <div class="alert alert-danger" v-if="errorMsg">
                        Error Massage
                    </div>
                    <div class="alert alert-success" v-if="successMsg">
                        Success Massage
                    </div>
                </div>
                <div class="nav_Product">
                    <table class="table table-striped product">
                        <thead>
                            <tr class="text-center bg-info text-light">
                                <th class="id">Id</th>
                                <th class="img">Image</th>
                                <th class="name">Name</th>
                                <th class="status">Status</th>
                                <th class="edit">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="text-center"
                                v-for="items in Categories"
                                :key="items"
                                :id="items.id"
                            >
                                <td>
                                    <input
                                        style="margin: 0px 10px"
                                        type="checkbox"
                                    />{{ items.id }}
                                </td>
                                <td>
                                    <img v-lazy="`${items.image}`" />
                                </td>
                                <td>
                                    <div v-if="tagEditingId == items.id">
                                        <input
                                            type="text"
                                            :id="`tag-edit-${items.id}`"
                                            v-model="items.name"
                                            @blur="updateTag(items)"
                                        />
                                    </div>
                                    <div v-else @click="setToEditing(items)">
                                        {{ items.name }}
                                    </div>
                                </td>
                                <td>
                                    <i
                                        v-if="items.is_active == 'Active'"
                                        class="fa fa-check"
                                    ></i>
                                    <i v-else class="fa fa-times"></i>
                                </td>
                                <td class="Action">
                                    <a class="text-info mr-4"
                                        ><i class="fa fa-eye"></i
                                    ></a>
                                    <a
                                        class="text-success mr-4"
                                        @click="showEditModal = true"
                                        ><i class="fa fa-edit"></i
                                    ></a>
                                    <a
                                        class="text-danger"
                                        @click="showDeleteModal = true"
                                        ><i class="fa fa-trash-alt"></i
                                    ></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Add new category -->
                <div id="overlay1" v-if="showAddModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add New Category</h5>
                                <button
                                    type="button"
                                    class="close"
                                    @click="showAddModal = false"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body p-4">
                                <form
                                    action=""
                                    @submit="onSubmit"
                                    method="post"
                                >
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            class="form-control form-control-lg"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            name="status"
                                            class="form-control form-control-lg"
                                            placeholder="Status"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <button
                                            type="submit"
                                            class="btn btn-info btn-block btn-lg"
                                            @click="showAddModal = false"
                                        >
                                            Add Category
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Edit category -->
                <div id="overlay2" v-if="showEditModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Update Category</h5>
                                <button
                                    type="button"
                                    class="close"
                                    @click="showEditModal = false"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body p-4">
                                <form action="" method="post">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            class="form-control form-control-lg"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            class="form-control form-control-lg"
                                            placeholder="Status"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <button
                                            class="btn btn-info btn-block btn-lg"
                                            @click="showEditModal = false"
                                        >
                                            Update Category
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Delete category -->
                <div id="overlay3" v-if="showDeleteModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Delete Category</h5>
                                <button
                                    type="button"
                                    class="close"
                                    @click="showDeleteModal = false"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body p-4">
                                <h4 class="text-danger">
                                    Are you sure want to delete this category?
                                </h4>
                                <h5>You are deleting 'category'</h5>
                                <hr />
                                <button
                                    class="btn btn-danger btn-lg"
                                    @click="showDeleteModal = false"
                                >
                                    Yes
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    class="btn btn-Success btn-lg"
                                    @click="showDeleteModal = false"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
// import uuid from 'uuid';
export default {
    name: 'categories_dash',
    components: {
        // category: () => import('../components/category.vue'),
    },
    data() {
        return {
            tagEditingId: '2',
            selected: 'catlog',
            errorMsg: '',
            successMsg: '',
            showAddModal: false,
            showEditModal: false,
            showDeleteModal: false,
        };
    },
    methods: {
        setToEditing(items) {
            this.tagEditingId = items.id;
            setTimeout(() => {
                document.getElementById(`tag-edit-${items.id}`).focus();
            }, 1);
        },
        updateTag() {
            // this.$store.dispatch('updateCategoryName',{items})
            this.tagEditingId = '';
        },
        // newCategory () {
        //     this.$router.push(`/new_category`);
        // },
        // ...mapActions(['addCategory']),
        // onSubmit(e) {
        //     e.preventDefault();
        //     const category = {
        //         id: uuid.v4(),
        //         name: this.name,
        //         status: this.status,
        //     };
        //     this.addCategory(category);
        // },
    },
    computed: {
        ...mapState(['Categories']),
    },
    mounted() {
        this.$store.dispatch('loadCategories');
    },
};
</script>
<style scoped>
.parent {
    width: 100%;
    height: auto;
}
.option_dash {
    background-color: #ccc;
}
.new_product {
    margin: 10px;
    padding: 10px;
}
.selected {
    margin: 10px;
    padding: 10px;
}
.contain {
    width: 100%;
    left: 15%;
}
.product {
    margin: auto;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.product img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px 0;
}
#overlay1,
#overlay2,
#overlay3 {
    position: fixed;
    top: 20px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
}
.Action a {
    cursor: pointer;
    color: #fff;
}
</style>
