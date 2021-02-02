<template>
  <div class="prodetils">

      <div class="container">
        <div class="row">
            <div class="col">
                <img src="@/assets/w.jpg" />
            </div>
            <div class="col">
            
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
                  
                    <div class="content-pro text-center" >
                        
                        <div class="name-prod">{{title}} اسم المنتج:</div>
                        <div class="category">{{description}}الوصف: </div>
                        <div class="stars">
                          <span class="fa fa-star  checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          </div>
                         <div> <span>ل.س</span>  <div class="price" style="display: inline-block"> </div> </div>
                          <div class="avilble"><div  style="display: inline-block">متوفر في  متاجر</div><span class="fa fa-check-circle"></span></div>
                          
                      </div>
                     
                </div>
                
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
// @ is an alias to /src
import jeson from "@/jeson/MOCK_DATA.json";


export default {
  name: "productdetils",
   
   data(){
     return{
       Product: jeson[0].Products ,
      
     }
   },
    
};
</script>