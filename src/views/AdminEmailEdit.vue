<script setup>
    import AccommodationServices from "../services/accommodationServices.js";
    import accomCatServices from "../services/accomCatServices";
    import { ref, onMounted,defineProps } from 'vue';
    import router from '../router';
    import emailMessageServices from "../services/emailMessageServices";

    const props = defineProps({
        emailMessageId: {
            required: true,
        },
        
    });

    const accoms = ref([]);
    const cats = ref([]);
    const select = ref([]);


    let emailName = ref('');
    let emailDesc = ref('');
    let emailCat = ref('');
    let emailText = ref('');

    onMounted(async () => {
    console.log("In edit with emailMessageId: " + props.emailMessageId);
    const emailMessage = await emailMessageServices.getOne(props.emailMessageId);
    
    emailName.value = emailMessage.data.name;
    emailDesc.value = emailMessage.data.description;
    emailCat.value = emailMessage.data.category;
    emailText.value = emailMessage.data.text;

});

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
            setDefaultCatValues();
        } catch (err) {
            console.log(err)
        }
    }
    function setCategories(){
        const uniqueCategories = new Set(cats.value.map(item => item.name));
        cats.value = Array.from(uniqueCategories).map(name => ({ name }));
    }
    function setDefaultCatValues() {
        select.value = accoms.value.map((accom) => accom.categoryName);
    }
    onMounted(async() =>{
        await getAccommodations();
        await getAccomCats();
        setDefaultCatValues();
    })


   
    function save(){
        let emailData = {
            name: emailName.value,   
            description: emailDesc.value,
            category: emailCat.value,
            text: emailText.value,
        };

        emailMessageServices.update(props.emailMessageId, emailData);
        router.push({ name: 'adminEmailManage'});
    }
    function cancel(){
        router.push({ name: 'adminEmailManage'});
    }
</script>

<template>
    <div>
        <v-title class="text-h5" style="font-weight: bold;">Add Email Message</v-title>
    </div>

    <div class="pa-4">
        
        <v-card style="background-color:#D5DFE7" class="pa-4">
           
            <div>
                <p class="pl-5" style="font-weight: bold;">Name</p>
                <v-text-field class="pl-5 pr-5" label="" v-model="emailName"></v-text-field>
            </div>
            <div>
                <p class="pl-5" style="font-weight: bold;">Description</p>
                <v-text-field class="pl-5 pr-5" label="" v-model="emailDesc"></v-text-field>
            </div>
            <div>
                <p class="pl-5" style="font-weight: bold;">Category</p>
                <td>
                    <v-combobox
                        class="pl-5"
                        style="width: 200px;"
                        :items="cats.map(cat => cat.name)"
                        label="category"
                        v-model="emailCat"
                    ></v-combobox>
                </td>
            </div>
            <div>
                <p class="pl-5" style="font-weight: bold;">Content</p>
                <v-textarea class="pl-5 pr-5" label="" v-model="emailText"></v-textarea>
            </div>
            
        </v-card>

        <div class="ma-6">
            <v-btn class="ml-4" style="float:right" @click="cancel()">cancel</v-btn>
            <v-btn class="mr-4" color="button_blue" style="float:right" @click="save()">save</v-btn>
        </div>
    </div>
</template>