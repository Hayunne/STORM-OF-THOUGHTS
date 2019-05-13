
<template>
  
     <v-layout justify-center align-center fill-height class="login">
     
        <v-flex xs12 sm6 md4 lg4 >
           <v-card color="#F79F81" class="elevation-12 pa-5">
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
               
              <v-btn block @click="submit">Entrar</v-btn>
             
          </form>
        </v-card>
        </v-flex>
        
    </v-layout>

</template>
  <script> 
   </script>
      <style> 
      .login {
        height: 100%;
        background-image: url("https://c4.wallpaperflare.com/wallpaper/8/169/216/firewatch-digital-art-birds-forest-wallpaper-7960c8edb12add9b76a7786fa001a6dd.jpg");
      }
      
      
      
      </style>
