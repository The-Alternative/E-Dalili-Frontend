<template>
    <div>
       <div
            id="carouselExampleInterval"
            class="carousel slide mb-4"
            data-ride="carousel"
        >
            <div class="carousel-inner">
                <div
                    class="carousel-item active"
                    data-interval="10000"
                >
                    <img
                        src="../../public/img/IMG-20200914-WA0002.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
                <div
                    class="carousel-item"
                    data-interval="2000"
                >
                    <img
                        src="../../public/img/banner-2.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
                <div
                    class="carousel-item"
                >
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
                <span class="sr-only"
                    >Previous</span
                >
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
                <span class="sr-only"
                    >Next</span
                >
            </a>
        </div>
        <div class="border col-sm-12 mt-4" style="display: flex; justify-content: center; padding: 0">
            <div class="col-lg-3">
            <img
                class="img-open isActive"
                src="../../public/img/open.png"
                height="40"
            />
            </div>
            <div class="col-lg-6">
            <img
                class="rounded-circle profile"
                src="../../public/img/market-logo.png"
                height="80"
            />
            </div>
            <div class="col-lg-3">
                <div>متجر تجزئة</div>
                <div>{{title}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'visitStore',
    data() {
        return {
        
          
        }
    },
    props: ['title','address'],
}
</script>
<style scoped>
.border {
    margin:auto;
    justify-content: center;
    align-content: center;
    border-radius: 40px 0 40px 0;
    border:2px solid #d66315;
    background-color: #fefefe;
    max-width: 90%;
}
.profile {
    border-radius: 250px;
    margin-top: 20px;
}
.isActive{
    padding-left: 0;
}
</style>
