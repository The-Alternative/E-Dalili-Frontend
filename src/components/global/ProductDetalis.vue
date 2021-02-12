<template>
  <div class="ProductDetalis">
    <Cartmini />
    <div class="row">
      <div class="col-sm-6 col-xs-12">
        <div class="container mt-5" style="max-width:380px">
          <div class="carousel-container position-relative row">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-slide-number="0">
                  <img
                    src="@/assets/w.jpg"
                    class="d-block w-100"
                    alt="..."
                    data-remote="https://source.unsplash.com/Pn6iimgM-wo/"
                    data-type="image"
                    data-toggle="lightbox"
                    data-gallery="example-gallery"
                  />
                </div>
                <div class="carousel-item" data-slide-number="1">
                  <img
                    src="@/assets/w.jpg"
                    class="d-block w-100"
                    alt="..."
                    data-remote="https://source.unsplash.com/tXqVe7oO-go/"
                    data-type="image"
                    data-toggle="lightbox"
                    data-gallery="example-gallery"
                  />
                </div>
                <div class="carousel-item" data-slide-number="2">
                  <img
                    src="@/assets/w.jpg"
                    class="d-block w-100"
                    alt="..."
                    data-remote="https://source.unsplash.com/qlYQb7B9vog/"
                    data-type="image"
                    data-toggle="lightbox"
                    data-gallery="example-gallery"
                  />
                </div>
                <div class="carousel-item" data-slide-number="3">
                  <img
                    src="@/assets/w.jpg"
                    class="d-block w-100"
                    alt="..."
                    data-remote="https://source.unsplash.com/QfEfkWk1Uhk/"
                    data-type="image"
                    data-toggle="lightbox"
                    data-gallery="example-gallery"
                  />
                </div>
              </div>
            </div>

            <!-- Carousel Navigation -->
            <div
              id="carousel-thumbs"
              class="carousel slide"
              data-ride="carousel"
              style="padding: 0"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row mx-0">
                    <div
                      id="carousel-selector-0"
                      class="thumb col-4 col-sm-2 px-1 py-2 selected"
                      data-target="#myCarousel"
                      data-slide-to="0"
                      style="flex: 1 0 16.666667%;
               max-width: 25.667%;"
                    >
                      <img src="@/assets/w.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div
                      id="carousel-selector-1"
                      class="thumb col-4 col-sm-2 px-1 py-2"
                      data-target="#myCarousel"
                      data-slide-to="1"
                      style="flex: 1 0 16.666667%;
               max-width: 25.667%;"
                    >
                      <img src="@/assets/w.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div
                      id="carousel-selector-2"
                      class="thumb col-4 col-sm-2 px-1 py-2"
                      data-target="#myCarousel"
                      data-slide-to="2"
                      style="flex: 1 0 16.666667%;
               max-width: 25.667%;"
                    >
                      <img src="@/assets/w.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div
                      id="carousel-selector-3"
                      class="thumb col-4 col-sm-2 px-1 py-2"
                      data-target="#myCarousel"
                      data-slide-to="3"
                      style="flex: 1 0 16.666667%;
               max-width: 25.667%;"
                    >
                      <img src="@/assets/w.jpg" class="img-fluid" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xs-12">
        <div class="content-pro text-center">
          <div class="name-prod">Name Product: {{ details.title }}</div>
          <div class="category">description: {{ details.description }}</div>
          <div class="stars">
            <span class="fa fa-star  checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          </div>
          <div>
            <span>ل.س {{ price }}</span>
            <div class="price" style="display: inline-block"></div>
          </div>
          <div class="avilble">
            <div style="display: inline-block">متوفر في متاجر</div>
            <span class="fa fa-check-circle"></span>
          </div>
          <div class="row">
            <div class="col">
              <button @click="addToCart" type="button" class="btn btn-primary">
                add to cart
              </button>
            </div>
            <div class="col">
              <button @click="gotocart" type="button" class="btn btn-primary">
                go to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cartmini from "@/components/cart/Cartmini.vue";

export default {
    data(){
       return{
         details: {
        id :   this.id,
        title: this.title,
       description:this.description,
       price:this.price
                }
       }
    },
    components: {
    Cartmini
  },
  props: ["title","description","id","price"],
  computed: {
    count() {
      return this.$store.state.count;
    }
  },methods:{
    increment(){
      this.$store.commit("increment")
    },
    addItem(items) {
    this.$store.dispatch("addToCart", items);
  }, gotocart:function(){
         this.$router.push(`/Cart`)
     },addToCart() {
        this.$store.dispatch("addToCart", this.details);
       }
}
}
</script>
<style scoped>
.row {
  justify-content: center;
  margin: 0;
}
.carousel {
  position: relative;
}
.carousel-item img {
  object-fit: cover;
  border-radius: 5%;
}
#carousel-thumbs {
  background: rgba(255, 255, 255, 0.3);
  bottom: 0;
  left: 0;
  padding: 0 50px;
  right: 0;
}
#carousel-thumbs img {
  border: 5px solid transparent;
  cursor: pointer;
}
#carousel-thumbs img:hover {
  border-color: rgba(255, 255, 255, 0.3);
}
#carousel-thumbs .selected img {
  border-color: #fff;
}
.carousel-control-prev,
.carousel-control-next {
  width: 50px;
}
@media all and (max-width: 767px) {
  .carousel-container #carousel-thumbs img {
    border-width: 3px;
  }
}
@media all and (min-width: 576px) {
  .carousel-container #carousel-thumbs {
    position: absolute;
  }
}
@media all and (max-width: 576px) {
  .carousel-container #carousel-thumbs {
    background: #ccccce;
  }
}

/* product style */
.content-pro {
  font-size: 18px;
  margin-top: 10vh;
}
.content-pro div {
  margin-top: 3vh;
  margin-bottom: 3vh;
}
.content-pro .stars {
  margin-top: 20px;
}
.content-pro .checked {
  color: #dcd741;
}
.content-pro .avilble {
  color: #19e653;
}
.content-pro .avilble div {
  margin-right: 10px;
}
.content-pro button {
  background-color: #a5abac;
  width: 130px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 13px;
  font-weight: 1;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .content-pro {
    font-size: 15px;
  }
  .show-prod .reower .col-xs-6 {
    flex: 1 0 50%;
    max-width: 50%;
  }
  .show-prod .content-pro button {
    width: 80px;
    margin-top: 10px;
    border-radius: 13px;
    font-weight: 1;
  }
  .content-pro {
    margin-top: 2vh
}
.content-pro div {
  margin: 1vh 0;
}
.content-pro button{
  margin: 5px 0;
}
}
</style>
