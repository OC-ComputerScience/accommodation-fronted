<script setup>
import { ref, onMounted } from "vue";
import router from "../router";
import emailMessageServices from "../services/emailMessageServices";
import accomCatServices from "../services/accomCatServices";

let emailName = ref("");
let emailDesc = ref("");
let emailText = ref("");
let accomCatId = ref(null);
const cats = ref([]);

function save() {
  let emailData = {
    name: emailName.value,
    description: emailDesc.value,
    text: emailText.value,
    accomCatId: accomCatId.value.accomCatId,
  };

  emailMessageServices.create(emailData);
  router.push({ name: "adminEmailManage" });
}
function cancel() {
  router.push({ name: "adminEmailManage" });
}

async function getAccomCats() {
  try {
    const response = await accomCatServices.getAll();
    cats.value = response.data;
  } catch (err) {
    console.log(err);
  }
}

onMounted(async () => {
  await getAccomCats();
});
</script>

<template>
  <div>
    <v-title class="text-h5" style="font-weight: bold"
      >Add Email Message</v-title
    >
  </div>

  <div class="pa-4">
    <v-card style="background-color: #d5dfe7" class="pa-4">
      <div>
        <p class="pl-5" style="font-weight: bold">Name</p>
        <v-text-field
          class="pl-5 pr-5"
          label=""
          v-model="emailName"
        ></v-text-field>
      </div>
      <div>
        <p class="pl-5" style="font-weight: bold">Description</p>
        <v-text-field
          class="pl-5 pr-5"
          label=""
          v-model="emailDesc"
        ></v-text-field>
      </div>
      <div></div>
      <p class="pl-5" style="font-weight: bold">Category</p>
      <v-combobox
        class="pl-5 pr-5"
        :items="cats"
        item-value="accomCatId"
        item-title="name"
        label="select a category"
        v-model="accomCatId"
        variant="solo"
        return-object
      ></v-combobox>
      <div>
        <p class="pl-5" style="font-weight: bold">Content</p>
        <v-textarea class="pl-5 pr-5" label="" v-model="emailText"></v-textarea>
      </div>
    </v-card>

    <div class="ma-6">
      <v-btn class="ml-4" color="primary" style="float: right" @click="cancel()"
        >cancel</v-btn
      >
      <v-btn
        class="mr-4"
        color="button_blue"
        style="float: right"
        @click="save()"
        >save</v-btn
      >
    </div>
  </div>
</template>
