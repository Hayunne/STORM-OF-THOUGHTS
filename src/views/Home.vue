<template>
  <div class="fill-height">
    <v-parallax
      dark
      height="1000"
      src="https://2.bp.blogspot.com/-d257YWdM0P0/WsRAXn9Uu1I/AAAAAAAAC0s/3UAFsdnU7nUfO7sT2eWRWDJZuu77_s1iwCLcBGAs/s1600/Baixar%2Bfoto%2Bpapel%2Bde%2Bparede%2Bgalaxia%2Bvia%2Bl%25C3%25A1ctea%2Bestrada%2BDownload%2BWallpaper%2BMilky%2BWay%2BRoad.jpg"
      
    >
      <v-layout
        align-center
        column
        justify-center
        fill-height
      >
      <h1 class="display-2 font-weight-thin mb-3">STORM OF THOUGHTS</h1>
      <v-card color="#CBB1F5" class="elevation-12 pa-5">
        <form>
        
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="senhaErrors"
              label="Senha"
              required
              @input="$v.senha.$touch()"
              @blur="$v.senha.$touch()"
            ></v-text-field>
            <v-layout align-center justify-center>
            <v-btn @click="submit">Entrar</v-btn>
            </v-layout>
        </form>
      </v-card>
        

        
      </v-layout>
    </v-parallax>
   
    
  
  </div>
</template>
