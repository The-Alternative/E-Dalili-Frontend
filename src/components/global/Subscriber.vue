<template>
    <div class="subscriber text-center">
        <div class="name-market">{{ title }}</div>
        <img src="" />
        <!-- <div class="postion-market">{{ location }}</div> -->
        <button type="button" class="btn btn-light">{{ $t('visit') }}</button>
    </div>
</template>
<style scoped>
.last-subscriber .subscriber {
    background-color: #fff;
    width: 85%;
    height: 100px;
    margin: 10px 0 -4px 20px;
    border-radius: 5px;
    color: #786666;
    font-size: 19px;
}
.last-subscriber .subscriber .name-market {
    margin: 5px 0 5px 0;
    font-weight: bold;
}
.last-subscriber .subscriber .postion-market {
    font-weight: 1;
}
.last-subscriber .subscriber button {
    background-color: #d5caca;
    height: 30px;
    width: 74px;
    padding: 0px;
    font-size: 17px;
}

.last-subscriber .subscriber img {
    width: 45px;
    position: absolute;
    right: 30px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .last-subscriber .subscriber {
        width: 85%;
        margin: 10px 0 -4px 25px;
    }
    .last-subscriber .subscriber img {
        right: 15%;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .last-subscriber .subscriber {
        font-size: 12px;
        height: 69px;
    }
    .last-subscriber .subscriber img {
        width: 35px;
        right: 12px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .last-subscriber .subscriber {
        font-size: 15px;
        height: 79px;
    }
    .last-subscriber .subscriber img {
        right: 18px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .last-subscriber .subscriber {
        font-size: 16px;
    }
    .last-subscriber .subscriber img {
        right: 16px;
    }
}
/* ------------------------------------------ */
</style>
<script>
export default {
    name: 'Subscriber',
    props: ['title', 'location'],
};
</script>
