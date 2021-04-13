<template>
    <div class="span">
        <img
            class="location"
            src="../../../public/img/location.png"
            height="20"
        />
    </div>
</template>

<script>
export default {
    name: 'location-store',
};
</script>

<style scoped>
@media (min-width: 200px) and (max-width: 467px) {
    .span {
        color: #fefefe;
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        transition: all 0.3s linear;
    }
    .location {
        height: 15px;
        width: 15px;
        transition: all 0.8s linear;
    }
}
@media (min-width: 468px) and (max-width: 598px) {
    .span {
        color: #fefefe;
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        background: #abc8d1;
        transition: all 0.3s linear;
        border-radius: 50%;
        box-shadow: 5px 5px 18px 0 rgba(21, 183, 236, 0.3);
    }
    .location {
        height: 15px;
        width: 15px;
        transition: all 0.8s linear;
    }
}
@media (min-width: 599px) and (max-width: 767px) {
    .location {
        height: 15px;
        margin-right: 10px;
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
        /* margin-left: 80px; */
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
        /* margin-left: 70px; */
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
        /* margin-left: 0px; */
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
