<template>
    <div>
        <div
            style="display: flex; align-items: center; justify-content: space-between"
        >
            <div>
                <h1>Your coordinates:</h1>
                <p>
                    {{ mycoordinates.lat }} latitude,
                    {{ mycoordinates.lng }} longitude
                </p>
            </div>
            <div>
                <h1>Map coordinates:</h1>
                <p>
                    {{ mapCoordinates.lat }} latitude,
                    {{ mapCoordinates.lng }} longitude
                </p>
            </div>
        </div>
        <GmapMap
            :center="{ lat: 10, lng: 10 }"
            :zoom="10"
            style="width:640px; height:360px; margin:32px auto;"
        ></GmapMap>
    </div>
</template>

<script>
export default {
    name: 'UserLocation.vue',
    data() {
        return {
            mycoordinates: {
                lat: 0,
                lng: 0,
            },
            mapCoordinates: {
                lat: 0,
                lng: 0,
            },
        };
    },
    created() {
        this.$getLocation({})
            .then((coordinates) => {
                this.mycoordinates = coordinates;
            })
            .catch((onerror) => alert(onerror));
    },
};
</script>

<style scoped></style>
