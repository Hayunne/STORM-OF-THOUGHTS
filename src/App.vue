<template>
  <v-app>
   <v-toolbar class="grey darken-3" dark  temporary>
  		<v-toolbar-side-icon 
  			@click="mostra = true"
  			color="white--text"
  		></v-toolbar-side-icon>
      <v-list-tile-title class="ml-3">
  				STORM OF THOUGHTS
  				</v-list-tile-title>
  	
  	
        </v-toolbar>
        <v-navigation-drawer 
        class="grey darken-3"
        dark
        absolute
          v-model="mostra"
          temporary
        >
          <v-toolbar 
            class="grey darken-4"
          >
            <v-list>
              <v-list-tile-title class="ml-3">
            MAIS AUTORES
              </v-list-tile-title>
            </v-list>
          </v-toolbar>
          <v-divider></v-divider>
          <v-list dense class="pt-0">
            <v-list-tile to="/JohnGreen">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>John Green</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/ClariceLispector">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Clarice Lispector</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/CharlesBukowski">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Charles Bukowski</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/MachadodeAssis">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Machado de Assis</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
              <v-list-tile to="/ImmanuelKant">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Immanuel Kant</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
              <v-list-tile to="/FernandoPessoa">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Fernando Pessoa</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
              <v-list-tile to="/StrangerThings">
              <v-list-tile-action>
                  <v-icon>movie_filter</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Stranger Things</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/ElizabethKubler">
              <v-list-tile-action>
                  <v-icon>movie_filter</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Elizabeth Kubler</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            </v-list-tile>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-content>
          <router-view></router-view>
        </v-content>
     
        <v-layout row wrap>
          <v-flex xs12 sm8 md6 lg4 v-for="frase in frases" :key="frase.texto" pa-2>
          <v-card
            class="mx-auto"
            :color="frase.cor"
            dark
            height="390px"
          >
            <v-card-title>
              <v-icon large left>cloud</v-icon>
              <span class="title font-weight-light">STORM OF THOUGHTS</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold" style="height: 250px">
              "{{frase.texto}}"
            </v-card-text>
            <v-card-actions>
              <v-list-tile class="grow">
                <v-list-tile-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    :src="frase.imagem"
                  ></v-img>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Frases de {{frase.autor}}</v-list-tile-title>
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
        </v-flex>
      </v-layout>
       </v-app>
    </template>
    <script>
export default {
  data () {
    return {
       frases: [
          
        ],
      mostra: false 
    }
  }
}
</script>

    <v-content>
    </v-content>
  </v-app>
</template>