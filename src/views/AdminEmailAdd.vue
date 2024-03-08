<script setup>
    import { ref, onMounted } from 'vue';
    import router from '../router';
import emailMessageServices from "../services/emailMessageServices";

    let emailName = ref('');
    let emailDesc = ref('');
    let emailText = ref('');

   
    function save(){
        let emailData = {
            name: emailName.value,   
            description: emailDesc.value,
            text: emailText.value,
        };

        emailMessageServices.create(emailData);
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
                <p class="pl-5" style="font-weight: bold;">Content</p>
                <v-text-field class="pl-5 pr-5" label="" v-model="emailText"></v-text-field>
            </div>
            
        </v-card>

        <div class="ma-6">
            <v-btn class="ml-4" style="float:right" @click="cancel()">cancel</v-btn>
            <v-btn class="mr-4" color="button_blue" style="float:right" @click="save()">save</v-btn>
        </div>
    </div>
</template>