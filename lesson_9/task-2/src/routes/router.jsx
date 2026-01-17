import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import NotFoundPage from '@/views/NotFoundPage'
import Home from '@/views/Home/Home'
import MasterPage from '@/layout/MasterPage'
import createPageLinks from './helper'

const About = lazy(() => import('@/views/About/About'))
const LazyNotFoundPage = lazy(() => import('@/views/NotFoundPage'))

export const routes = [
    {
        path: '/',
        element: <MasterPage />,
        errorElement: <NotFoundPage />,
        handle: { title: 'home', navName: 'Головна', isShow: true },
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />,
                handle: { title: 'about', navName: 'Про Нас', isShow: true }
            },
            {
                path: '*',
                element: <LazyNotFoundPage />,
                handle: { title: '404', isShow: false }
            }
        ]
    }
]

export const pageLinks = createPageLinks(routes, {})

const router = createBrowserRouter(routes)
export default router
