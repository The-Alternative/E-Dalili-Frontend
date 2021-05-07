<template>
    <div class="span">
        <a href="tel:mobilephone"
            ><img
                class="phone"
                id="callclick"
                v-on:click="clickEvent()"
                src="../../../public/img/phone.png"
                height="20"
        /></a>
        <!--    <a href="#"><i class="whatsapp fab fa-whatsapp"></i></a>-->
    </div>
</template>

<script>
export default {
    name: 'phone-store',
    methods: {
        clickEvent: function () {
            document.getElementById('callclick');
        },
    },
};
</script>
<style scoped>
@media (min-width: 200px) and (max-width: 467px) {
    .span {
        color: #fefefe;
        margin-left: 5px;
        margin-right: 5px;
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        transition: all 0.3s linear;
    }
    .phone {
        height: 15px;
        width: 15px;
        transition: all 0.8s;
    }
}
@media (min-width: 468px) and (max-width: 598px) {
    .span {
        color: #fefefe;
        margin-left: 10px;
        margin-right: 10px;
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        background: #abc8d1;
        transition: all 0.3s linear;
        border-radius: 50%;
        box-shadow: 5px 5px 18px 0 rgba(21, 183, 236, 0.3);
    }
    .phone {
        height: 15px;
        width: 15px;
        transition: all 0.8s;
    }
}
@media (min-width: 599px) and (max-width: 767px) {
    .phone {
        height: 15px;
        margin-right: 10px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .phone:hover {
        background-color: #fa79d3;
        box-shadow: 0 0 20px #000000;
        transform: translate(0, -10px);
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .phone {
        height: 20px;
        /* margin-left: 10px; */
        margin-right: 10px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .phone:hover {
        background-color: #fa79d3;
        box-shadow: 0 0 20px #000000;
        transform: translate(0, -10px);
    }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    .phone {
        height: 20px;
        /* margin-left: 10px; */
        margin-right: 10px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .phone:hover {
        background-color: #fa79d3;
        box-shadow: 0 0 20px #000000;
        transform: translate(0, -10px);
    }
}
@media (min-width: 1200px) {
    .phone {
        height: 20px;
        /* margin-left: 10px; */
        margin-right: 10px;
        border-radius: 50px;
        width: 15px;
        transition: all 0.8s;
    }
    .phone:hover {
        background-color: #fa79d3;
        box-shadow: 0 0 20px #000000;
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
