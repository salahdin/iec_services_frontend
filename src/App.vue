<template>
  <v-app>
    <left-nav />
   
    <v-main>
      <RouterView class="pa-2 ma-2"></RouterView>
    </v-main>
  </v-app>
</template>

<script>
import RightNav from "@/components/Nav/RightNav";
import LeftNav from "@/components/Nav/LeftNav";
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
    
    LeftNav
  },
};
</script>