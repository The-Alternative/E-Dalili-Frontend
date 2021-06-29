<template>
    <div class="home">
        <div class="all-section">
            <h3>{{ $t('AllCategories') }}</h3>
        </div>
        <div class="row align-middle">
            <div
                class="col-md-6 col-lg-3 col-xs-6 column"
                v-for="catog in Categories.slice(0, 8)"
                :key="catog.id"
                :name="catog.name"
                :image="catog.image"
                style="width: 50%"
            >
                <router-link :to="`/${catog.name}`">
                    <div class="card">
                        <div class="txt">
                            <h1>{{ catog.name }}</h1>
                        </div>
                        <a href="#">{{ $t('More') }}</a>
                        <div class="ico-card">
                            <img :src="image" style="width: 60%" />
                            <i class="fa fa-rebel"></i>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <!-- __________________________________________________________________ -->
        <!-- <div class="contain">
            <h2 style="margin-top: 3vh">Some Market</h2>
            <div class="row align-middle cont-market">
                <div
                    v-for="bran in Brands.slice(0, 4)"
                    :key="bran.id"
                    class="col-md-3 col-sm-6 column"
                >
                    <div class="card-market">
                        <img class="img-market" v-lazy="bran.image" />
                        <a href="#">more...</a>
                    </div>
                </div>
            </div>
            <div class="row align-middle cont-market">
                <div
                    v-for="bran in Brands.slice(2, 6)"
                    :key="bran.id"
                    class="col-md-3 col-sm-6 column"
                >
                    <div class="card-market">
                        <img class="img-market" v-lazy="bran.image" />
                        <a href="#">more...</a>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<style lang="scss" scoped>
* {
    transition: 0.5s;
}
.home {
    background-color: #edefef;
}
.all-section {
    text-align: center;
    color: #6c6c77;
}
.h-100 {
    height: 100vh !important;
}
.align-middle {
    position: relative;
    top: 50%;
}
.column {
    margin-top: 3rem;
    padding-left: 3rem;
    &:hover {
        padding-left: 0;
        .card .txt {
            margin-left: 1rem;
            h1 {
                color: rgb(8, 8, 8);
                opacity: 1;
            }
        }
        a {
            color: rgba(8, 8, 8, 1);
            &:after {
                width: 10%;
            }
        }
    }
}
.card {
    min-height: 240px;
    margin: 0;
    padding: 1.7rem 1.2rem;
    border: none;
    border-radius: 0;
    color: rgba(0, 0, 0, 1);
    letter-spacing: 0.05rem;
    font-family: 'Oswald', sans-serif;
    box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
    .txt {
        margin-left: 0;
        margin-top: 12rem;
        z-index: 1;
        h1 {
            font-size: 18px;
            font-weight: 300;
            text-transform: uppercase;
        }
        p {
            font-size: 0.7rem;
            font-family: 'Open Sans', sans-serif;
            letter-spacing: 0rem;
            margin-top: 33px;
            opacity: 0;
            color: rgba(255, 255, 255, 1);
        }
    }
    @media (max-width: 575.98px) {
        .txt {
            margin-top: 11rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 520.98px) {
        .txt {
            margin-top: 9rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 465.98px) {
        .txt {
            margin-top: 8rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 430.98px) {
        .txt {
            margin-top: 7rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 380.98px) {
        .txt {
            margin-top: 5rem;
        }
        .txt h1 {
            font-size: 16px;
        }
    }
    @media (max-width: 340.98px) {
        .txt {
            margin-top: 4rem;
        }
        .txt h1 {
            font-size: 12px;
        }
    }
    @media (max-width: 300.98px) {
        .txt {
            margin-top: 3rem;
        }
        .txt h1 {
            font-size: 12px;
        }
    }
    a {
        z-index: 3;
        font-size: 0.7rem;
        color: rgba(0, 0, 0, 1);
        margin-left: 1rem;
        position: relative;
        bottom: -0.5rem;
        text-transform: uppercase;
        &:after {
            content: '';
            display: inline-block;
            height: 0.5em;
            width: 0;
            margin-right: -100%;
            margin-left: 10px;
            border-top: 1px solid rgba(255, 255, 255, 1);
            transition: 0.5s;
        }
    }
    .ico-card {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 92%;
        overflow: hidden;
    }
    i {
        position: relative;
        right: -50%;
        top: 60%;
        font-size: 12rem;
        line-height: 0;
        opacity: 0.2;
        color: rgba(255, 255, 255, 1);
        z-index: 0;
    }
}
/* _____________________ market after slider _____________________________ */
.contain {
    margin-top: 40px;
    width: 1275px;
}
.card-market {
    display: flex;
    align-items: end;
    background-color: #eee;
}
.card-market a {
    color: #3e3e3f;
}
.img-market {
    border-radius: 5%;
    margin: auto;
    height: 180px;
    width: 185px;
}
.cont-market {
    height: 340px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .cont-market {
        height: auto;
    }
    .landscape-text {
        font-size: 16vh;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .cont-market {
        height: auto;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .card-market {
        padding: 0;
        min-height: 170px;
    }
    .img-market {
        border-radius: 50%;
        margin: auto;
        height: 150px;
        width: 125px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}
</style>
<script>
import { mapState } from 'vuex';
export default {
    name: 'home',
    props: ['image'],
    data() {
        return {};
    },

    computed: {
        ...mapState(['Categories']),
    },
    mounted() {
        this.$store.dispatch('loadCategories');
    },
};
</script>
