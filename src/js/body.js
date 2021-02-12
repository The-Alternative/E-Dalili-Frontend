import data from '../jeson/data.json';
import BtnvisitStore from "../components/body/btnvisit-store";
import LocationStore from "../components/body/location-store";
import PhoneStore from "../components/body/phone-store";
import WhatsappStore from "../components/body/whatsapp-store";
import UserLocation from "../pages/UserLocation";
export default {
    components: {UserLocation,WhatsappStore, PhoneStore, LocationStore, BtnvisitStore},
    data() {
        return {
            stores: data.stores,
            IsCheckAll: false,
            categories: data.categories,
            languages: [],
            selectedlang: '',
            rate: 0,
        };
    },

    methods: {
        CheckAll: function() {
            this.IsCheckAll = !this.IsCheckAll;
            this.languages = [];

            if (this.IsCheckAll) {
                for (var key in this.categories) {
                    this.languages.push(this.categories[key]);
                }
            }
        },
        updateCheckall: function() {
            if (this.languages.length === this.categories.length) {
                this.IsCheckAll = true;
            } else {
                this.IsCheckAll = false;
            }
        },
        printvalues: function() {
            this.selectedlang = '';
            for (var key in this.languages) {
                this.selectedlang += this.languages[key] + '|';
            }
        },
        btnbar: function() {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
    },
}