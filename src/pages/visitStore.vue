<template>
    <div>
        <div
            id="carouselExampleInterval"
            class="carousel slide mb-4"
            data-ride="carousel"
        >
            <div class="carousel-inner">
                <div class="carousel-item active" data-interval="10000">
                    <img
                        src="../../public/img/IMG-20200914-WA0002.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
                <div class="carousel-item" data-interval="2000">
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
                    <div class="mt-4">السبت - الجمعة</div>
                    <div class="mt-3 row">
                        <div class="row">
                            <span>م</span>
                            <div class="mr-2">10:00</div>
                        </div>
                        <div class="row">
                            <span class="">ص</span>
                            <div>06:00</div>
                        </div>
                    </div>
                    <div class="mt-5">السويداء - جانب مشفى العناية الخاص</div>
                    <hr class="hr" />
                </div>
                <div class="col-lg-6">
                    <img
                        class="rounded-circle mb-4 profile"
                        src="../../public/img/market-logo.png"
                        height="100"
                    />
                    <div class="mt-4">سوبر ماركت الريم</div>
                </div>
                <div class="col-lg-3 mt-4 pr-0">
                    <div class="textRight"><span>متجر تجزئة</span></div>
                    <div>{{ view.title }}</div>
                    <div class="icons">
                        <div class="row telephone">
                            <span>016236253</span>
                            <img
                                class="ml-2"
                                src="../../public/img/telephone.svg"
                                height="20"
                            />
                        </div>
                        <div class="row mt-2 mb-2 phone">
                            <span>093012542</span>
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
            <div class="col mb-3">
               <img
                    class="location mr-2"
                    src="../../public/img/location.png"
                    height="30"
                />
               <img
                    class="mr-2"
                    src="../../public/img/instagram-new.png"
                    height="30"
                />
               <img
                    class="mr-2"
                    src="../../public/img/whatsapp.png"
                    height="30"
                />
               <img
                    class="mr-2"
                    src="../../public/img/telegram-app.png"
                    height="30"
                />
               <img
                    class=""
                    src="../../public/img/facebook-new.png"
                    height="30"
                />
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
                    <div class="textFollow">
                        <span class="fa fa-heart fa-2x heart mr-2"></span>
                        <span class="follow mr-4">متابعة</span>
                    </div>
                </div>
                <div class="col">
                <span class="fa fa-cart-plus fa-2x cart mr-2"></span>
                <span class="far fa-thumbs-down fa-2x dislike mr-2"></span>
                <span class="far fa-thumbs-up fa-2x like"></span>
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
    data() {
        return {
            stores: data.stores,
            view: {
                id: this.id,
                title: this.title,
            },
        };
    },
    props: ['id', 'title'],
};
</script>
<style scoped>
.border1 {
    margin: auto;
    border-radius: 40px 0 40px 0;
    border: 2px solid rgb(236, 158, 95);
    max-width: 90%;
    max-height: 100%;
}
.profile {
    border-radius: 250px;
    border: 2px solid rgb(231, 179, 102);
    margin-top: 40px;
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
.like{
    color: #2f7cc5;
}
.dislike{
    color: #2f7cc5;
}
.cart{
    color: #2f7cc5;
}
.heart{
    color:red;
}
.followCount{
    font-size: 3vh;
    border-radius: 6px 0 6px 0;
    background-color: rgb(199, 175, 39);
    border: 2px solid rgb(199, 175, 39);       
}
.follow{
    font-size: 3vh;
    margin-bottom: 10px;
}
.textFollow{
    border-radius: 3px;
    background-color: rgb(174, 179, 177);
    border: 2px solid rgb(174, 179, 177);
}
</style>
