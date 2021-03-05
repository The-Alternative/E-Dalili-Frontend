import data from '../jeson/data.json';
import LocationStore from '../components/body/location-store';
import PhoneStore from '../components/body/phone-store';
import WhatsappStore from '../components/body/whatsapp-store';
import UserLocation from '../pages/UserLocation';
export default {
    components: {
        UserLocation,
        WhatsappStore,
        PhoneStore,
        LocationStore
    },
    data() {
        return {
            categories: data.categories,
            rate: 0,
            selectedCategory: [],
           
        };
    },
    props: ['title','space'],
    computed: {
        activeStores: function() {
            if (this.selectedCategory.length == 0) return this.stores;
            var activeStores = [];
            var filters = this.selectedCategory;

            this.stores.forEach(function(store) {
                function storeContainsFilter(filter) {
                    return store.categories.indexOf(filter) != -1;
                }
                if (filters.every(storeContainsFilter)) {
                    activeStores.push(store);
                }
            });
            return activeStores;
        },
        stores() {
                return this.$store.state
                    .stores;
            },
    },
    methods: {
        btnbar: function() {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
        goto: function(t,a) {
            this.$router.push(`visitStore/${t}/${a}`);
        },
    },
};
