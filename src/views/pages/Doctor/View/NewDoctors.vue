<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <NewDoctorsForm data-background-color="green"> </NewDoctorsForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesDoctor> </UploadImagesDoctor>
      </div>
    </div>
  </div>
</template>

<script>
import  NewDoctorsForm from "../component/NewDoctorsForm.vue";
import  UploadImagesDoctor  from "../component/UploadImagesDoctor.vue";
export default {
  name: "newdoctor",
  components: {
    NewDoctorsForm,
    UploadImagesDoctor,
  },
};
</script>
