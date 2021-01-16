<template>
    <div class="carousel-item">
         <div class="show-prod">
                    <div class="container">

                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
                      <div class="content-pro text-center">
                        <img src="@/assets/w.jpg" class="new">
                        <div class="name-prod">play</div>
                        <div class="color-prod">201اللون : كریمي رقم </div>
                        <div class="stars">
                          <span class="fa fa-star  checked" id="one"></span>
                          <span class="fa fa-star checked" id="two"></span>
                          <span class="fa fa-star checked" id="three"></span>
                          <span class="fa fa-star checked" id="four"></span>
                          <span class="fa fa-star" id="five"></span>
                          </div>
                         <div> <span>ل.س</span>  <div class="price" style="display: inline-block"> 3000-2800</div> </div>
                          <div class="avilble"><div  style="display: inline-block">متوفر في 5 متاجر</div><span class="fa fa-check-circle"></span></div>
                          <button type="button" class="btn btn-light">اختیار</button>
                      </div>
                    </div>
                   <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
                      <div class="content-pro text-center">
                        <img src="@/assets/fgfg.jpg" class="new">
                        <div class="name-prod"> NYX طلاء أظافر من</div>
                        <div class="color-prod">للون : شفاف 700 </div>
                        <div class="stars">
                          <span class="fa fa-star  checked" id="one"></span>
                          <span class="fa fa-star checked" id="two"></span>
                          <span class="fa fa-star checked" id="three"></span>
                          <span class="fa fa-star checked" id="four"></span>
                          <span class="fa fa-star " id="five"></span>
                          </div>
                         <div> <span>ل.س</span>  <div class="price" style="display: inline-block"> 1300-1100</div> </div>
                          <div class="avilble"><div  style="display: inline-block">متوفر في 5 متاجر</div><span class="fa fa-check-circle"></span></div>
                          <button type="button" class="btn btn-light">اختیار</button>
                      </div>
                    </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
                      <div class="content-pro text-center">
                        <img src="@/assets/as.jpg" class="new">
                        <div class="name-prod"> لون12علبة الوان مائیة جافة</div>
                        <div class="color-prod">KAIDISI</div>
                       <div class="stars">
                          <span class="fa fa-star  checked" id="one"></span>
                          <span class="fa fa-star checked" id="two"></span>
                          <span class="fa fa-star checked" id="three"></span>
                          <span class="fa fa-star checked" id="four"></span>
                          <span class="fa fa-star" id="five"></span>
                          </div>
                         <div> <span>ل.س</span>  <div class="price" style="display: inline-block"> 1900-1700</div> </div>
                          <div class="avilble"><div  style="display: inline-block">متوفر في 3 متاجر</div><span class="fa fa-check-circle"></span></div>
                          <button type="button" class="btn btn-light">اختیار</button>
                      </div>
                    </div>
                   <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
                      <div class="content-pro text-center">
                        <img src="@/assets/rt.jpg" class="new">
                        <div class="name-prod">NYX كونسلیر</div>
                        <div class="color-prod">201اللون : كریمي رقم </div>
                        <div class="stars">
                          <span class="fa fa-star  checked" id="one"></span>
                          <span class="fa fa-star checked" id="two"></span>
                          <span class="fa fa-star checked" id="three"></span>
                          <span class="fa fa-star checked" id="four"></span>
                          <span class="fa fa-star" id="five"></span>
                          </div>
                         <div> <span>ل.س</span>  <div class="price" style="display: inline-block"> 2400-2000</div> </div>
                          <div class="avilble"><div  style="display: inline-block">متوفر في 5 متاجر</div><span class="fa fa-check-circle"></span></div>
                          <button type="button" class="btn btn-light">اختیار</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Carousel"
}
</script>

<style scoped>
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
    height: 460px;
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
.NYX,.KAIDISI {
    display: none
    }
.show-prod .row .content-pro {
    font-size: 16px;
}
.show-prod .content-pro button {
    width: 100px;
    margin-top: 10px;
    border-radius: 13px;
    font-weight: 1;
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

}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
.show-prod .row .content-pro {
    margin-top: -10px
    }

}

</style>
