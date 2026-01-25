import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import Home from '@views/Home'
import MasterPage from '@layout/MasterPage'
import createPageLinks from '@routes/helper'

const LazyNotFoundPage = lazy(() => import('@/views/NotFoundPage'))

export const routes = [
    {
        path: '/',
        element: <MasterPage />,
        errorElement: <LazyNotFoundPage />,
        handle: { title: 'home', navName: 'Головна', isShow: false },
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]

const basePageLinks = createPageLinks(routes, {})

export const pageLinks = {
    ...basePageLinks
}

const router = createBrowserRouter(routes)
export default router
