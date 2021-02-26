<template>
    <div>
        <a href="#"
            ><img class="phone" src="../../../public/img/phone.png" height="20"
        /></a>
        <!--    <a href="#"><i class="whatsapp fab fa-whatsapp"></i></a>-->
    </div>
</template>

<script>
export default {
    name: 'phone-store',
};
</script>
<style scoped>
@media (min-width: 200px) and (max-width: 467px) {
    .phone {
        height: 15px;
        margin-left: 10px;
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
@media (min-width: 468px) and (max-width: 598px) {
    .phone {
        height: 15px;
        margin-left: 10px;
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
@media (min-width: 599px) and (max-width: 767px) {
    .phone {
        height: 15px;
        margin-left: 10px;
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
        margin-left: 10px;
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
        margin-left: 10px;
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
        margin-left: 10px;
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
