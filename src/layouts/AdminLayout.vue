<template>
    <div>
      <MenuBar />
      <v-container>
        <router-view />
      </v-container>
    </div>
</template>
  
<script setup>
  import MenuBar from "../components/MenuBar.vue";
</script>
  