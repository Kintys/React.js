import ErrorComp from '@components/ErrorComp'
import Spinner from '@components/Spinner/Spinner'
import ProductItem from './ProductItem'
import styles from './ProductsList.module.css'
import { pageLinks } from '@routes/router'
import { useNavigate } from 'react-router'
import AdminButton from '@components/Admin/AdminButton'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, fetchProducts } from '@/store/products/productsThunk'
import { selectFilteredOrSortProduct } from '@/store/products/productSelector'

function ProductsList({ admin = false }) {
    const goTo = useNavigate()
    const dispatch = useDispatch()

    const { loading, error } = useSelector((state) => state.products)
    const productList = useSelector(selectFilteredOrSortProduct)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const handleDelete = async (id) => {
        try {
            dispatch(deleteProduct(id))
            dispatch(fetchProducts())
        } catch (error) {
            console.error(error)
        }
    }

    const adminActions = admin
        ? (id) => {
              return <AdminButton id={id} onDelete={handleDelete} />
          }
        : false

    return (
        <>
            {admin && (
                <button onClick={() => goTo(pageLinks.addProduct)} className={styles.addProductButton}>
                    ➕ Додати продукт
                </button>
            )}
            <div className={styles.productsGrid}>
                {loading && <Spinner />}
                {!!error && <ErrorComp msg={error} />}

                {!loading &&
                    !error &&
                    Array.isArray(productList) &&
                    productList.map((prodElem) => (
                        <ProductItem key={prodElem.id} product={prodElem} admin={adminActions} />
                    ))}
            </div>
        </>
    )
}

export default ProductsList
