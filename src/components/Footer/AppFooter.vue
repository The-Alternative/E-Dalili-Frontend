<template>
    <!-- Start About-Us -->
    <div class="about-us">
        <div class="row">
            <div class="col-sm-3">
                <h3>{{ $t('GetKnowUs') }}</h3>
                <ul>
                    <li>
                        <a href="#">{{ $t('AboutUs') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('CareersPress') }}></a>
                    </li>
                    <li>
                        <a href="#">{{ $t('Releases') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('E-DALELYCares') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('GiftaSmile') }}</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h3>{{ $t('Connectwith') }}</h3>
                <ul>
                    <li>
                        <a href="#">{{ $t('Facebook') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('Twitter') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('Instagram') }}</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h3>{{ $t('JoinUs') }}</h3>
                <ul>
                    <li>
                        <a href="#">{{ $t('SellonE-Dalely') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('SellunderE-Dalely') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('Accelerator') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('BecomeanAffiliate') }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t('FulfilmentbyE-Dalely') }}</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h3>{{ $t('LetUsHelp') }}</h3>
                <ul>
                    <li>
                        <a href="#">{{ $t('YourAccount') }} </a>
                    </li>
                    <li>
                        <a href="#">{{ $t('E-DalelyAppDownload') }} </a>
                    </li>
                    <li>
                        <a href="#">{{ $t('E-DalelyAssistantDownload') }} </a>
                    </li>
                    <li>
                        <a href="#">{{ $t('HelpCenter') }}</a>
                    </li>
                </ul>
            </div>
            <hr />
            <div class="imag">
                <img src="../../../public/img/logo-3.png" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 col-sm-4 text-center">
                <div class="dlely-card">
                    <div>E-DALELY Points</div>
                    <img src="../../../public/img/icon-card.png" />
                </div>
            </div>
            <div class="col-md-2 col-sm-4 text-center">
                <div class="work-us">
                    <div><span>Get It On</span>Google Play</div>
                    <img src="../../../public/img/icon-google-play.png" />
                </div>
            </div>
            <div class="col-md-2 col-sm-4 text-center">
                <div class="work-us" style="padding-top: 3px">
                    <div>App Store</div>
                    <img src="../../../public/img/icon-appel.png" />
                </div>
            </div>
            <div class="col-md-3 col-sm-6 visiter text-center">
                <ul>
                    المتصلین<br />
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
                    <br />
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
</template>
<style scoped>
/* Start About-Us */
.about-us {
    height: 420px;
    background-color: #656668;
}
.about-us h3 {
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
.about-us hr {
    width: 1000px;
    height: 1px;
    background-color: #424243;
    margin: 40px 0 20px auto;
    opacity: 0.7;
}
.about-us .imag img {
    position: absolute;
    left: 50px;
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
    margin: 0.5vh;
}
.about-us .work-us {
    background-color: black;
    color: #fff;
    width: 140px;
    padding-left: 30px;
    border-radius: 10px;
    height: 37px;
}
.about-us .work-us div span {
    font-size: 9px;
    display: block;
}
.about-us .work-us img {
    position: absolute;
    top: 5px;
    left: 20px;
}
.about-us .dlely-card {
    background-color: black;
    color: #fff;
    width: 140px;
    font-size: 13px;
    padding-left: 38px;
    height: 35px;
    padding-top: 6px;
    border-radius: 10px;
}
.about-us .dlely-card img {
    position: absolute;
    left: 18px;
    top: 5px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .about-us {
        height: 1045px;
    }
    .about-us h3 {
        font-size: 20px;
        text-align: center;
        margin-bottom: 15px;
        margin-top: 20px;
    }
    .about-us ul {
        padding: 0;
        font-size: 15px;
        text-align: center;
    }
    .about-us hr {
        width: 250px;
        margin-right: 70px;
    }
    .about-us .visiter ul {
        margin: 10px;
    }
    .about-us .visiter li {
        width: 13px;
    }
    .about-us .work-us {
        margin: 0 0 20px 60px;
        width: 140px;
    }
    .about-us .work-us img {
        left: 85px;
    }
    .about-us .dlely-card {
        margin-left: 60px;
        margin-bottom: 20px;
        margin-top: 60px;
    }
    .about-us .dlely-card img {
        left: 80px;
        top: 64px;
    }
    .about-us .imag img {
        position: relative;
        left: 0;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .about-us {
        height: 465px;
    }
    .about-us h3 {
        font-size: 15px;
    }
    .about-us ul {
        padding: 0;
        font-size: 15px;
    }
    .about-us hr {
        width: 450px;
    }
    .about-us .visiter ul {
        font-size: 19px;
        margin-top: 20px;
    }
    .about-us .visiter ul li {
        width: 20px;
        height: 28px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .about-us h3 {
        font-size: 22px;
    }
    .about-us ul {
        padding: 0;
        font-size: 17px;
    }
    .about-us hr {
        width: 650px;
    }
    .about-us .visiter ul {
        font-size: 14px;
    }
    .about-us .visiter ul li {
        width: 13px;
        height: 22px;
    }
    .about-us .work-us {
        width: 100px;
        height: 30px;
        font-size: 10px;
        margin-left: 20px;
    }
    .about-us .work-us img {
        top: 2px;
        left: 40px;
    }
    .about-us .dlely-card {
        width: 120px;
        font-size: 10px;
        height: 30px;
    }
    .about-us .dlely-card img {
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
    .about-us hr {
        width: 800px;
    }
    .about-us .visiter ul {
        font-size: 15px;
    }
    .about-us .visiter ul li {
        width: 17px;
        height: 24px;
    }
}

/* End About-Us */
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class AppFooter extends Vue {}
</script>
