<script setup>
import { ref, onMounted, defineProps } from "vue";
import router from "../router";
import emailMessageServices from "../services/emailMessageServices";
import accomCatServices from "../services/accomCatServices";

const props = defineProps({
  emailMessageId: {
    required: true,
  },
});
const emailName = ref("");
const emailDesc = ref("");
const emailText = ref("");
const cats = ref([]);
const accomCatId = ref(null);

async function getAccomCats() {
  try {
    const response = await accomCatServices.getAll();
    cats.value = response.data;
  } catch (err) {
    console.log(err);
  }
}

onMounted(async () => {
  getAccomCats();

  const emailMessage = await emailMessageServices.getOne(props.emailMessageId);

  emailName.value = emailMessage.data.name;
  emailDesc.value = emailMessage.data.description;
  emailText.value = emailMessage.data.text;
  accomCatId.value = emailMessage.data.accomCatId;
});

function save() {
  let emailData = {
    name: emailName.value,
    description: emailDesc.value,
    text: emailText.value,
    accomCatId: accomCatId.value.accomCatId,
  };

  emailMessageServices.update(props.emailMessageId, emailData);
  router.push({ name: "adminEmailManage" });
}
function cancel() {
  router.push({ name: "adminEmailManage" });
}
</script>

<template>
  <div>
    <v-title class="text-h5" style="font-weight: bold"
      >Edit Email Message</v-title
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
