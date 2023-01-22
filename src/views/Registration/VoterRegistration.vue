<template>
  <div class="pa-10 ma-7">
    <h3>Welcome to our registration form!</h3>
    <v-stepper v-model="step" class="mt-5">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">Personal Details</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 2" step="2">Location Details</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Verification</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-form>
            <v-row>
              <v-col>
                <v-text-field label="First Name" v-model="f_name" required></v-text-field>
                <v-text-field label="Last Name" v-model="l_name" required></v-text-field>
                <v-text-field label="Omang/ID number" v-model="omang" required></v-text-field>
              </v-col>
              <v-col>
                <v-select
                    v-model="gender"
                    :items="genders"
                    label="Gender"
                ></v-select>
                <v-text-field
                    v-model="phoneNumber"
                    label="Phone Number"
                    :rules="phoneRules"
                    required
                    @input="$v.phoneNumber.$touch()"
                    @blur="$v.phoneNumber.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="dob"
                    label="Date of Birth"
                    type="date"
                    :rules="dobRules"
                    required
                    @input="$v.dob.$touch()"
                    @blur="$v.dob.$touch()"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="step = 2">Next</v-btn>
          </v-form>
        </v-stepper-content>

        <v-stepper-content step="2">
            <v-row>
              <v-col>
                <v-text-field label="Current place of residence" v-model="address" required></v-text-field>
                <v-text-field label="State" v-model="state" required></v-text-field>
              </v-col>

              <v-col>
                <v-text-field label="District" v-model="city" required></v-text-field>
                <v-text-field label="Village" v-model="zip" required></v-text-field>
              </v-col>
            </v-row>
          <v-btn class="ma-2" color="primary" @click="step = 3">Proceed</v-btn>
          <v-btn class="ma-2" color="secondary" @click="step = 1">Back</v-btn>
        </v-stepper-content>

        <v-stepper-content class="pa-15" step="3">

          <TwoFactorAuthentication/>
            <v-btn class="ma-2" color="success" @click="validateStep3">Done</v-btn>
            <v-btn class="ma-2" color="secondary" @click="step = 2">Back</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>


<script>
import TwoFactorAuthentication from "./components/TwoFactorAuthentication.vue";
export default {
  data() {
    return {
      step: 1,
      name: '',
      email: '',
      password: '',
      address: '',
      phoneNumber: '',
      gender: '',
      dob: '',
      city: '',
      state: '',
      omang:'',
      zip: '',
      terms: false,
      termsLabel: 'I accept the terms and conditions',
      lastStep: 4,
      steps: [
        {name: "Start", rules: [v => !!v || "Required."], valid: true},
        {name: "Step 2", rules: [v=> !!v || "Required."], valid: true},
        {name: "Step 3", rules: [v => (v && v.length >= 4) || "Enter at least 4 characters."], valid: true},
        {name: "Complete"},
      ],
      genders: ['Male', 'Female'],
      valid: false,
    }
  },
  components:{
    TwoFactorAuthentication
  },
  methods: {

      stepComplete(step) {
        return this.curr > step
      },
      stepStatus(step) {
        return this.curr > step ? 'green' : 'blue'
      },
      validate(n) {
        this.steps[n].valid = false
        let v = this.$refs.stepForm[n].validate()
        if (v) {
          this.steps[n].valid = true
          // continue to next
          this.curr = n+2
        }
      },
      done() {
        this.curr = 5
      }
  }
}
</script>