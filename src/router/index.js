import {createRouter , createWebHistory} from 'vue-router';
import Ejemplo from '../views/ejemplo.vue';
import Cargos from '../views/cargos.vue';

const routes = [
    {
        path:'/Empleados',
        name: 'Empleados',
        component:Ejemplo
    },
    {
        path:'/Cargos',
        name: 'Cargos',
        component:Cargos
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;