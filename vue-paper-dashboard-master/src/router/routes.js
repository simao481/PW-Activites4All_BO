import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Estatisticas from "@/pages/Estatisticas.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Atividades from "@/pages/Atividades.vue";
import Sede from "@/pages/Sede.vue";
import Profissionais from "@/pages/Profissionais.vue";
import Reservas from "@/pages/Reservas.vue";
import Detalhes from "@/pages/Detalhes.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Estatisticas",
        component: Estatisticas,
      },
      {
        path: "stats",
        name: "Perfil",
        component: UserProfile,
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
      },
      {
        path: "icons",
        name: "Atividades",
        component: Atividades,
      },
      {
        path: "maps",
        name: "Sede",
        component: Sede,
      },
      {
        path: "typography",
        name: "Profissionais",
        component: Profissionais,
      },
      {
        path: "table-list",
        name: "Reservas",
        component: Reservas,
      },
      {
        path: "detalhes/:id",
        name: "detalhes",
        component: Detalhes,
      },   
    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
