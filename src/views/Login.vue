<template>
  <v-app id="inspire">
        <v-layout  justify-center>
          <v-flex xs12 sm8 md4>
            <v-card >
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field

                      name="National Id"
                      label="National Id"
                      type="text"
                  ></v-text-field>
                  <v-text-field
                      id="phone"

                      name="Phone number"
                      label="Phone number"
                      type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"  @click="submitForm">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-overline mb-4">Two-Factor Authentication</v-card-title>
            <v-card-text>
              <v-otp-input
                  v-model="otp"
                  :disabled="loading"
                  @finish="onFinish"
                  class="position-relative" style="max-width: 300px"
              ></v-otp-input>
            </v-card-text>
          </v-card>
          <v-overlay opacity="1" absolute :value="loading">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
          </v-overlay>
          </v-dialog>
        </v-layout>

  </v-app>
</template>


<script>


export default {
  data() {
    return {
      phoneNumber: '',
      nationalId: '',
      code: '',
      otp:'',
      valid: null,
      loading:false,
      dialog: false
    }
  },

  methods: {
    submitForm() {
        // Handle form submission
        // Show the two-factor auth dialog
        this.dialog = true
    },
    onFinish (rsp) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
        this.text = (rsp === this.expectedOtp) ? 'Success' : 'Error'
        this.snackbar = true
        this.$router.push("/register/voter");
      }, 3500)
    },
  }
}
</script>
