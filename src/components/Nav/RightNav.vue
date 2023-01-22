<template>
  <v-container>
    <v-navigation-drawer app right class="pa-10">
      <v-row>
        <v-col class="ma-2">
          <v-badge
            :content="notification_num"
            :value="notification_num"
            color="primary"
            overlap
          >
            <v-icon @click.stop="drawer = !drawer" dense color="gray darken-2">
              mdi-bell-outline
            </v-icon>
          </v-badge>
        </v-col>
        <v-col>
          <v-btn>Logout</v-btn>
        </v-col>
      </v-row>
      <v-expand-x-transition>
        <notification v-show="drawer" />
      </v-expand-x-transition>
      <v-spacer></v-spacer>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
  
<script>
import Notification from "@/components/Notification";

export default {
  name: "RightNav",
  data() {
    return {
      drawer: false,
      notification_num: 1,
    };
  },
  components: {
    Notification,
  },
};
</script>