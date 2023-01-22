<template>
  <v-card class="mx-auto pa-md-4 mx-lg-auto" max-width="344" rounded>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ data }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ title }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="60" class="rounded-circle" color="primary">
        <v-icon large color="white"> {{icon}} </v-icon></v-list-item-avatar
      >
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "DataCards",
  props: ["data", "title", 'icon'],
};
</script>

<style>
</style>