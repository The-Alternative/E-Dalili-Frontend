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
export default {
  name:"UserLocation",

}
</script>

<!--<script>-->
<!--import axios from 'axios';-->
<!--export default {-->
<!--  name:"UserLocation",-->
<!--    data() {-->
<!--        return {-->
<!--            address: '',-->
<!--            error: '',-->
<!--            spinner: false,-->
<!--        };-->
<!--    },-->
<!--    mounted() {-->
<!--        new google.maps.places.Autocomplete(-->
<!--            document.getElementById('autocomplate')-->
<!--        );-->
<!--    },-->
<!--    methods: {-->
<!--        locatorButtonPressed() {-->
<!--            this.spinner = true;-->
<!--            if (navigator.geolocation) {-->
<!--                navigator.geolocation.getCurrentPosition(-->
<!--                    (position) => {-->
<!--                        this.getAddressForm(-->
<!--                            position.coords.latitude,-->
<!--                            position.coords.longitude-->
<!--                        );-->
<!--                    },-->
<!--                    (onerror) => {-->
<!--                        this.error =-->
<!--                            'locator is unable to find the address. please type your address manually';-->
<!--                        this.spinner = false;-->
<!--                        this.error = onerror.message;-->
<!--                    }-->
<!--                );-->
<!--            } else {-->
<!--                this.error = onerror.message;-->
<!--                this.spinner = false;-->
<!--                console.log('Your browser does not support geolocation API');-->
<!--            }-->
<!--        },-->
<!--        getAddressForm(lat, long) {-->
<!--            axios-->
<!--                .get(-->
<!--                    'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +-->
<!--                        lat +-->
<!--                        ',' +-->
<!--                        long +-->
<!--                        '&key=AIzaSyDKZK0T-eh1lVHFN68Fu8c5YlJfueGXkOQ'-->
<!--                )-->
<!--                .then((response) => {-->
<!--                    if (response.data.error_message) {-->
<!--                        this.error = response.data.error_message;-->
<!--                        console.log(response.data.error_message);-->
<!--                    } else {-->
<!--                        this.address =-->
<!--                            response.data.results[0].formatted_address;-->
<!--                    }-->
<!--                    this.spinner = false;-->
<!--                })-->
<!--                .catch((onerror) => {-->
<!--                    this.error = onerror.message;-->
<!--                    this.spinner = false;-->
<!--                    console.log(onerror.message);-->
<!--                });-->
<!--        },-->
<!--    },-->
<!--};-->
<!--</script>-->

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
