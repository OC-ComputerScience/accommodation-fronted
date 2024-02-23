<script setup>
    import AccommodationServices from "../services/accommodationServices.js";
    import accomCatServices from "../services/accomCatServices";
    import { ref, onMounted } from 'vue';
    import router from '../router';
import accommodationServices from "../services/accommodationServices.js";


const newAccom = ref({
    title: "",
    description: "",
    categoryName: "",
});

    const props = defineProps({
        accomID: {
            required: true,
        }
    });

    const accom = ref([]);
    const accoms = ref([]);
    const editedAccom = ref([]);
    const cats = ref([]);
    const select = ref(null);

    console.log('props',props.accomID);

    async function getAccommodations(){
        try {
            const response = await AccommodationServices.getAll();
            accoms.value = response.data;
            console.log(response)
        } catch (err) {
            console.log(err);
        }
    }
    async function getAccomCats(){
        try {
            const response = await accomCatServices.getAll();
            cats.value = response.data;
            setCategories();
            console.log('cats:', response.data[1].name)
        } catch (err) {
            console.log(err)
        }
    }
    function setCategories(){
        const uniqueCategories = new Set(cats.value.map(item => item.name));
        cats.value = Array.from(uniqueCategories).map(name => ({ name }));
    }
    function setDefaultCatValues() {
        select.value = accom.value.map((accom) => accom.categoryName);
    }

AccommodationServices.getOne(props.accomID)
    .then((response) => {
        console.log(props.accomID);
    });

    async function getAccom(){
        try {
            const response = await AccommodationServices.getOne(props.accomID);
            accom.value = response.data;
        } catch (err) {
            console.log(err);
        }
    }

    onMounted(async() =>{
        await getAccom();
        await getAccommodations();
        await getAccomCats();
        setDefaultCatValues();
    })


    function save() {
        newAccom.value.categoryName = select.value;
        accommodationServices.update(props.accomID, newAccom.value);
        router.push({ name: "adminViewAccom" });
       
    }


    //Go and read the DB for the Accom


</script>

<template>
    <div>
        <v-title class="text-h5" style="font-weight: bold;">Edit Accommodation</v-title>
    </div>

    <div class="pa-4">
        
        <v-card style="background-color:#D5DFE7" class="pa-4">
            <div>
                <p class="pl-5" style="font-weight: bold;">Accommodation Title</p>
                <v-text-field class="pl-5 pr-5" v-model ="newAccom.title" v-bind="editedAccom" :placeholder="accom.title"></v-text-field>
            </div>
            <div>
                <p class="pl-5" style="font-weight: bold;">Accommodation Description</p>
                <v-text-field  class="pl-5 pr-5" v-model ="newAccom.description" v-bind="editedAccom" :placeholder="accom.description" ></v-text-field>
            </div>
            <div>
                <p class="pl-5" style="font-weight: bold;">Accommodation Category</p>
                    <v-select class="pl-5 pr-5"
                            :items="cats.map(cat => cat.name)"
                            label="category"
                            v-model="select"
                        ></v-select>
            </div>
        </v-card>


        <div class="ma-6">
            <v-btn class="ml-4" style="float:right" @click="cancel()">cancel</v-btn>
            <v-btn class="mr-4" color="#F9C634" style="float:right" @click="save()">save</v-btn>
        </div>
    </div>
    
</template>