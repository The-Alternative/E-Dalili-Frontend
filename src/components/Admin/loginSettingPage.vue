<template>
    <div>
        <Nav />
        <div class="body">
            <div class="auth-wrapper">
                <div class="auth-inner">
                    أهلا بك في المنصة قم بتسجيل الدخول
                    <!-- <signup /> -->
                    <!-- <login/> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Nav: () => import('./Nav'),
        // login: () => import('./Login'),
        // signup: () => import('./Signup'),
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}
body {
    min-height: 100vh;
    background-color: #fefefe;
    display: flex;
    font-family: 'Fira Sans', sans-serif;
}
.auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
}
.auth-inner {
    width: 450px;
    margin: auto;
    text-align: center;
    background: #fff;
    box-shadow: 0 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all 0.3s;
}
.auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
}
.auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
}
.custom-control-label {
    font-weight: 400;
}
.forgot-password,
.forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7f7d7d;
    margin: 0;
}
.forgot-password a {
    color: #167bff;
}
</style>
