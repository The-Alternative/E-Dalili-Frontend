<template>
    <div class="container my-5" style="text-align: center">
        <img src="../../../public/img/ShoppingCart.jpg" width="200px" />
        <div class="mt-4">
            <h4 class="orange-red fw-600">
                {{ $t('YourCartEmpty') }}
            </h4>
            <h5 class="darkblue fw-600">
                {{ $t('YouGoHomePageViewFoodItems') }}
            </h5>
        </div>
    </div>
</template>
<style scoped>
.orange-red {
    color: #b21f2d;
}
.darkblue {
    color: blue;
}
.fw-600 {
    font-weight: 600;
}
</style>
<script>
export default {
    name: 'EmptyCart',
};
</script>
