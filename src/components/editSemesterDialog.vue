<script setup>
  import { ref } from 'vue'; 
  
  const dialog = ref(false); 
  
  const isDatePickerVisible = ref(false); 
      const toggleDatePicker = () => {
          isDatePickerVisible.value = !isDatePickerVisible.value;
      };

</script>

<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="700">
      <template v-slot:activator="{ props: activatorProps }">
      <!-- <template v-slot:activator="{ props: activatorProps }"> -->
        <v-btn 
        class="mr-4" 
        color="#F9C634" 
        style="float:right" 
        v-bind="activatorProps"
        >edit</v-btn>
        <!-- @click="editSemester(semester.semesterId)">edit</v-btn> -->
      </template>

      <v-card title="Semester">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field
                label="Season*"
                required
                hint="Fall/Spring"
              ></v-text-field>
            </v-col>

            <v-col cols="14" md="4" sm="6">
              <v-text-field 
              label="Start Date*"
              required
              @click="toggleDatePicker"
              >
              <template v-slot:append>
                  <v-icon @click="toggleDatePicker">mdi-calendar</v-icon>
                </template>
            </v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field 
              label="End Date*" 
              required
              @click="toggleDatePicker"
              >
              <template v-slot:append>
                  <v-icon @click="toggleDatePicker">mdi-calendar</v-icon>
                </template>
            </v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >*indicates required field</small
          >
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="dialog = false"> </v-btn>
          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
