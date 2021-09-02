const store = new Vuex.Store({
    state: {
      titulo: ''
    },
    mutations: {

    }
})


const Inicio = { template: '<web-inicio></web-inicio>' }
const Inicio_classroom = { template: '<inicio-classroom></inicio-classroom>' }
const Inicio_listas = { template: '<inicio-listas></inicio-listas>' }
const Inicio_horarios = { template: '<inicio-horarios></inicio-horarios>' }
const Inicio_calificaciones = { template: '<inicio-calificaciones></inicio-calificaciones>' }
const Inicio_registro = { template: '<inicio-registro></inicio-registro>' }

const routes = [
  { path: '/', component: Inicio },
  { path: '/inicio-classroom', component: Inicio_classroom },
  { path: '/inicio-listas', component: Inicio_listas },
  { path: '/inicio-horarios', component: Inicio_horarios },
  { path: '/inicio-calificaciones', component: Inicio_calificaciones },
  { path: '/inicio-registro', component: Inicio_registro }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
  
const app = Vue.createApp({
    data() {
        return {
            
        }
    }
})