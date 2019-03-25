<template>
  <v-card
    class="mx-auto"
    color="#F6CEF5"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-STORM OF THOUGHTS
      </v-icon>
      <span class="title font-weight-light">STORM OF THOUGHTS</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "O ser humano é aquilo que a educação faz dele. -Immanuel Kant."
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="http://2.bp.blogspot.com/-g_5CWX49jjE/UO2srW_rWaI/AAAAAAAAAGQ/4ykiAh8QNFM/s1600/Kant_Portrait.jpg"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Frases de Immanuel Kant</v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end
        >
           <v-btn fab dark small color="pink">
             <v-icon dark>favorite</v-icon>
         </v-btn>
     
     
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>