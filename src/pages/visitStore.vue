<template>
    <div class="visitStore">
        <div
            id="carouselExampleInterval"
            class="carousel slide mb-4 carouselSlide"
            data-ride="carousel"
            style="justify-content: center;"
        >
            <div class="carousel-inner">
                <div class="carousel-item active" data-interval="2000">
                    <img
                        src="../../public/img/banner-2.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="../../public/img/banner-1.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="border1 mb-4">
            <div class="col-sm-12" style="display: flex; padding: 0">
                <div class="col-lg-3">
                    <img
                        class="isActive mt-4"
                        src="../../public/img/open.png"
                        height="40"
                    />
                    <div class="mt-4">{{ visit.workDays }}</div>
                    <div class="mt-3 row">
                        <div class="row">
                            <span>م</span>
                            <div class="mr-2">{{ visit.endTime }}</div>
                        </div>
                        <div class="row">
                            <span class="">ص</span>
                            <div>{{ visit.startTime }}</div>
                        </div>
                    </div>
                    <div class="mt-5">{{ visit.address }}</div>
                    <hr class="hr" />
                </div>
                <div class="col-lg-6">
                    <img
                        class="rounded-circle mb-4 profile"
                        src="../../public/img/market-logo.png"
                        height="100"
                    />
                    <div class="mt-4">{{ visit.title }}</div>
                </div>
                <div class="col-lg-3 mt-4 pr-0">
                    <div class="textRight"><span>متجر تجزئة</span></div>
                    <div class="icons mt-3">
                        <div class="row telephone mt-3">
                            <span>{{ visit.phonenumber }}</span>
                            <img
                                class="ml-2"
                                src="../../public/img/telephone.svg"
                                height="20"
                            />
                        </div>
                        <div class="row mt-2 mb-2 phone">
                            <span>{{ visit.mobilephone }}</span>
                            <img
                                class="ml-2"
                                src="../../public/img/mobile-phone.svg"
                                height="30"
                            />
                        </div>
                        <div class="row">
                            <span>تواصل مع المتجر</span>
                            <img
                                class="ml-2"
                                src="../../public/img/comments.svg"
                                height="20"
                            />
                        </div>
                        <div class="mt-4 mr-4">المتابعين</div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="socail-menu col mb-3">
                    <a><img
                        class="location mr-2"
                        src="../../public/img/location.png"
                        height="30"
                    /></a>
                    <a><img
                        class="instagram mr-2"
                        src="../../public/img/instagram-new.png"
                        height="30"
                    /></a>
                    <a><img
                        class="whatsapp mr-2"
                        src="../../public/img/whatsapp.png"
                        height="30"
                    /></a>
                    <a><img
                        class="telegram mr-2"
                        src="../../public/img/telegram-app.png"
                        height="30"
                    /></a>
                    <a><img
                        class="facebook"
                        src="../../public/img/facebook-new.png"
                        height="30"
                    /></a>
                </div>
                <div class="col mr-4 mb-3">
                    <img
                        class=""
                        src="../../public/img/MaskGroup.png"
                        height="30"
                    />
                    <img
                        class=""
                        src="../../public/img/Group.png"
                        height="30"
                    />
                </div>
                <div class="col">
                    <div class="textFollow" id="textFollow" @click="heart()">
                        <span
                            class="heart mr-2"
                            id="heart"
                        ></span>
                        <span class="follow mr-4" id="follow">متابعة</span>
                    </div>
                </div>
                <div class="col">
                    <router-link to="/Cart">
                        <span class="fa fa-cart-plus fa-2x cart mr-4"></span>
                    </router-link>
                            <span class="far fa-thumbs-down fa-2x dislike"  id="dislikebtn" @click="dislikebtn()"></span>
                            <span class="far fa-thumbs-up fa-2x like" id="likebtn" @click="likebtn()"></span>
                </div>
                <div class="col">
                    <div class="followCount">2800</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../jeson/data';
