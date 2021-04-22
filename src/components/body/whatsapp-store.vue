<template>
    <div class="span">
        <a href="https://wa.me/mobilephone/?text=text"
            ><i class="whatsapp fab fa-whatsapp"></i
        ></a>
    </div>
</template>

<script>
export default {
    name: 'whatsapp-store',
};
// https://bit.ly/3d0qwF5
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
    .whatsapp {
        color: #000000;
        font-size: 15px;
        width: 15px;
        height: 15px;
        transition: all 0.8s;
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
    .whatsapp {
        color: #000000;
        font-size: 15px;
        width: 15px;
        height: 15px;
        transition: all 0.8s;
    }
}
@media (min-width: 599px) and (max-width: 767px) {
    .whatsapp {
        color: #000000;
        border-radius: 50px;
        font-size: 15px;
        margin-bottom: 20px;
        width: 15px;
        height: 15px;
        transition: all 0.8s;
    }
    .whatsapp:hover {
        background-color: #25d366;
        box-shadow: 0 0 20px #071d0f;
        transform: translate(0, -10px);
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .whatsapp {
        color: #000000;
        border-radius: 50px;
        font-size: 20px;
        margin-bottom: 20px;
        width: 20px;
        height: 20px;
        transition: all 0.8s;
    }
    .whatsapp:hover {
        background-color: #25d366;
        box-shadow: 0 0 20px #071d0f;
        transform: translate(0, -10px);
    }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    .whatsapp {
        color: #000000;
        border-radius: 50px;
        font-size: 20px;
        margin-bottom: 20px;
        width: 20px;
        height: 20px;
        transition: all 0.8s;
    }
    .whatsapp:hover {
        background-color: #25d366;
        box-shadow: 0 0 20px #071d0f;
        transform: translate(0, -10px);
    }
}
@media (min-width: 1200px) {
    .whatsapp {
        color: #000000;
        border-radius: 50px;
        font-size: 20px;
        margin-bottom: 20px;
        width: 20px;
        height: 20px;
        transition: all 0.8s;
    }
    .whatsapp:hover {
        background-color: #25d366;
        box-shadow: 0 0 20px #071d0f;
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
