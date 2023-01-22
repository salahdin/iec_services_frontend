<template>
  <div class="pa-10 ma-7">
    <h3>Candidate registration form</h3>
    <v-stepper v-model="step" class="mt-5">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">Personal Details</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 2" step="2">Candidacy Profile</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Documents</v-stepper-step>
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
              <v-text-field label="District" v-model="district" required></v-text-field>
            </v-col>

            <v-col>
              <v-text-field label="Party Member" v-model="party" required></v-text-field>
              <v-text-field label="Constituency of Registration" v-model="constituency" required></v-text-field>
            </v-col>

            <v-col>
              <v-text-field label="Party Name" v-model="party" required></v-text-field>
              <v-text-field label="Candidacy Position" v-model="position" required></v-text-field>
            </v-col>
          </v-row>

          <v-spacer></v-spacer>

          <v-row>
            <v-col>
                <p>Upload an icon to represent your party</p>
                <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Avatar"
                ></v-file-input>

            </v-col>
            <v-col>
              <p>Pick a color to represent your party</p>
              <v-color-picker
                  dot-size="8"
                  show-swatches
                  swatches-max-height="200"
              ></v-color-picker>
            </v-col>
          </v-row>
          <v-btn class="ma-2" color="primary" @click="step = 3">Proceed</v-btn>
          <v-btn class="ma-2" color="secondary" @click="step = 1">Back</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <h3>Documents</h3>
                <v-expansion-panels focusable>
                  <v-expansion-panel>
                    <v-expansion-panel-header> Proposer </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <small>Provide the proposer ID copy and Form</small>
                      <v-file-input
                          label="File input"
                          outlined
                          dense
                      ></v-file-input>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
          <v-spacer></v-spacer>
          <v-expansion-panels focusable>
            <v-expansion-panel>
              <v-expansion-panel-header> Seconder </v-expansion-panel-header>
              <v-expansion-panel-content>
                <small>Provide the seconder ID copy and Form</small>
                <v-file-input
                    label="File input"
                    outlined
                    dense
                ></v-file-input>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-spacer></v-spacer>

          <v-expansion-panels focusable>
            <v-expansion-panel>
              <v-expansion-panel-header> Supporter </v-expansion-panel-header>
              <v-expansion-panel-content>
                <small>Provide the Supporter ID copy and Form</small>
                <v-file-input
                    label="File input"
                    outlined
                    dense
                ></v-file-input>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels focusable>
            <v-expansion-panel>
              <v-expansion-panel-header> Receipts </v-expansion-panel-header>
              <v-expansion-panel-content>
                <small>Provide the Receipts copy and Form</small>
                <v-file-input
                    label="File input"
                    outlined
                    dense
                ></v-file-input>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>


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
      district: '',
      position:'',
      state: '',
      party:'',
      constituency:'',
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