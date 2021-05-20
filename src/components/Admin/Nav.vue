<template>
    <nav class="navbar navbar-expand">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/Admin"
                    ><a class="navbar-brand a">LOGIN PAGE</a></router-link
                >
            </div>
            <div class="login-container">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link to="/signup" class="a" href="#"
                            ><span class="glyphicon glyphicon-user"></span> Sign
                            Up</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/login" class="a" href="#"
                            ><span class="glyphicon glyphicon-log-in"></span>
                            Login</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}
body {
    min-height: 100vh;
    display: flex;
    font-family: 'Fira Sans', sans-serif;
}
.navbar {
    width: 100%;
    background-color: #555;
    overflow: auto;
}
.container {
    padding: 0;
    width: 100%;
}
.container .a {
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 17px;
}
</style>
