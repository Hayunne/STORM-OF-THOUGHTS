<template>
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
</template>
<script>
export default {
  data () {
    return {
      frases: [
        {
          texto: "Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Que queres que te diga, além de que te amo, se o que quero dizer-te é que te amo? -Fernando Pessoa",
          cor:"#F37C7C",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        },
        {
          texto: "Renda-se, como eu me rendi. Mergulhe no que você não conhece como eu mergulhei. Não se preocupe em entender, viver ultrapassa qualquer entendimento. -Clarice Lispector",
          cor:"#71CFDA",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
        {
          texto: "O ser humano é aquilo que a educação faz dele. -Immanuel Kant.",
          cor:"#F6CEF5",
          imagem: "http://2.bp.blogspot.com/-g_5CWX49jjE/UO2srW_rWaI/AAAAAAAAAGQ/4ykiAh8QNFM/s1600/Kant_Portrait.jpg",
          autor: "Immanuel Kant",
        },
        {
          texto: "Que tempos difíceis eram aqueles: ter a vontade e a necessidade de viver, mas não a habilidade. -Charles Bukowski",
          cor:"#5858FA",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
        {
          texto: "Esquecer é uma necessidade. A vida é uma lousa, em que o destino, para escrever um novo caso, precisa de apagar o caso escrito. -Machado de Assis",
          cor:"#0489B1",
          imagem: "https://www.sohistoria.com.br/biografias/machado/index_clip_image002.jpg",
          autor: "Machado de Assis",
        },
        {
          texto: "Nem todo mundo que chega na sua vida, vem com a intenção de ficar. Da mesma forma, que nem todos os que se foram, queriam partir. -A Culpa é das Estrelas",
          cor:"#2EFE64",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        {
          texto: "Que tempos difíceis eram aqueles: ter a vontade e a necessidade de viver, mas não a habilidade. -Charles Bukowski",
          cor:"#5858FA",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
        {
          texto: "Que tempos difíceis eram aqueles: ter a vontade e a necessidade de viver, mas não a habilidade. -Charles Bukowski",
          cor:"#5858FA",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        }
      ]
    }
  }
}
</script>
