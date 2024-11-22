<script setup>
import SocialLogin from "../components/SocialLogin.vue";
import ocLogo from "/oc-logo-docked.svg";
</script>

<template>
  <div class="login-container">
    <v-app-bar app color="primary" elevation="0" height="120">
      <v-img class="right-aligned" :src="ocLogo" width="140"></v-img>
    </v-app-bar>

    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card class="login-card" elevation="3">
            <div class="content-box">
              <h1 class="text-h6 font-weight-bold text-primary text-center">
                Welcome to Student ADA Accommodations System!
              </h1>

              <div class="login-content">
                <SocialLogin />
              </div>
            </div>

            <v-card-text class="text-center text-body-2 text-medium-emphasis mt-4">
              By logging in, you agree to our Terms of Service and Privacy Policy
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.login-container {
  min-height: 100vh;
  background-color: rgb(250, 250, 250);
}

.right-aligned {
  position: absolute;
  right: 0;
}

.login-card {
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.content-box {
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
}

.login-content {
  margin-top: 24px;
}

@media (max-width: 600px) {
  .login-card {
    padding: 20px;
    margin: 16px;
  }
  
  .content-box {
    padding: 16px;
  }
}
</style>