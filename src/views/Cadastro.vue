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
                label="E-mail"
              
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Senha"
            
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Confirmar Senha"
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
        background: 100%;
        background-image: url("https://www.wallpapermaiden.com/wallpaper/9881/download/1366x768/firewatch-forest-artwork.jpg");
      }
      

      </style>