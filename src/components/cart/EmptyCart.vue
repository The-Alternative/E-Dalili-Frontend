<template>
    <div
        class="container my-5"
        style="text-align: center"
    >
        <img
            src="../../../public/img/ShoppingCart.jpg"
            width="200px"
        />
        <div class="mt-4">
            <h4
                class="orange-red fw-600"
            >
                Your cart is empty
            </h4>
            <h5 class="darkblue fw-600">
                You can go to home page
                to view more food items.
            </h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmptyCart',
};
</script>

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
