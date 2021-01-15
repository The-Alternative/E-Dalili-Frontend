<template>
  <div class="BodyProduct">
  
    
      <div class="content-pro text-center" >
                        <img src="@/assets/w.jpg" class="new">
                        <div class="name-prod">{{name}}</div>
                        <div class="category">201اللون : كریمي رقم </div>
                        <div class="stars">
                          <span class="fa fa-star  checked" id="one"></span>
                          <span class="fa fa-star checked" id="two"></span>
                          <span class="fa fa-star checked" id="three"></span>
                          <span class="fa fa-star checked" id="four"></span>
                          <span class="fa fa-star" id="five"></span>
                          </div>
                         <div> <span>ل.س</span>  <div class="price" style="display: inline-block"> {{price}}</div> </div>
                          <div class="avilble"><div  style="display: inline-block">متوفر في {{number}} متاجر</div><span class="fa fa-check-circle"></span></div>
                          <button type="button" class="btn btn-light">اختیار</button>
                      </div>

        </div>
</template>

<script>
export default {
  props: ["name","price","number"],
  name: "Prods",
};
</script>

<style scoped>
/* style for product */
.show-prod .row .content-pro {
    font-size: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    height: auto;
    margin-top: 10vh;
    margin-bottom: 10vh;  
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
    margin-bottom: 20px;
    border-radius: 13px;
    font-weight: 1;
}
/* Extra small devices (portrait phones, less than 576px) */ 
@media (max-width: 575.98px) { 
.show-prod .row .content-pro {
    font-size: 16px;
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
</style>