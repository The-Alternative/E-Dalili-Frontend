<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditProductStor data-background-color="green"> </EditProductStor>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UpImagStrProd> </UpImagStrProd>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProductStor } from "../component/EditProductStor.vue";
import { UpImagStrProd } from "../component/UpImagStrProd.vue";
export default {
  components: {
    EditProductStor,
    UpImagStrProd
  }
};
</script>
