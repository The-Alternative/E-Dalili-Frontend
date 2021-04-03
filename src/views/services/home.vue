<template>
    <div class="home">
        <div class="all-section">
            <h3>{{$t('Allsections')}}</h3>
        </div>
        <div class="row align-middle">
            <div
                class="col-md-6 col-lg-3 col-xs-6  column"
                v-for="catog in categories"
                :key="catog.id"
                :slug="catog.slug"
                :name="catog.name"
                :image="catog.image"
                style="width:50%"
            >
                <router-link :to="`/${catog.slug}`">
                    <div class="card">
                        <div class="txt">
                            <h1>{{ catog.name }}</h1>
                        </div>
                        <a href="#">{{$t('More')}}</a>
                        <div class="ico-card">
                            <img v-lazy="catog.image" style="width:60%" />
                            <i class="fa fa-rebel"></i>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <!-- _________________________________________________________________________ -->
        <input id="scene-1" type="radio" name="scene" value="1" checked />
        <input id="scene-2" type="radio" name="scene" value="2" />
        <input id="scene-3" type="radio" name="scene" value="3" />
        <input id="scene-4" type="radio" name="scene" value="4" />

        <main class="site">
            <div class="landscape">
                <div class="landscape-text">
                    E-DALILY
                </div>
            </div>
            <div class="left-side">
                <div class="page-numbers" data-total="04">
                    <div class="page-number page-number--tens">0</div>
                    <div class="page-number page-number--ones">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </div>
            </div>
            <div class="hero">
                <div class="layer" data-scene="1">
                    <h1 class="heading">
                        ساعات نسائية
                    </h1>
                </div>
                <div class="layer" data-scene="2">
                    <h1 class="heading">
                        ألعاب الأطفال
                    </h1>
                </div>
                <div class="layer" data-scene="3">
                    <h1 class="heading">
                        ألكترونيات
                    </h1>
                </div>
                <div class="layer" data-scene="4">
                    <h1 class="heading">
                        ساعات رقمية ذكية
                    </h1>
                </div>
                <nav class="slide-nav">
                    <div class="button-container">
                        <button class="nav-button">Previous</button>
                        <button class="nav-button">Next ></button>
                    </div>
                    <div class="nav-button-container">
                        <label class="nav-button" for="scene-1" data-scene="1"
                            >1</label
                        >
                        <label class="nav-button" for="scene-2" data-scene="2"
                            >2</label
                        >
                        <label class="nav-button" for="scene-3" data-scene="3"
                            >3</label
                        >
                        <label class="nav-button" for="scene-4" data-scene="4"
                            >4</label
                        >
                    </div>
                </nav>
            </div>
            <div class="cont-layer">
                <div class="layer row" data-scene="1" style="width:1300px">
                    <div class="col">
                        <img src="../../../public/img/quik1.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/quik2.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/quik3.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/quik4.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/quik5.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/quik1.png" alt="" />
                    </div>
                </div>
                <div class="layer row" data-scene="2" style="width:1300px">
                    <div class="col-2">
                        <img src="../../../public/img/toys2.png" alt="" />
                    </div>
                    <div class="col-2">
                        <img src="../../../public/img/toys1.png" alt="" />
                    </div>
                    <div class="col-2">
                        <img src="../../../public/img/toys3.png" alt="" />
                    </div>
                    <div class="col-2">
                        <img src="../../../public/img/toys4.png" alt="" />
                    </div>
                    <div class="col-2">
                        <img src="../../../public/img/toys5.png" alt="" />
                    </div>
                    <div class="col-2">
                        <img src="../../../public/img/toys1.png" alt="" />
                    </div>
                </div>
                <div class="layer row" data-scene="3" style="width:1300px">
                    <div class="col">
                        <img src="../../../public/img/elc1.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/elc2.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/elc3.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/elc4.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/elc5.png" alt="" />
                    </div>
                </div>
                <div class="layer row" data-scene="4" style="width:1300px">
                    <div class="col">
                        <img src="../../../public/img/ocl1.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/ocl2.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/ocl3.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/ocl4.png" alt="" />
                    </div>
                    <div class="col">
                        <img src="../../../public/img/ocl5.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
        <!-- __________________________________________________________________ -->
        <h2>Some Market</h2>
        <div class="row align-middle cont-market">
            <div
                v-for="brand in brands.slice(12, 16)"
                :key="brand.id"
                class="col-md-4 col-lg-3 col-xs-6  column"
            >
                <div class="card card-market">
                    <img class="img-market" v-lazy="brand.image" />
                    <a href="#">more...</a>
                </div>
            </div>
        </div>
        <div class="row align-middle cont-market">
            <div
                v-for="brand in brands.slice(16, 20)"
                :key="brand.id"
                class="col-md-4 col-lg-3 col-xs-6  column"
            >
                <div class="card card-market">
                    <img class="img-market" v-lazy="brand.image" />
                    <a href="#">more...</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    computed: {
        categories() {
            return this.$store.state.categories;
        },
        brands() {
            return this.$store.state.brands;
        },
    },
};
</script>
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
        margin-left: -3rem;
        margin-top: 12rem;
        z-index: 1;
        h1 {
            font-size: 1.5rem;
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
/* ____________________________________________ market ________________________________________ */
$scene: var(--scene);
$total: var(--total);
$percentage: var(--percentage);

.site {
    display: grid;
    margin-top: 50px;
    grid-template-rows: 3fr 2fr;
    grid-template-columns: 5rem 1fr 1fr 5rem;
    width: 100%;
    height: 90vh;
    background-color: white;
    font-family: 'Josefin Sans', sans-serif;
    * {
        transition: all 0.5s ease;
    }
}

.site {
    --total: 4;
    --percentage: calc(#{$scene / $total});
}
.layer {
    position: absolute;
}

input[value='1']:checked ~ .site {
    --scene: 1;
}
input[value='2']:checked ~ .site {
    --scene: 2;
}
input[value='3']:checked ~ .site {
    --scene: 3;
}
input[value='4']:checked ~ .site {
    --scene: 4;
}

input[name='scene'] {
    display: none;
}

input[value='1']:checked ~ * label[data-scene='1'],
input[value='2']:checked ~ * label[data-scene='2'],
input[value='3']:checked ~ * label[data-scene='3'],
input[value='4']:checked ~ * label[data-scene='4'] {
    display: none;
}

input[value='1']:checked ~ * [data-scene]:not([data-scene='1']),
input[value='2']:checked ~ * [data-scene]:not([data-scene='2']),
input[value='3']:checked ~ * [data-scene]:not([data-scene='3']),
input[value='4']:checked ~ * [data-scene]:not([data-scene='4']) {
    .heading,
    img,
    .paragraph {
        transform: translateX(-25%);
        opacity: 0;
    }
}

input[value='1']:checked ~ * [data-scene='1'],
input[value='2']:checked ~ * [data-scene='2'],
input[value='3']:checked ~ * [data-scene='3'],
input[value='4']:checked ~ * [data-scene='4'] {
    + [data-scene] {
        transform: translateX(25%);
    }
}
.landscape {
    display: flex;
    align-items: center;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    background-color: #141610;
    background-image: url('../../../public/img/mount.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 20%;
    overflow: hidden;
}

.landscape-text {
    display: inline-block;
    font-size: 40vh;
    font-weight: bold;

    // left: 50%;
    background: inherit;
    background-image: url('../../../public/img/stars-mount.jpg');
    //background-clip: text;
    -webkit-background-clip: text;
    background-size: 160% auto;
    background-position: calc(80% + (-70% * #{$percentage})) 0;
    color: transparent;
    transform: translateX(calc(40% + (-100% * #{$percentage})));
}

.left-side {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    font-family: 'Oswald';
    align-self: end;
}

.page-numbers {
    color: white;
    overflow: hidden;
    &:after {
        content: '/' attr(data-total);
        font-size: 1rem;
        position: absolute;
        top: 0;
        left: 4rem;
    }
}

.page-number {
    font-size: 4rem;
    line-height: 4.2rem;
    &--tens {
        align-self: flex-end;
    }
    &--ones {
        position: absolute;
        top: 0;
        left: 0.5em;
        transform: translateY(calc((-100% * (#{$percentage} - 1 /#{$total}))));
    }
}

.left-content {
    grid-row: 2 / 4;
    grid-column: 1 / 3;
}

.slide-nav {
    position: absolute;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

$nav-button-width: 5rem;

.nav-button-container {
    display: flex;
    position: absolute;
    top: 0;
    transition: none;
    transform: translateX(
        calc(100% + (-1 * #{$nav-button-width} * (#{$scene} + 1)))
    );
    opacity: 0;
}

.button-container {
    display: flex;
    outline: none;
    right: 0;
}

.nav-button {
    display: inline-block;
    padding: 0.5em;
    width: $nav-button-width;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    cursor: pointer;
    font-family: inherit;
    height: 2rem;
    border: none;
    padding: 0.5rem;
    outline: none;
}

.hero {
    color: white;
    grid-row: 1 / 2;
    grid-column: 3 / -1;
    > .layer {
        display: flex;
        height: 40%;
    }
}

*,
*:before,
*:after {
    box-sizing: border-box;
    position: relative;
}
</style>
<style lang="postcss" scoped>
.cont-layer {
    height: 250px;
}
@media (max-width: 575.98px) {
    .page-number--tens {
        width: 180px;
    }

    .layer .col:nth-child(5) {
        display: none;
    }
    .layer .col:nth-child(6) {
        display: none;
    }
    .card .txt {
        margin-top: 4rem;
    }
}
/* _____________________ market after slider _____________________________ */
.card-market {
    border-radius: 50%;
}
.img-market {
    border-radius: 50%;
    margin: auto;
    height: 150px;
    width: 150px;
}
.cont-market {
    height: 340px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .page-number {
        font-size: 5vh;
    }
    .cont-market {
        height: auto;
    }
    .card {
        min-height: 175px;
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
    .md {
        display: none;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}
</style>
