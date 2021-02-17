import data from '../jeson/data.json';
import BtnvisitStore from '../components/body/btnvisit-store';
import LocationStore from '../components/body/location-store';
import PhoneStore from '../components/body/phone-store';
import WhatsappStore from '../components/body/whatsapp-store';
import UserLocation from '../pages/UserLocation';
export default {
    components: {
        UserLocation,
        WhatsappStore,
        PhoneStore,
        LocationStore,
        BtnvisitStore,
    },
    data() {
        return {
            stores: data.stores,
            categories: data.categories,
            rate: 0,
        };
    },

    methods: {
        btnbar: function() {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
    },
};
