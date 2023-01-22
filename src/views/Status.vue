<template>
  <v-container>
    <v-form>
      <v-text-field v-model="nationalId" label="National ID"></v-text-field>
      <v-text-field v-model="phoneNumber" label="Phone Number"></v-text-field>
      <v-btn @click="getVotingInfo()">Submit</v-btn>
    </v-form>
    <v-card v-if="votingInfo" class="mt-3">
      <v-card-title>Voting Information</v-card-title>
      <v-card-subtitle>Status: {{ votingInfo.status }}</v-card-subtitle>
      <v-card-subtitle>Location: {{ votingInfo.location }}</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      nationalId: '',
      phoneNumber: '',
      votingInfo: null
    }
  },
  methods: {
    async getVotingInfo() {
      try {
        const res = await axios.get(`https://voting-api.com/info/${this.nationalId}/${this.phoneNumber}`)
        this.votingInfo = res.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>
