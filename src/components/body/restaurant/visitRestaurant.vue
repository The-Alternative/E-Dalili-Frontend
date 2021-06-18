<template class="html">
    <div class="body">
        <!-- home section -->
        <section class="home">
            <div class="content">
                <h3>{{ this.$route.params.title }}</h3>
                <p>
                    {{ this.$route.params.short_des }}
                </p>
            </div>
            <div class="image">
                <img
                    src="../../../../public/img/img6.jpg"
                    alt="img"
                    class="rounded-circle"
                />
            </div>
        </section>

        <section class="about">
            <img class="image" src="../../../../public/img/img4.jpg" />
            <div class="content">
                <h3>{{ this.$route.params.title }}</h3>
                <p>{{ this.$route.params.long_des }}</p>
            </div>
        </section>
        <section class="menu">
            <h1 class="heading">our delicious <span>menu</span></h1>
            <div class="box-container">
                <div
                    class="box"
                    v-for="item in this.$route.params.Menu"
                    :key="item.id"
                >
                    <img src="../../../../public/img/img2.jpg" alt="" />
                    <h3>{{ item.title }}</h3>
                </div>
            </div>
        </section>
        <section class="meals">
            <h1 class="heading">our delicious <span>Meals</span></h1>
            <div class="box-container">
                <div
                    class="box"
                    v-for="item in this.$route.params.Meals"
                    :key="item.id"
                >
                    <img src="../../../../public/img/img6.jpg" alt="" />
                    <h3>{{ item.title }}</h3>
                    <div class="price">s.p{{ item.price }}</div>
                    <p>{{ item.short_des }}</p>
                </div>
            </div>
            <!-- <div class="column">
                <div
                    class="card"
                    
                >
                    <img
                        src="../../../../public/img/img6.jpg"
                        alt="Denim Jeans"
                        style="width: 100%"
                    />
                    <h1>{{ item.title }}</h1>
                    <p class="price">s.p{{ item.price }}</p>
                    <p>{{ item.short_des }}</p>
                </div>
            </div> -->
        </section>
    </div>
</template>

<script>
import data from '../../../jeson/data';
export default {
    name: 'visitRestaurant',
    props: ['id', 'title', 'image', 'short_des', 'long_des', 'Meals', 'Menu'],
    data() {
        return {
            rating: 0,
            restaurants: data.restaurants,
        };
    },
    methods: {},
};
</script>

<style scoped>
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    text-transform: capitalize;
    transition: all 0.2s linear;
}
*::selection {
    background: var(--yellow);
    color: #fff;
}
.html {
    font-size: 62.5%;
    overflow-x: hidden;
}
.body {
    overflow-x: hidden;
    /* height: 200rem; */
}
.html::-webkit-scrollbar {
    width: 1.4rem;
}
.html::-webkit-scrollbar-track {
    background: #333;
}
.html::-webkit-scrollbar-thumb {
    background: var(--yellow);
}
section {
    min-height: 100vh;
    padding: 1rem 10%;
    padding-top: 8.5rem;
}
.home {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 0;
    overflow: hidden;
}
.home .image {
    flex: 1 1 39rem;
}
.home .image img {
    width: 100%;
}
.home .content {
    flex: 1 1 39rem;
}
.home .content h3 {
    color: #333;
    font-size: 6rem;
}
.home .content p {
    color: #666;
    font-size: 2rem;
    padding: 1rem 0;
}
.home::before,
.home::after {
    content: '';
    position: absolute;
    top: 3rem;
    right: -5rem;
    background: var(--yellow);
    border-radius: 3rem;
    transform: rotate(-45deg);
    height: 35rem;
    width: 60rem;
    z-index: -2;
    animation: animte 1s linear 1;
}
@keyframes animte {
    0% {
        transform: rotate(45deg) translateY(-40rem);
    }
}
.home::before {
    top: -7rem;
    background: #fff;
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1);
    z-index: -1;
}
.about {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
}
.about .image {
    flex: 1 1 40rem;
    height: 50%;
}
.about .content {
    flex: 1 1 40rem;
    padding: 2rem;
}
.about .content h3 {
    font-size: 4rem;
    color: #333;
}
.about .content p {
    font-size: 1.6rem;
    color: #666;
    padding: 1rem 0;
}
.heading {
    text-align: center;
    font-size: 4rem;
    padding: 0 0.5rem;
    color: #333;
}
.heading span {
    color: var(--yellow);
}

@media (max-width: 991px) {
    .html {
        font-size: 55%;
    }
    .home::before,
    .home::after {
        display: none;
    }
}
@media (max-width: 768px) {
    .home .content {
        text-align: center;
    }
    .home .content h3 {
        font-size: 4.5rem;
    }
}
@media (max-width: 500px) {
    .html {
        font-size: 50%;
    }
}
.menu .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.menu .box-container .box {
    height: 20rem;
    width: 30rem;
    margin: 2rem;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}
.menu .box-container .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.menu .box-container .box h3 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(204, 162, 24);
    text-align: center;
    font-size: 3rem;
    opacity: 0;
}
.menu .box-container .box:hover h3 {
    top: 50%;
    opacity: 1;
    transition-delay: 0.2s;
}
.menu .box-container .box::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, rgba(197, 157, 23, 0.753));
    transition: 0.2s linear;
}
.menu .box-container .box:hover:before {
    top: 0;
}
.meals .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.meals .box-container .box {
    background: #fff;
    width: 25rem;
    padding: 2rem;
    margin: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0.3rem 0.5rem rgba(184, 126, 20, 0.767);
    text-align: center;
}
.meals .box-container .box img {
    height: 20rem;
    width: 100%;
    object-fit: cover;
}
.meals .box-container .box h3 {
    color: #333;
    font-size: 3rem;
    font-weight: normal;
}
.meals .box-container .box p {
    color: #333;
    font-size: 1.5rem;
    font-weight: normal;
}
.meals .box-container .box .price {
    color: #666;
    font-size: 2.5rem;
}
.meals .box-container .box:hover {
    transform: scale(1.02);
    box-shadow: 0 1rem 1rem rgba(184, 126, 20, 0.767);
}
</style>
