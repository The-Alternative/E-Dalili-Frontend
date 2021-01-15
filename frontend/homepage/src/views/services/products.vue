<template>
  <div class="products">
    <!--  show img  -->
    <div class="show-img">
            <div class="container">
                <div class="row">
                <div class="col-md-6 img">
                    <img src="@/assets/S1.png">
                </div> 
                <div class="col-md-6 img">
                  <img src="@/assets/S2.png">
                </div>  
                </div>
            </div>
        </div>
        <!-- show first section products -->
       <!-- 11111111111111111111111111111111111111111111111111111111111111111111111111111111111  -->
               
    <div class="show-prod lg12">
        <div class="container">
            <div class="row">
                <BodyProduct class="col-lg-3" v-for="prod in prods.slice(0,4)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div>
       <!-- 222222222222222222222222222222222222222222222222222222222222222222222222222222222222 -->
       
    <div class="show-prod md12">
        <div class="container">
            <div class="row">
                <BodyProduct class="col-md-4" v-for="prod in prods.slice(0,3)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div>

        
               <!-- 333333333333333333333333333333333333333333333333333333333333333333333333333333 -->
    <div class="show-prod sm12">
        <div class="container">
            <div class="row">
                <BodyProduct class="col-sm-6" v-for="prod in prods.slice(0,2)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div>
  <!-- 444444444444444444444444444444444444444444444444444444444444444444444444444444444444 -->
    <div class="show-prod xs12">
        <div class="container"> 
            <div class="row">
                <BodyProduct class="col-xs-6" v-for="prod in prods.slice(0,2)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div> 
    <!-- show seconde section products -->
     <!-- 11111111111111111111111111111111111111111111111111111111111111111111111111111111111  -->
               
    <div class="show-prod lg12">
        <div class="container">
            <div class="row">
                <BodyProduct class="col-lg-3" v-for="prod in prods.slice(0,4)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div>
       <!-- 222222222222222222222222222222222222222222222222222222222222222222222222222222222222 -->
       
    <div class="show-prod md12">
        <div class="container">
            <div class="row">
                <BodyProduct class="col-md-4" v-for="prod in prods.slice(0,3)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div>

        
               <!-- 333333333333333333333333333333333333333333333333333333333333333333333333333333 -->
    <div class="show-prod sm12">
        <div class="container">
            <div class="row">
                <BodyProduct class="col-sm-6" v-for="prod in prods.slice(0,2)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div>
  <!-- 444444444444444444444444444444444444444444444444444444444444444444444444444444444444 -->
    <div class="show-prod xs12">
        <div class="container"> 
            <div class="row">
                <BodyProduct class="col-xs-6" v-for="prod in prods.slice(0,2)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div> 
   <!-- show market-->
    <div class="show-market">
        <img src="@/assets/IMG_1.png">
        <img src="@/assets/IMG_2.png">
        <img src="@/assets/IMG_3.png">
        <img src="@/assets/IMG_4.png">
        <img src="@/assets/IMG_5.png">
    </div>
        <!-- show third section products -->

         <!-- 11111111111111111111111111111111111111111111111111111111111111111111111111111111111  -->
               
    <div class="show-prod lg12">
        <div class="container">
            <div class="row">
                <BodyProduct class="col-lg-3" v-for="prod in prods.slice(0,4)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div>
       <!-- 222222222222222222222222222222222222222222222222222222222222222222222222222222222222 -->
       
    <div class="show-prod md12">
        <div class="container">
            <div class="row">
                <BodyProduct class="col-md-4" v-for="prod in prods.slice(0,3)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div>

        
               <!-- 333333333333333333333333333333333333333333333333333333333333333333333333333333 -->
    <div class="show-prod sm12">
        <div class="container">
            <div class="row">
                <BodyProduct class="col-sm-6" v-for="prod in prods.slice(0,2)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div>
  <!-- 444444444444444444444444444444444444444444444444444444444444444444444444444444444444 -->
    <div class="show-prod xs12">
        <div class="container"> 
            <div class="row">
                <BodyProduct class="col-xs-6" v-for="prod in prods.slice(0,2)" :key="prod.id" :name="prod.name"
                :price="prod.price" :number="prod.number"/>
            </div>
        </div>
    </div> 
     <!-- --------------------------------------------- -->
           <div class="show-der">
            <div class="container">
         <div class="row">
                <div class="col-lg-6 img text-center">
                    <img src="@/assets/banner-2.jpg">
                </div> 
                <div class="col-lg-6 img text-center">
                  <img src="@/assets/banner-1.jpg">
                </div>  
              </div>
                </div>
             </div>
               <!-- --------------------------------------------- -->
    <div id="demo" class="carousel slide" data-ride="carousel">
            <div class="container">
  <!-- Indicators -->
          <!-- The slideshow -->
            <div class="row" style="width: 100%">
                        <div class="col-lg-3 col-sm-4 col-xs-12">
                            <div>
                            <span class="last">اخر المشتركین</span>
                            <div class="last-subscriber">
                                <Subscriber />
                                <Subscriber />
                                <Subscriber />
                                <Subscriber />
                                <Subscriber />
                                <Subscriber />
                                <Subscriber />
                                <Subscriber />
                                <Subscriber />
                            </div>
                        </div>
                        </div>
                <div class="col-lg-9 col-sm-8 col-xs-12">
                
          <div class="carousel-inner">
            <div class="carousel-item active">
                 <UpProduct />
              </div>
               <Carousel />
               <Carousel />
                  </div>

          <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
                       <!-- ------------------------------------------------------------ -->  
                    <div class="col-sm-3 imges">  
                        <img src="@/assets/gasses.jpg">
                        <img src="@/assets/home.jpg">
                    </div>       
                        <div class="col-sm-9 imgs">  
                         <img src="@/assets/HEADPHONES.jpg" style="width: 100%">       
                    </div>    
                </div>
            </div>
        </div>
        </div>
    <!-- second Carousel -->
     <div id="deno" class="carousel slide" data-ride="carousel" style="margin-top: 40px;">
   
                <div class="col-sm-12">
                
          <div class="carousel-inner">
            <div class="carousel-item active">
                   <UpProduct />
              </div>
            <Carousel />
               <Carousel />
                    </div>

          <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#deno" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#deno" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
                          
                </div>
            
        </div>

  </div>
