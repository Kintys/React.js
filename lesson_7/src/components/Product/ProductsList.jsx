import apiRoutes from '../../api/apiRoutes'
import useFetch from '../../hooks/useFetch'
import ErrorComp from '../ErrorComp'
import Spinner from '../Spinner/Spinner'
import ProductItem from './ProductItem'
import styles from './ProductsList.module.css'
import pageLinks from '../../router/pageLinks'
import { useNavigate } from 'react-router'
import AdminButton from '../Admin/AdminButton'

function ProductsList({ admin = false }) {
    const { data: products, loading, error } = useFetch(apiRoutes.productsList)
    const goTo = useNavigate()

    const handleDelete = () => {
        window.location.reload()
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
                    Array.isArray(products) &&
                    products.map((prodElem) => (
                        <ProductItem key={prodElem.id} product={prodElem} admin={adminActions} />
                    ))}
            </div>
        </>
    )
}

export default ProductsList
