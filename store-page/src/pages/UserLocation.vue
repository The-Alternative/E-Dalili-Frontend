<!--<template>-->
<!--    <div>-->
<!--        <div id="map"-->
<!--            style="display: flex; align-items: center; justify-content: space-between"-->
<!--        >-->
<!--            <div>-->
<!--                <h1>Your coordinates:</h1>-->
<!--                <p>-->
<!--                    {{ mycoordinates.lat }} latitude,-->
<!--                    {{ mycoordinates.lng }} longitude-->
<!--                </p>-->
<!--            </div>-->
<!--            <div>-->
<!--                <h1>Map coordinates:</h1>-->
<!--                <p>-->
<!--                    {{ mapCoordinates.lat }} latitude,-->
<!--                    {{ mapCoordinates.lng }} longitude-->
<!--                </p>-->
<!--            </div>-->
<!--        </div>-->
<!--        <GmapMap-->
<!--            :center="{ lat: 34.8021, lng: -38.9968 }"-->
<!--            :zoom="7"-->
<!--            style="width:640px; height:360px; margin:32px auto;"-->
<!--        ></GmapMap>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--    name: 'UserLocation.vue',-->
<!--    data() {-->
<!--        return {-->
<!--            mycoordinates: {-->
<!--                lat: 0,-->
<!--                lng: 0,-->
<!--            },-->
<!--            mapCoordinates: {-->
<!--                lat: 0,-->
<!--                lng: 0,-->
<!--            },-->
<!--        };-->
<!--    },-->
<!--    created() {-->
<!--        this.$getLocation({})-->
<!--            .then((coordinates) => {-->
<!--                this.mycoordinates = coordinates;-->
<!--            })-->
<!--            .catch((onerror) => alert(onerror));-->
<!--    },-->
<!--};-->
<!--</script>-->

<!--<style scoped></style>-->
<template>
    <section class="ui two column grid locat">
        <div class="column">
            <form class="ui segment large form">
                <div class="ui message red" v-show="error">{{ error }}</div>
                <div class="ui segment">
                    <div class="field">
                        <div
                            class="ui right icon input large"
                            :class="{ loading: spinner }"
                        >
                            <input
                                type="text"
                                placeholder="Enter Your address"
                                v-model="address"
                                id="autocomplate"
                            />
                            <i
                                class="dot circle link icon"
                                @click="locatorButtonPressed"
                            ></i>
                        </div>
                    </div>
                    <button class="ui button">Go</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            address: '',
            error: '',
            spinner: false,
        };
    },
    mounted() {
        new google.maps.places.Autocomplete(
            document.getElementById('autocomplate')
        );
    },
    methods: {
        locatorButtonPressed() {
            this.spinner = true;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.getAddressForm(
                            position.coords.latitude,
                            position.coords.longitude
                        );
                    },
                    (onerror) => {
                        this.error =
                            'locator is unable to find the address. please type your address manually';
                        this.spinner = false;
                        this.error = onerror.message;
                        // console.log(onerror.messag;e)
                    }
                );
            } else {
                this.error = onerror.message;
                this.spinner = false;
                console.log('Your browser does not support geolocation API');
            }
        },
        getAddressForm(lat, long) {
            axios
                .get(
                    'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
                        lat +
                        ',' +
                        long +
                        '&key=AIzaSyDKZK0T-eh1lVHFN68Fu8c5YlJfueGXkOQ'
                )
                .then((response) => {
                    if (response.data.error_message) {
                        this.error = response.data.error_message;
                        console.log(response.data.error_message);
                    } else {
                        this.address =
                            response.data.results[0].formatted_address;
                        // console.log(response.data.results[0].formatted_address);
                    }
                    this.spinner = false;
                })
                .catch((onerror) => {
                    this.error = onerror.message;
                    this.spinner = false;
                    console.log(onerror.message);
                });
        },
    },
};
</script>

<style scoped>
.locat {
    align-content: center;
    padding-top: 10%;
    padding-left: 30%;
}
.ui.button,
.dot.circle.icon {
    background-color: #ff5a5f;
    color: #ffffff;
}
</style>
