<template>
  <div>
    <p>A one time password has been sent to your phone</p>
    <v-row>
      <v-col cols="8">
        <v-otp-input
            v-model="otp"
            :disabled="loading"
            @finish="onFinish"
            class="position-relative" style="max-width: 300px"
        ></v-otp-input>
      </v-col>
      <v-col cols="4">
        <v-img
            :src="require('@/assets/illustrations/2fa.svg')"
          class="my-3"
          contain
          height="100"/>

      </v-col>
    </v-row>
      <v-overlay absolute :value="loading">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
      </v-overlay>
    <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        :timeout="2000"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>


<script>
export default {
  data: () => ({
    loading: false,
    snackbar: false,
    snackbarColor: 'default',
    otp: '',
    text: '',
    expectedOtp: '123456',
    valid: false,
  }),
  methods: {
    onFinish (rsp) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
        this.text = (rsp === this.expectedOtp) ? 'Success' : 'Error'
        this.snackbar = true
      }, 3500)
    },
  },
}
</script>

<style scoped>
.position-relative {
  position: relative;
}
</style>