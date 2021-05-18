<template>
    <div id="overlay2 mt-5">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Update Category {{ items.name }}
                    </h5>
                </div>
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
                        <div class="form-group">
                            <input
                                type="text"
                                name="is_active"
                                class="form-control form-control-lg"
                                placeholder="Status"
                                v-model="items.is_active"
                            />
                        </div>
                        <div class="form-group">
                            <button
                                class="btn btn-info btn-block btn-lg"
                                @click="updateCategory"
                            >
                                Update Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'categoryEdit',
    computed: {
        ...mapState(['Categories']),
        items () {
            return this.Categories.find((v) => v.id == this.$route.params.id);
        },
    },
    methods: {
        async updateCategory () {
            await this.$store.dispatch('UpdateCategory', this.items.id);
            this.$router.push({ name: 'categories_dash' });
        },
    },
};
</script>
