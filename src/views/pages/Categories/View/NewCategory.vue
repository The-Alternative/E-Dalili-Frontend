<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <NewCategoriesForm data-background-color="green"> </NewCategoriesForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesCategory> </UploadImagesCategory>
      </div>
    </div>
  </div>
</template>

<script>
import  NewCategoriesForm from "../component/NewCategoriesForm.vue";
import  UploadImagesCategory  from "../component/UploadImagesCategory.vue";
export default {
  name: "NewCategory",
  components: {
    NewCategoriesForm,
    UploadImagesCategory,
  },
};
</script>
