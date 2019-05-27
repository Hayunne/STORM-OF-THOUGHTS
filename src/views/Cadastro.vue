<template>

<v-layout justify-center align-center fill-height class="cadastro">
      <v-flex xs12 sm6 md4 lg4 >
      <v-card color="#F79F81" class="elevation-12 pa-5">
 
 
  
        <form>    
              <v-text-field
                v-model="nome"
                label="Nome Completo"
                required
                ></v-text-field>

                <v-text-field
                v-model="nome"
                label="Nome de usuário"
                required
                ></v-text-field>

                 <v-text-field
                v-model="email"
                label="Idade"
                 ></v-text-field>
               

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

              <v-text-field
                v-model="email"
                :error-messages="senhaErrors"
                label="Confirmar Senha"
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
      .cadastro {
        height: 100%;
        width: 100%;
        background-image: url("https://www.wallpapermaiden.com/wallpaper/9881/download/1366x768/firewatch-forest-artwork.jpg");
      }
      

      </style>