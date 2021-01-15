<template>
      <!-- Start About-Us -->
        <div class="about-us">
            <div class="container">
                <div class="row">
                <div class="col-sm-3 ">
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>                        
                        <li><a href="#">Careers Press</a></li>
                        <li><a href="#">Releases</a></li>
                        <li><a href="#">E-DALELY Cares</a></li>
                        <li><a href="#">Gift a Smile</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                     <h3>Connect with</h3>
                     <ul>
                        <li><a href="#">Facebook</a></li>                        
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                     <h3>Join Us</h3>
                     <ul>
                        <li><a href="#">Sell on E-Dalely</a></li>                        
                        <li><a href="#">Sell under E-Dalely</a></li>
                        <li><a href="#">Accelerator</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Fulfilment by E-Dalely</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                     <h3>Let Us Help</h3>
                     <ul>
                        <li><a href="#"> Your Account</a></li>                        
                        <li><a href="#">E-Dalely App Download </a></li>
                        <li><a href="#"> E-Dalely Assistant Download</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
                    <hr>
                    <div class="imag">
                        <img src="@/assets/logo-3.png">
                    </div>
                </div>
                    <div class="row">
                    <div class="col-md-2 col-sm-4  text-center">
                        <div class="dlely-card">
                         <div>E-DALELY Points</div>
                            <img src="@/assets/icon-card.png">
                        </div>
                       
                        </div>          
                    <div class="col-md-2 col-sm-4 text-center">
                        <div class="work-us">
                             
                        <div><span>Get It On</span>Google Play</div>
                        <img src="@/assets/icon-google-play.png">
                        </div>
                    </div>
                      <div class="col-md-2 col-sm-4 text-center">
                       <div class="work-us" style="padding-top: 3px">
                          <div>App Store</div>
                           <img src="@/assets/icon-appel.png">
                          </div>
                          
                    </div>
                      <div class="col-md-3 col-sm-6 visiter text-center">
                       <ul>
                           المتصلین
                            <li>0</li>                            
                            <li>0</li>
                            <li>3</li>
                            <li>3</li>
                            <li>1</li>                            
                            <li>5</li>
                        </ul>
                        
                    </div>
                      <div class="col-md-3 col-sm-6 visiter text-cnter">
                        <ul>
                                                    الزیارات
                            <li>0</li>                            
                            <li>0</li>
                            <li>1</li>
                            <li>4</li>
                            <li>7</li>                            
                            <li>9</li>
                        </ul>
                    </div>  
                        </div>
                </div>
            </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
<style scoped>
/* Start About-Us */
.about-us {
    height: 420px;
    
    background-color: #656668;
    margin-top: 15px
}
.about-us h3{
    color: #aca59b;
    margin: 50px 0 50px 0; 
}
.about-us ul {
    list-style: none;
    font-size: 20px;
}
.about-us ul li {
    margin-bottom: -5px;
}
.about-us ul li a {
    color: #b1afaf;
}
.about-us hr{
    width: 1000px;
    height: 1px;
    background-color: #424243;
    margin: 40px 0 20px auto;
    opacity: 0.7;
}
.about-us .imag img {
    position: absolute;
    left: 50px
}
.about-us .visiter ul {
    list-style: none;
    margin: 0;
    font-size: 18px;
   
}
.about-us .visiter li {
    background-color: #fff;
    width: 15px;
    height: 29px;
    display: inline-block;
    margin: .5vh;
}
.about-us .work-us {
    background-color: black;
    color: #fff;
    width: 120px;
    padding-left: 30px;
    border-radius: 10px;  
    height: 37px
}
.about-us .work-us div span {
    font-size: 9px;
    display: block;
}
.about-us .work-us img{
    position: absolute;
    top: 5px;
    left: 20px;
}
.about-us .dlely-card{
    background-color: black;
    color: #fff;
    width: 140px;
    font-size: 13px;
    padding-left: 38px;
    height: 35px;
    padding-top: 6px;
    border-radius: 10px
}
.about-us .dlely-card img {
    position: absolute;
    left: 18px;
    top: 5px;
}

/* Extra small devices (portrait phones, less than 576px) */ 
@media (max-width: 575.98px) { 
.about-us {
      height: 920px  
    }
.about-us h3{
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 20px

    }
.about-us ul {
    padding: 0;
    font-size: 15px;
    text-align: center
    }
.about-us hr {
    width: 250px;
    margin-right: 70px
    }
.about-us .visiter ul {
    margin: 10px
    }
.about-us .work-us {
   margin: 0 0 20px 150px
    }
.about-us .work-us img {
   left: 170px
    }
.about-us .dlely-card{
    margin-left: 140px;
    margin-bottom: 20px
    }
.about-us .dlely-card img {
    left: 160px;
    }
.about-us .imag img {
    left: 25px
}
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { 
.about-us {
      height: 465px  
    }
.about-us h3{
    font-size: 15px;
    }
.about-us ul {
    padding: 0;
    font-size: 15px
    }
.about-us hr{
    width: 450px;
}
.about-us .visiter ul{
    font-size: 19px;
    margin-top: 20px
    }
.about-us .visiter ul li{
    width: 20px;
    height: 20px
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { 
.about-us h3{
    font-size: 22px
    }
.about-us ul {
    padding: 0;
    font-size: 17px
    }
.about-us hr{
    width: 650px;
}
.about-us .visiter ul{
    font-size: 14px;  
    }
.about-us .visiter ul li{
    width: 15px;
    height: 15px
    }
.about-us .work-us {
    width: 90px;
    height: 30px;
    font-size: 10px;
    margin-left: 20px;
}
.about-us .work-us img{
    top: 2px;
    left: 40px;
}
.about-us .dlely-card{
    width: 120px;
    font-size: 10px;
    height: 30px;
   
}
.about-us .dlely-card img{
    left: 20px;
    top: 5px;
    width: 25%;
    } 
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { 
.about-us {
    height: 425px;       
    }
.about-us hr{
    width: 800px;
}
.about-us .visiter ul{
    font-size: 16px;  
    }
.about-us .visiter ul li{
    width: 17px;
    height: 17px
    }
}

/* End About-Us */
</style>