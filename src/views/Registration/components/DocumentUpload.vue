<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header">Proposer Document</div>
        <v-form ref="form1" v-model="valid1" lazy-validation>
          <v-file-input
              v-model="proposer"
              :rules="fileRules"
              label="Upload proposer document"
              prepend-icon="mdi-file-upload"
              :show-size="1000"
              :clearable="clearable"
              @change="submit1"
          ></v-file-input>
          <v-alert
              :value="showAlert1"
              color="success"
              icon="mdi-check"
              class="mt-5"
          >
            Successfully uploaded proposer document!
          </v-alert>
        </v-form>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header">Seconder Document</div>
        <v-form ref="form2" v-model="valid2" lazy-validation>
          <v-file-input
              v-model="seconder"
              :rules="fileRules"
              label="Upload seconder document"
              prepend-icon="mdi-file-upload"
              :show-size="1000"
              :clearable="clearable"
              @change="submit2"
          ></v-file-input>
          <v-alert
              :value="showAlert2"
              color="success"
              icon="mdi-check"
              class="mt-5"
          >
            Successfully uploaded seconder document!
          </v-alert>
        </v-form>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header">Supporters Documents</div>
        <v-form ref="form3" v-model="valid3" lazy-validation>
          <v-file-input
              v-model="supporters"
              :rules="multipleFileRules"
              label="Upload supporter documents"
              prepend-icon="mdi-file-upload"
              :show-size="1000"
              :clearable="clearable"
              @change="submit3"
          ></v-file-input>
          <v-alert
              :value="showAlert3"
              color="success"
              icon="mdi-check"
              class="mt-5"
          >
            Successfully uploaded supporter documents!
          </v-alert>
        </v-form>
      </v-expansion-panel-content>
    </v-expansion-panel>

  </v-expansion-panels>
</template>

<script>
export default {
  data() {
    return {
      valid1: true,
      valid2: true,
      valid3: true,
      proposer: null,
      seconder: null,
      supporters: [],
      fileRules: [
        value => !!value || "Document is required",
        value => (value && value.size <= 1000000) || "Document size should be less than 1MB"
      ],
      multipleFileRules: [
        value => !!value || "Documents are required",
        value => (value && value.length <= 5) || "Maximum of 5 documents are allowed",
        value => (value && value.every(file => file.size <= 1000000)) || "Document size should be less than 1MB"
      ],
      clearable: true,
      showAlert1: false,
      showAlert2: false,
      showAlert3: false
    };
  },
  methods: {
    submit1() {
      this.$refs.form1.validate().then(valid => {
        if (valid) {
          // Perform file upload for proposer document here
          this.showAlert1 = true;
          setTimeout(() => {
            this.showAlert1 = false;
          }, 3000);
        }
      });
    },
    submit2() {
      this.$refs.form2.validate().then(valid => {
        if (valid) {
          // Perform file upload for seconder document here
          this.showAlert2 = true;
          setTimeout(() => {
            this.showAlert2 = false;
          }, 3000);
        }
      });
    },
    submit3() {
      this.$refs.form3.validate().then(valid => {
        if (valid) {
          // Perform file upload for supporter documents here
          this.showAlert3 = true;
          setTimeout(() => {
            this.showAlert3 = false;
          }, 3000);
        }
      });
    }
  }
};

</script>
