import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Frases from './views/Frases.vue'
import Home from './views/Home.vue'
import Cadastro from './views/Cadastro.vue'
import atividade from './views/atividade.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    { path: '/frases',
      name: 'Frases',
      component: Frases
    },
    { path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/Cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    { path: '/atividade',
    name: 'atividade',
    component: atividade
  },
  ]
})