export default {
    name: 'visitStore',
    props: ['id', 'title'],
    data() {
        return {
            stores: data.stores,
            visit: {
                id: 1,
                image: 'img/S1.png',
                title: 'سنتر الريم - سوبر ماركت',
                rate: 0,
                space: 'يبعد 500 م',
                'is-active': true,
                phonenumber: '016315190',
                mobilephone: '0930253884',
                likes: 0,
                dislikes: 0,
                followUp: 0,
                workDays: ' السبت - الجمعة',
                startTime: '06:00',
                endTime: '10:00',
                address: 'السويداء - طريق قنوات',
                categories: 'البقالة',
            },
        };
    },
    methods: {
        heart: function() {
            document.getElementById('textFollow').classList.toggle('heart-active')
            document.getElementById('follow').classList.toggle('heart-active')
            document.getElementById('heart').classList.toggle('heart-active')
        },
        likebtn: function(){
            document.getElementById('likebtn').classList.toggle('')
        
            // InputEvent.getElementById('input1')
        //     input1.value=parseInt(this.input1.value)+1;
        //     input1.style.color="#12ff00"
        },
        // dislikebtn: function(){
        //     document.getElementById('dislikebtn');
        //     document.getElementById('input2');
        //     input2.value=parseInt(this.input2.value)-1;
        //     input2.style.color="#12ff00"
        // },
        // input1: function(){
        //     document.getElementById('input1');
        // },
        // input2: function(){
        //     document.getElementById('input2');
        // }
    },
};
</script>
<style scoped>
.border1 {
    margin: auto;
    border-radius: 40px 0 40px 0;
    border: 2px solid rgb(236, 158, 95);
    max-width: 90%;
    max-height: 100%;
    background-color: #ffffff;
    box-shadow: 10px 10px 10px #f1c685;
}
.border1:hover{
    border: 1px solid #ffffff;
    border-radius: 40px 0 40px 0;
    box-shadow: 3px 3px 3px 3px #f1c685;
}
.profile {
    border-radius: 250px;
    border: 2px solid rgb(231, 179, 102);
    margin-top: 40px;
    transition: all 0.5s;
}
.profile:hover{
    transform: scale3d(1.05, 1.05, 3);
}
.isActive {
    padding-left: 0;
}
.textRight {
    border-radius: 6px 0 0 6px;
    margin-right: 0;
    font-size: 2vh;
    background-color: rgb(144, 148, 147);
    margin-left: 200px;
    border: 2px solid rgb(144, 148, 147);
}
.icons {
    margin-left: 110px;
}
.phone {
    margin-left: 30px;
}
.telephone {
    margin-left: 30px;
}
.like {
    color: #2f7cc5;
}
.dislike {
    color: #2f7cc5;
}
.cart {
    color: #2f7cc5;
}
.heart{
    color:red;
}
.followCount {
    font-size: 3vh;
    border-radius: 6px 0 6px 0;
    background-color: rgb(199, 175, 39);
    border: 2px solid rgb(199, 175, 39);
}
.carousel-inner{
    justify-content: center;
    width:80%;
}
.carousel-control-next,
.carousel-control-prev {
    height: 50px;
}
.carousel-control-next,
.carousel-control-prev {
    height: 50px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    border: 1px solid #c7c7c7;
    border-radius: 50%;
    width: 54px;
    height: 95px;
    background-color: #caabab;
    top: 290px;
    position: absolute;
}
.carousel-inner {
    background-color: #ffff;
    box-shadow: 0 4px 8px 0
            rgba(0, 0, 0, 0.2),
        0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.socail-menu img{
    transition: .6s;
    cursor: pointer;    
    border-radius:250px;
    width: 30px;
    height: 35px;
    border: 2px solid rgb(231, 179, 102);
    background-color: rgb(231, 179, 102);
    box-shadow: 0 5px 4px rgba(0,0,0,.5);
}
.socail-menu img:hover{
    color: #ffffff;
    transform: translate(0,-10px);
}
.textFollow {
    cursor:pointer;
    border-radius: 5px;
    border: 2px solid #eae2e1;
    display: flex;
}
.textFollow .heart{
    width: 100px;
    height: 100px;
    background: url('../../public/img/heart.png') no-repeat;
    background-position: left;
    background-size: 2900%;
    position: absolute;
    top:50%;
    left: 21%;
    transform: translate(-30%,-55%);
}
.follow{
    font-size: 3vh;
    margin-bottom: 10px;
    margin-left: 80px;
    color:grey;
}
.heart.heart-active{
    background-position: right;
    animation: animate .8s steps(28) 1;
}
@keyframes animate {
    0%{
        background-position: left;
    }
    100%{
        background-position: right;
    }
}
.textFollow.heart-active{
    border-color: #f9b9c4; 
    background: #fbd0d8;   
}
.follow.heart-active{
    color: black;
}
.like{
    color: #004eff;
    cursor: pointer;
}
.dislike{
    color: #004eff;
    cursor: pointer;   
}
.like:active{
    color:#004eff;
    background-color: #004eff;
    transform: scale(1.2);
}
.dislike:active{
    color:#004eff;
    background-color: #004eff;
    transform: scale(1.2);
}
</style>

