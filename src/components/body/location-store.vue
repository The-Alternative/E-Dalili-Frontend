<template>
    <div>
        <router-link to="/location"
            ><img class="location" src="../../../public/img/location.png" height="20"
        /></router-link>
    </div>
</template>

<script>
import UserLocation from '../../pages/UserLocation';
export default {
    component: {
        UserLocation,
    },
    name: 'location-store',
};
</script>

<style scoped>
@media (min-width: 200px) and (max-width: 467px) {
    .location {
        height: 15px;
        margin-left: 40px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .location:hover {
        transform: translate(0, -10px);
    }
}
@media (min-width: 468px) and (max-width: 598px) {
    .location {
        height: 15px;
        margin-left: 130px;
        margin-right: 10px;
        margin-right: 10px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .location:hover {
        transform: translate(0, -10px);
    }
}
@media (min-width: 599px) and (max-width: 767px) {
    .location {
        height: 15px;
        margin-left: 90px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .location:hover {
        transform: translate(0, -10px);
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .location {
        margin-left: 80px;
        margin-right: 10px;
        margin-right: 10px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .location:hover {
        transform: translate(0, -10px);
    }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    .location {
        margin-left: 120px;
        margin-right: 10px;
        margin-right: 10px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .location:hover {
        transform: translate(0, -10px);
    }
}
@media (min-width: 1200px) {
    .location {
        margin-left: 190px;
        margin-right: 10px;
        margin-right: 10px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .location:hover {
        transform: translate(0, -10px);
    }
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    overflow-x: hidden;
}
</style>
