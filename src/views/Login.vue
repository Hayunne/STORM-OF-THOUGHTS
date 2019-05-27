<template>
  <v-layout justify-center align-center fill-height class="login">
    <v-flex xs12 sm6 md4 lg4 >
     <v-alert 
        v-model="alert"               
        dismissible
        :type="cor"
     >
     {{mensagem}}
     </v-alert>
     
      <v-card color="#F79F81" class="elevation-12 pa-5">
        <form>
          <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="senha"
              type="password"
              label="Senha"
              required
            ></v-text-field>
            <v-btn block @click="realizarLogin">Entrar</v-btn>
        </form>
      </v-card>
      </v-flex>
  </v-layout>

</template>
<script>
import LoginService from '../service/LoginService.js'
    export default{
        data(){
            return{
                alert:false,
                cor: "error",
                email: "",
                mensagem: "",
                senha: ""
            }
        },
        methods:{
            realizarLogin(){
                let retorno = Logi
                nService.logar(this.email, this.senha)
                if(retorno == true){
                    this.cor        = "success"
                    this.mensagem   = "Login realizado com sucesso!"
                    this.alert      = true
                }else{
                    this.cor        = "error"
                    this.mensagem   = "Erro ao realizar o login!"
                    this.alert      = true
                }
            }
        }
    } 

</script>
<style> 
  .login {
    height: 100%;
    background-image: url("https://c4.wallpaperflare.com/wallpaper/8/169/216/firewatch-digital-art-birds-forest-wallpaper-7960c8edb12add9b76a7786fa001a6dd.jpg");
  }
</style>
