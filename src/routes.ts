import { RouteConfig } from 'react-router-config'
import App from './client/App'
import Home from './client/pages/home'
import About from './client/pages/about'
import Error from './client/pages/error'

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        key: 'home',
        path: '/',
        exact: true,
        component: Home
      },
      {
        key: 'about',
        path: '/about',
        component: About
      },
      {
        key: 'error',
        component: Error
      }
    ]
  }
] as RouteConfig[]
