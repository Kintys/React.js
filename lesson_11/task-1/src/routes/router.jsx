import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import Home from '@views/Home'
import MasterPage from '@layout/MasterPage'
import createPageLinks from '@routes/helper'

const About = lazy(() => import('@views/About'))
const Shop = lazy(() => import('@views/Shop'))
const Admin = lazy(() => import('@views/Admin'))
const ProductDetail = lazy(() => import('@components/Product/ProductDetail'))
const ProductForm = lazy(() => import('@components/Admin/ProductForm'))
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
                path: 'products',
                element: <Shop />,
                handle: { title: 'products', navName: 'Продукти', isShow: true }
            },
            {
                path: 'product/:id',
                element: <ProductDetail />,
                handle: { title: 'product', isShow: false }
            },
            {
                path: 'product/add',
                element: <ProductForm />,
                handle: { title: 'productAdd', isShow: false }
            },
            {
                path: 'product/:id/edit',
                element: <ProductForm />,
                handle: { title: 'productEdit', isShow: false }
            },
            {
                path: 'admin',
                element: <Admin />,
                handle: { title: 'admin', navName: 'Адмін', isShow: true }
            },
            {
                path: 'about',
                element: <About />,
                handle: { title: 'about', navName: 'Про Нас', isShow: true }
            }
        ]
    }
]

const basePageLinks = createPageLinks(routes, {})

export const pageLinks = {
    ...basePageLinks,
    getProductDetail: (id) => `/product/${id}`,
    getProductEdit: (id) => `/product/${id}/edit`,
    addProduct: '/product/add'
}

const router = createBrowserRouter(routes)
export default router