</template>

<script>
import BodyProduct from "@/components/global/BodyProduct.vue";
import Subscriber from "@/components/global/Subscriber.vue";
import UpProduct from "@/components/body/UpProduct.vue";
import Carousel from "@/components/body/Carousel.vue";

import JesonProd from "@//jeson/MOCK_DATA.json";


export default {

data: function() {
    return{
        prods: JesonProd
    };
},
  name: "products",
   components: {
    BodyProduct,
    Subscriber,
    UpProduct,
    Carousel
  }
};
</script>

<style scoped>
.show-img {
    background-image: linear-gradient(180deg, #a6a6a6, #fff);
    width: 100%;
    height: 370px;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}

.show-img .row .img {
    text-align: center
}
.show-img .row .img img {
    margin: 40px 0 40px 0
}
/* Extra small devices (portrait phones, less than 576px) */ 
@media (max-width: 575.98px) { 
.show-img {
    height: 285px    
    }
.show-img .img:last-child{
        display: none;
    }
.show-img .img img {
    width: 80%;  
}
.NYX,.KAIDISI{
    display: none
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
.show-img {
    height: 280px    
    }
.show-img .img:last-child{
        display: none;
    }
.show-img .img img {
    width: 60vh;   
}
.NYX,.KAIDISI{
    display: none
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { 
.show-img {
    height: 280px    
    }
.show-img .img img {
    width: 50vh; 
}
.NYX{
    display: none
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { 
.show-img .img img {
    margin: 40px 0px 40px -10px;
    width: 450px;
    }
}
/* style of product */
/* style for product */
.show-prod {
    
    width: 100%;
    height: auto;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.show-prod .mini {
    font-size: 20px;
    color: #655f5f;
}
.show-prod .row .content-pro {
    font-size: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    height: 480px;  
}
.show-prod .row .content-pro .new {
    width: 100%
}
.show-prod .row .content-pro .stars {
    margin-top: 20px
}
.show-prod .content-pro .checked {
    color: #dcd741;
}
.show-prod .content-pro .avilble {
    color: #19e653;
}
.show-prod .content-pro .avilble div {
    margin-right: 10px
}
.show-prod .content-pro button {
    background-color: #a5abac;
    width: 130px;
    color: #fff;
    margin-top: 10px;
    border-radius: 13px;
    font-weight: 1;
}

/*  show market  */
/* show market */
.show-market {
    background-color: #fff;
    width: 100%;
    height: 250px;
    margin-top: 50px;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.show-market img {
    width: 19%;
    height: 100%
    
}
/* Extra small devices (portrait phones, less than 576px) */ 
@media (max-width: 575.98px) { 
.show-market img:nth-child(2),
.show-market img:nth-child(3){
        display: none
    }
.show-market img {
    width: 32%; 
}  
}

/* Extra small devices (portrait phones, less than 576px) */ 
@media (max-width: 575.98px) { 
.show-img {
    height: 285px    
    }
.show-img .img:last-child{
        display: none;
    }
.show-img .img img {
    width: 80%;  
}

.show-prod .row .col-xs-6{
    flex: 0 0 33%;
    max-width: 40%;
    margin: 0 2vh;
    }
.show-prod .content-pro button {
    width: 100px;
    margin-top: 10px;
    border-radius: 13px;
    font-weight: 1;
}

}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { 
.show-img {
    height: 280px    
    }
.show-img .img:last-child{
        display: none;
    }
.show-img .img img {
    width: 60vh;
    
}

}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { 
.show-img {
    height: 280px    
    }
.show-img .img img {
    width: 50vh;
    
}
.show-prod .row .content-pro {
    height: 416px;
    margin-top: -10px 
    }
   
}
/* End About-Us */
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
    .md12 {
        display: none;
    }
    .lg12{
        display: none;
    }
    .sm12{
        display: none;
    }
 }
/* Small devices (landscape phones, 576px and up)   */
@media (min-width: 576px) and (max-width: 767.98px) {
    .md12 {
        display: none;
    }
    .lg12{
        display: none;
    }
    .xs12{
        display: none;
    }
  }

/*  Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) and (max-width: 991.98px) { 
    .lg12{
        display: none;
    }
    .xs12{
        display: none;
    }
    .sm12{
        display: none;
    }
 }

/*  Large devices (desktops, 992px and up)  */
@media (min-width: 992px) and (max-width: 1199.98px) { 
    .md12 {
        display: none;
    }
    .xs12{
        display: none;
    }
    .sm12{
        display: none;
    }
 }

/* Extra large devices (large desktops, 1200px and up)  */
@media (min-width: 1200px) {
    .md12 {
        display: none;
    }
    .xs12{
        display: none;
    }
    .sm12{
        display: none;
    }
 } 
/* --------------------------------------------- */
.show-der .img img {
    height: 200px;
    width: 550px;
    margin-top: 40px;
    margin-bottom: 100px
}
/* Extra small devices (portrait phones, less than 576px) */ 
@media (max-width: 575.98px) { 
.show-der .img img { 
       width: 80%;
    }
.show-der .img:last-child{
        display: none
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { 
.show-der .img img { 
       width: 500px;
    }
.show-der .img:last-child{
        display: none
    }

}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { 
.show-der .img img { 
       width: 600px;
    }
.show-der .img:last-child{
        display: none
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { 
.show-der .img img {
       width: 450px; 
    }
}
/* ------------------------------------------------ */
</style>
<style scoped>
/* style for carousel ineer */
/* ------------------------------------------------ */
.row .mno {
    margin: 20px 0 5px 985px;
    font-size: 20px; 
    color: #655f5f;
}
.slide .last
{
    margin-left: 90px;
    font-weight: bold;
    color: #5e4949;
}
.last-subscriber {
    height: 990px;
    background-color: #d4cccc;
    position: relative;
    padding-top: 10px;
    border-radius: 5px
   
}
.carousel-inner {
    background-color: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.carousel-inner .show-prod .row .content-pro {
    margin-top: 0;
}
.carousel-control-next,
.carousel-control-prev {
    height: 50px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon
{
    border: 1px solid #c7c7c7;
    border-radius: 50%;
    width: 54px;
    height: 95px;
    background-color: #caabab;
    top: 290px;
    position: absolute;
}
/* Extra small devices (portrait phones, less than 576px) */ 
@media (max-width: 575.98px) { 
.last-subscriber {
    margin-bottom: 50px;
    width: 85%;
    text-align: center;
    margin-left: 10%
    }
.carousel-inner {
    box-shadow: none;
    margin-left: 3vh
}
.last-subscriber .subscriber {
    width: 85%;
    margin: 10px 0 -4px 25px;
    }
.last-subscriber .subscriber img {
    right: 15%
    }
.slide .last {
       margin-left: 190px 
    } 

}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { 
.carousel-inner {
        width: 120%;
    }
.last-subscriber {
    width: 120%;
    margin-left: -20px;
    height: 695px;
    padding-top: 1px
    }
.last-subscriber .subscriber {
    font-size: 12px;
    height: 69px
    }
.last-subscriber .subscriber img {
    width: 35px;
    right: 12px;
    }   
.slide .last {
    margin-left: 35px;
    font-size: 14px;
}
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { 
.last-subscriber {
    height: 800px
    }
.last-subscriber .subscriber {
    font-size: 15px;
    height: 79px
    }
.last-subscriber .subscriber img {
    right: 18px
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { 

.last-subscriber .subscriber {
    font-size: 16px
    }
.last-subscriber .subscriber img {
    right: 16px
    }
}
/* ------------------------------------------ */

 .imges {
     position: absolute;
     top: 660px;
     left: 635px;
}
.imges img {
    width: 100%;
    margin-bottom: 15px;
}
.imgs {
    margin-top: 40px;
    position: absolute;
}
/* Extra small devices (portrait phones, less than 576px) */ 
@media (max-width: 575.98px) { 
.imges,.imgs {
     display: none
}
 
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { 
.imges,.imgs {
     display: none
}
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { 
.imges {
     top: 600px;
     left:370px;
}
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { 
.imges {
     top: 660px;
     left: 560px;
}
.imges img {
    width: 80%;
    margin-bottom: 15px;
}
.imgs {
    margin-top: 40px;
    position: absolute;
}
.imgs img{
    width: 80%
}
}

</style>