<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>{{title}}</v-list-item-title>
        <v-list-item-subtitle>{{body}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{time}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "DataCards",
  props: ["time", "title", "body"],
};
</script>

<style>
</style>