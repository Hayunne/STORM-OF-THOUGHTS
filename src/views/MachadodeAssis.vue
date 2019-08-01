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
  			</v-list-tile>
  		</v-list>
  	</v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
 
    <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="frase in frases" :key="frase.texto" pa-2>
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
           {
          texto: "A vida sem luta é um mar morto no centro do organismo universal. -Machado de Assis",
          cor:"#A9F5BC",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        }, 
        {
          texto: "Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar. -Machado de Assis",
          cor:"#81F79F",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "Há pessoas que choram por saber que as rosas têm espinho. Há outras que sorriem por saber que os espinhos têm rosas! -Machado de Assis",
          cor:"#58FA82",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "Convêm que os homens digam o que não sabem e, por ofício, o inverso do que sabem. Assim se forma esta outra incurável: a esperança. -Machado de Assis",
          cor:"#2EFE64",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "Deus, para a felicidade do homem, inventou a fé e o amor. O Diabo, invejoso, fez o homem confundir fé com religião e amor com casamento. -Machado de Assis",
          cor:"#00FF40",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "É melhor, muito melhor, contentar-se com a realidade; se ela não é tão brilhante como os sonhos, tem pelo menos a vantagem de existir. -Machado de Assis",
          cor:"#01DF3A",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "Esta é a grande vantagem da morte, que, se não deixa boca para rir, também não deixa olhos para chorar...                              -[Trecho do livro Memórias Póstumas de Brás Cubas] -Machado de Assis",
          cor:"#04B431",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "Mas a saudade é isto mesmo; é o passar e repassar das memórias antigas -[Trecho do livro Dom Casmurro] -Machado de Assis",
          cor:"#088A29",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "Se só me faltassem os outros, vá; um homem consola-se mais ou menos das pessoas que perde; mas falto eu mesmo, e esta lacuna é tudo. -[Trecho do livro Dom Casmurro] -Machado de Assis" ,
          cor:"#0B6121",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "A minha memória ouve ainda agora as pancadas do coração naquele instante. Não esqueças que era a emoção do primeiro amor. -[Trecho do livro Dom Casmurro] -Machado de Assis",
          cor:"#0B3B0B",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "Esta é a grande vantagem da morte, que, se não deixa boca para rir, também não deixa olhos para chorar... -[Trecho do livro Memórias Póstumas de Brás Cubas] -Machado de Assis",
          cor:"#0A2A0A",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         {
          texto: "Escrever a própria essência, é contá-la toda, o bem e o mal. Tal faço eu, à medida que me vai lembrando e convindo à construção ou reconstrução de mim mesmo. -Machado de Assis",
          cor:"#071907",
          imagem: "https://static.todamateria.com.br/upload/ma/ch/machadodeassis-cke.jpg",
          autor: "Machado de Assis",
        },
         
        
        
      ],
      mostra: false 
    }
  }
}
</script>