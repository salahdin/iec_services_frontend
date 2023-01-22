<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="500">
              <v-card-title class="headline">Welcome to Voter Registration App</v-card-title>
              <v-card-text>
                With this app, you can register to vote and update your voter information quickly and easily.
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="status">View Voting Status</v-btn>
                <v-btn color="secondary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {
    status() {
      // navigate to registration page
      this.$router.push("/status");
    },
    login() {
      // navigate to update voter information page
      this.$router.push("/login");
    }
  }
};
</script>
