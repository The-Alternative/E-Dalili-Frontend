<template>
    <div>
        <button type="button" class="btn w-75">
            <b>زيارة</b>
        </button>
    </div>
</template>

<script>
export default {
    name: 'btnvisit-store',
};
</script>

<style scoped>
@media (min-width: 200px) and (max-width: 467px) {
    .btn {
        font-weight: bold;
        font-size: 12px;
        height: 30px;
        width: 6px;
        margin-left: 60px;
    }
}
@media (min-width: 468px) and (max-width: 598px) {
    /*!*!*!*!*button visit store*!*!*!*!*/
    .btn {
        font-weight: bold;
        font-size: 12px;
        height: 30px;
        width: 8px;
        margin-left: 100px;
    }
}
@media (min-width: 599px) and (max-width: 767px) {
    /*!*!*!*!*button visit store*!*!*!*!*/
    .btn {
        font-weight: bold;
        font-size: 10px;
        height: 25px;
        width: 8px;
        margin-left: 70px;
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    /*!*!*!*button visit store*!*!*!*/
    .btn {
        margin-left: 70px;
        height: 30px;
    }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    /*!*!*button visit store*!*!*/
    .btn {
        margin-left: 90px;
        width: 20px;
    }
}
@media (min-width: 1200px) {
    /*button visit store*/
    .btn {
        margin-left: 150px;
        background-color: #66ff66;
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
.btn {
    background-color: #00cc44;
    color: #ffffff;
}
</style>
