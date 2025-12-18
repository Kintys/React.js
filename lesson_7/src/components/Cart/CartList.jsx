import { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import apiRoutes, { API_BASE_URL } from '../../api/apiRoutes'
import CartItem from './CartItem'
import styles from './CartList.module.css'
import Spinner from '../Spinner/Spinner'
import ErrorComp from '../ErrorComp'
import pageLinks from '../../router/pageLinks'
import { useNavigate } from 'react-router'
import CartEmpty from './CartEmpty'

function CartList() {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [values, setValues] = useLocalStorage('cart')

    const goTo = useNavigate()

    const getProductsById = async (id) => {
        const url = `${API_BASE_URL}${apiRoutes.getProductById(id)}`
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'content-type': 'application/json' }
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            return data
        } catch (error) {
            setError(error.message)
            return null
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            if (!values || values.length === 0) {
                setLoading(false)
                return
            }

            setLoading(true)
            const promises = values.map((item) => getProductsById(item))
            const products = await Promise.all(promises)
            setProductList(products.filter((p) => p !== null))
            setLoading(false)
        }

        fetchProducts()
    }, [])

    const handleRemove = (index) => {
        const updatedCart = [...values]
        updatedCart.splice(index, 1)
        setValues(updatedCart)

        const updatedProducts = [...productList]
        updatedProducts.splice(index, 1)
        setProductList(updatedProducts)
    }

    return (
        <>
            {loading && <Spinner />}
            {!!error && <ErrorComp msg={error} />}
            {(!productList || productList.length === 0) && !loading ? (
                <CartEmpty />
            ) : (
                <div className={styles.cartList}>
                    <div className={styles.header}>
                        <h1>Кошик</h1>
                        <span className={styles.count}>{productList.length} товарів</span>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.items}>
                            {productList.map((product, index) => (
                                <CartItem key={index} product={product} index={index} onRemove={handleRemove} />
                            ))}
                        </div>

                        <button onClick={() => goTo(pageLinks.buyNow)} className={styles.checkoutButton}>
                            Оформити замовлення
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default CartList
