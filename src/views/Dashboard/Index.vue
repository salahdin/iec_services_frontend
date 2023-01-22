<template>
    <v-container>
        <v-row class="ma-3">
            <h1>Dashboard</h1>
        </v-row>

        <v-row style="height:200px" class="ma-3">
            <v-col v-for="n in data_obj" :key="n.title">
                <data-cards :data="n.data" :title="n.title" :icon="n.icon"/>
            </v-col>
        </v-row>
        
        <v-row class="ma-3">
            <h2>Calendar</h2>
        </v-row>
        <v-row style="height:100%" class="ma-3">
            <v-col>
                <calendar/>
            </v-col>
        </v-row>
      
    </v-container>
  </template>
  
  <script>
   import DataCards from "./components/DataCards";
   import Chart from "./components/Charts";
   import Calendar from "./components/Calendar";

  
    export default {
      name: 'Dashboard',
      data() {
        return {
          data_obj: [
            {
              title: "Total Users",
              data: 100,
              icon: "mdi-account-multiple",
            },
            {
              title: "Total Posts",
              data: 100,
              icon: "mdi-account-multiple",
            },
            {
              title: "Total Comments",
              data: 100,
              icon: "mdi-account-multiple",
            },
          ],
          
        };
      },
      components: {
        DataCards,
        Chart,
        Calendar,
      },
    }
  </script>
  