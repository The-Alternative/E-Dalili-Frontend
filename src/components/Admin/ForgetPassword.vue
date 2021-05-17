<template>
    <div>
        <Nav />
        <div>Forget</div>
    </div>
</template>

<script>
export default {
    name: 'forgotpassword',
    components: {
        Nav: () => import('./Nav'),
    },
};
</script>
