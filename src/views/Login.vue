
<template>
  <div>
     <v-layout>
        <v-flex xs3>
           <v-card color="#F5A9D0" class="elevation-12 pa-5">
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
        </v-flex>
    </v-layout>
  </div>
</template>
