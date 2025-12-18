import { Route, Routes } from 'react-router'
import Home from '../views/Home'
import About from '../views/About'
import NotFoundPage from '../views/NotFoundPage'
import MasterPage from '../layout/MasterPage'
import Shop from '../views/Shop'
import ProductDetail from '../components/Product/ProductDetail'
import Buy from '../views/Buy'
import Cart from '../views/Cart'
import ProductForm from '../components/Admin/ProductForm'
import Admin from '../views/Admin'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MasterPage />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Shop />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="product/add" element={<ProductForm />} />
                <Route path="admin" element={<Admin />} />
                <Route path="product/:id/edit" element={<ProductForm />} />
                <Route path="about" element={<About />} />
                <Route path="buy" element={<Buy />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}
export default AppRoutes
