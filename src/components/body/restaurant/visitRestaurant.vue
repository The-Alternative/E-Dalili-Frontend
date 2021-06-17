<template class="html">
    <div class="body">
        <!-- home section -->
        <section class="home">
            <div class="content">
                <h3>{{ title }} $</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perferendis sunt veniam, fugiat necessitatibus repellendus
                    sequi nemo voluptatum sint deleniti consequatur eaque odit
                    adipisci fuga magni, harum nisi excepturi et similique?
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
                <h3>a word about us</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio vitae quaerat tempore fugiat ea expedita deleniti ipsa
                    neque aperiam, minima reiciendis rerum sapiente porro
                    voluptatibus. Quidem, molestiae aliquam. Iste, ullam?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita, amet suscipit! Nemo modi doloremque, obcaecati hic
                    consequuntur, accusantium vel veritatis facere amet aperiam
                    veniam porro quam eligendi in temporibus sed.
                </p>
            </div>
        </section>
        <section class="menu">
            <h1 class="heading">our delicious <span>menu</span></h1>
            <div class="column">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../../../../public/img/img2.jpg"
                                alt="Avatar"
                                style="width: 300px; height: 300px"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <!-- /// -->
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../../../../public/img/img2.jpg"
                                alt="Avatar"
                                style="width: 300px; height: 300px"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="meals">
            <h1 class="heading">our delicious <span>Meals</span></h1>
            <div class="column">
                <div class="card">
                    <img
                        src="../../../../public/img/img5.jpg"
                        alt="Denim Jeans"
                        style="width: 100%"
                    />
                    <h1>Tailored Jeans</h1>
                    <p class="price">$19.99</p>
                    <p>Some text about the jeans..</p>
                </div>
                <!--  -->
                <div class="card">
                    <img
                        src="../../../../public/img/img5.jpg"
                        alt="Denim Jeans"
                        style="width: 100%"
                    />
                    <h1>Tailored Jeans</h1>
                    <p class="price">$19.99</p>
                    <p>Some text about the jeans..</p>
                </div>
            </div>
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
    html {
        font-size: 50%;
    }
}
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}
/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}
/* Style the back side */
.flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
}
.column {
    display: flex;
    align-items: center;
    justify-content: center;
}

.column .flip-card {
    margin: 10px;
}
/* meala */
.card {
    box-shadow: 0 4px 8px 0 rgba(197, 157, 23, 0.753);
    max-width: 200px;
    margin: auto;
    text-align: center;
    font-family: arial;
}
.card:hover {
    transform: scale3d(1.05, 1.05, 1);
}
.column .card {
    margin: 10px;
}
.price {
    color: grey;
    font-size: 22px;
}

/* .card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
}

.card button:hover {
    opacity: 0.7;
} */
</style>
