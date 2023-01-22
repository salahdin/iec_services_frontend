<template>
    <v-container>
        <!--... Left side Navigation-->
        <v-navigation-drawer v-model="drawer" app color="primary">
            <v-sheet class="pa-4" color="primary">
                <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

                <div class="white--text text--lighten-1"> User Name</div>
            </v-sheet>

            <v-divider></v-divider>

            <v-list shaped>
                <v-list-item v-for="[icon, text] in links" :key="icon" link>
                    <v-list-item-icon>
                        <v-icon color="white">{{ icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="white--text text--lighten-1">{{ text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

        </v-navigation-drawer>
    </v-container>
</template>
  
<script>
export default {
    name : "LeftNav",
    data() {
        return {
            sideNav: false,
            selectedItem: 1,
            drawer:null,
            links: [
                ['mdi-view-dashboard-edit-outline', 'Dashboard'],
                ['mdi-account-school', 'Student'],
                ['mdi-school', 'Teacher'],
                ['mdi-calendar', 'Schedule'],
                ['mdi-chat', 'Chat'],
                ['mdi-newspaper', 'Latest'],
            ],
        };
    },
    computed: {
        navigation() {
            let navigations = [
                { icon: "mdi-login", title: "login", link: "/login" }
            ]
            if (this.userAuthenticated) {
                let newNavigations = [
                    { icon: "mdi-home", title: "home", link: "/" },
                    { icon: "mdi-account", title: "account", link: "/user/profile" },
                ];
                return newNavigations
            }
            return navigations;
        },
        userAuthenticated() {
            return null;
        }
    },
}
</script>