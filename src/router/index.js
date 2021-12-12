import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../assets/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/mercury',
  //   name: 'Mercury',
  //   props: true,
  //   // route level code-splitting
  //   // this generates a separate chunk (mercury.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "mercury" */ '../views/Mercury.vue'),
  //   redirect: {
  //     name: 'PlanetsDetails',
  //     params: {
  //       planetsDetails: 1
  //     }
  //   },
  //   children: [
  //     {
  //       path: ':planetsSlug',
  //       name: "planetsDetails",
  //       props: true,
  //       component: () => import(/* webpackChunkName: "mercury" */ '../views/PlanetsDetails.vue')
  //     }
  //   ],
  //   beforeEnter: (to, from, next) => {
  //     let exist = store.mercury.find(mercury => mercury.id === to.params.planetsDetails
  //     )
  //     if (exist) {
  //       next()
  //     } else {
  //       next({name: 'NotFound'})
  //     }
  //   }
  // },
  {
    path: '/mercury',
    name: 'Mercury',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (destination.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "destination" */ '../views/Destination.vue'),
    redirect: {
      name: 'DestinationDetails',
      params: {
        destinationDetails: 1
      },
    },
    children: [
      {
        path: ':destinationDetails',
        name: 'DestinationDetails',
        props: true,
        component: () => import(/* webpackChunkName: "destinationDetails" */ '../views/DestinationsDetails.vue'),
      }
    ],
    beforeEnter: (to, from, next) => {
  let exist = store.destinations.find(destination => destination.id === to.params.destinationDetails
  )
  if (exist) {
    next()
  } else {
    next({name: 'NotFound'})
  }
}
  },
  
  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
