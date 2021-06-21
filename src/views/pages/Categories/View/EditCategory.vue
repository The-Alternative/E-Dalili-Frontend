<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditDoctorsForm data-background-color="green"> </EditDoctorsForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesDoctor> </UploadImagesDoctor>
      </div>
    </div>
  </div>
</template>

<script>
import  EditDoctorsForm from "../component/EditCategoriesForm.vue";
import  UploadImagesDoctor  from "../component/UploadImagesCategory.vue";
export default {
  name: "EditCategory",
  components: {
    EditDoctorsForm,
    UploadImagesDoctor,
  },
};
</script>
