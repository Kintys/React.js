import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import Home from '@views/Home'
import MasterPage from '@layout/MasterPage'
import createPageLinks from '@routes/helper'

const About = lazy(() => import('@views/About'))
const Posts = lazy(()=> import('@views/Posts'))
const LazyNotFoundPage = lazy(() => import('@views/NotFoundPage'))

export const routes = [
    {
        path: '/',
        element: <MasterPage />,
        errorElement: <LazyNotFoundPage />,
        handle: { title: 'home', navName: 'Головна', isShow: true },
        children: [
            {
                index: true,
                element: <Home />
            },
                {
                path: 'posts',
                element: <Posts />,
                handle: { title: 'posts', navName: 'Пости', isShow: true }
            },
            {
                path: 'about',
                element: <About />,
                handle: { title: 'about', navName: 'Про Нас', isShow: true }
            },
        ]
    }
]

export const pageLinks = createPageLinks(routes, {})




const router = createBrowserRouter(routes)
export default router
