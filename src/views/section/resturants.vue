<template>
    <div class="container">
        <div class="row">
            <!-- col 1 -->

            <div class="col-sm-6">
                <div
                    v-for="item in restaurants"
                    :key="item.id"
                    class="card mb-3"
                    style="max-width: 540px"
                >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="item.image" alt="image" height="70" />
                            <div class="mt-2">
                                <img
                                    class="location mr-2"
                                    src="../../../public/img/location.png"
                                    height="15"
                                />
                                <img
                                    class="phone mr-2"
                                    src="../../../public/img/phone.png"
                                    height="15"
                                />
                                <i class="whatsapp fab fa-whatsapp"></i>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.title }}</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p class="card-text">
                                    <router-link
                                        :to="{
                                            name: 'visitRestaurant',
                                            params: {
                                                id: item.id,
                                                title: item.title,
                                            },
                                        }"
                                        ><button class="button">
                                            <span>Visit </span>
                                        </button></router-link
                                    >
                                    <!-- <router-link
                                        :to="{
                                            name: 'visitRestaurant',
                                            params: {
                                                id: item.id,
                                                title: item.title,
                                                image: item.image,
                                                short_des: item.short_des,
                                                long_des: item.long_des,
                                                Meals: item.Meals,
                                                Menu: item.Menu,
                                            },
                                        }"
                                        ><button class="button" @click="goto()">
                                            <span>Visit </span>
                                        </button></router-link
                                    > -->
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- col 2 -->
            <div class="col-sm-2">
                <img
                    src="../../../public/img/img5.jpg"
                    height="50%"
                    width="100%"
                />
                <img
                    src="../../../public/img/img6.jpg"
                    height="50%"
                    width="100%"
                />
            </div>

            <!-- col 3 -->
            <div class="col-sm-4">
                <div class="sidebar">
                    <div>
                        <input
                            type="text"
                            placeholder="Search Restaurant Name"
                        />
                    </div>
                    <div>
                        <div>Menu</div>
                        <div>
                            <div class="form-check">
                                <ul>
                                    <li v-for="items in Menus" :key="items.id">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckChecked"
                                            style="
                                                border: 2px dotted #00f;
                                                display: block;
                                            "
                                        />
                                        <label for="flexCheckChecked">{{
                                            items.title
                                        }}</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Meals</div>
                        <div class="form-check">
                            <ul>
                                <li v-for="items in Meal" :key="items.id">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        style="
                                            border: 2px dotted #00f;
                                            display: block;
                                        "
                                    />
                                    <label for="flexCheckChecked">{{
                                        items.title
                                    }}</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../jeson/data';
export default {
    name: 'resturants',
    props: ['id', 'title', 'image', 'short_des', 'long_des', 'Meals', 'Menu'],
    data() {
        return {
            restaurants: data.restaurants,
            Menus: data.Menu,
            Meal: data.Meals,
        };
    },
    methods: {
        // goto() {
        //     this.$router.push(`/visitrestaurant`);
        // },
    },
};
</script>

<style scoped>
/* The side navigation menu */
.sidebar {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #f1f1f1;
    /* position: fixed; */
    height: 100%;
    overflow: auto;
}

/* Sidebar links */
.sidebar div {
    display: block;
    color: black;
    padding: 10px;
}
.form-check ul li {
    text-decoration: none;
    list-style: none;
}
input[type='checkbox'] {
    right: 40px;
}
/*
label {
    height: 15px;
    width: 15px;
    display: inline-block;
    padding: 0 0 0 0px;
    margin-right: 5px;
}
input[type='checkbox']:checked + label {
    height: 15px;
    width: 15px;
    display: inline-block;
    padding: 0 0 0 0px;
} */
/* input[type='checkbox'] {
    display: block;
    padding-right: 0;
}

input[type='checkbox'] + label {
    height: 15px;
    width: 15px;
    display: inline-block;
    padding: 0 0 0 0px;
}
input[type='checkbox']:checked + label {
    height: 15px;
    width: 15px;
    display: inline-block;
    padding: 0 0 0 0px;
} */
/* Links on mouse-over */
.sidebar ul li:hover {
    color: #555;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
    .sidebar a {
        text-align: center;
        float: none;
    }
}
.button {
    border-radius: 4px;
    background-color: #be981c;
    border: none;
    color: #141414;
    text-align: center;
    font-size: 15px;
    /* padding: 20px; */
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}

.button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.button span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.button:hover span {
    padding-right: 25px;
}

.button:hover span:after {
    opacity: 1;
    right: 0;
}
</style>
