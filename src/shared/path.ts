import { Route } from 'src/interface/app'

// contanst url
const PATH_URL = {
  home: '/'
} as const

// private routes (path, component)
export const PRIVATE_ROUTE: Route[] = [
  {
    path: '',
    element: () => import('src/pages/Home')
  }
]

export default PATH_URL
