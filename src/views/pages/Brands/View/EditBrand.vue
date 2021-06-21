<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditBrandForm data-background-color="green"> </EditBrandForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesBrand> </UploadImagesBrand>
      </div>
    </div>
  </div>
</template>

<script>
import  EditBrandForm from "../component/EditBrandForm.vue";
import  UploadImagesBrand  from "../component/UploadImagesBrand.vue";
export default {
  name: "editbrand",
  components: {
    EditBrandForm,
    UploadImagesBrand,
  },
};
</script>
