import { useNavigate, useParams } from 'react-router'
import Container from '../../layout/Container'
import styles from './ProductDetail.module.css'
import useFetch from '../../hooks/useFetch'
import apiRoutes from '../../api/apiRoutes'
import Spinner from '../Spinner/Spinner'
import pageLinks from '../../router/pageLinks'
import useLocalStorage from '../../hooks/useLocalStorage'

function ProductDetail() {
    const { id } = useParams()
    const { data: product, loading, error } = useFetch(apiRoutes.getProductById(id))
    const [values, setValue] = useLocalStorage('cart')

    const goTo = useNavigate()

    const addToCart = () => {
        if (!id) return
        setValue([...values, id])
        goTo(pageLinks.productsList)
    }

    return (
        <Container>
            {loading && <Spinner />}
            {!!error && <ErrorComp msg={error} />}
            {loading && !error ? (
                <Spinner />
            ) : (
                product && (
                    <div className={styles.productDetail}>
                        <div className={styles.imageSection}>
                            <div className={styles.imageWrapper}>
                                <img src={product.imageUrl} alt={product.name} className={styles.image} />
                            </div>
                        </div>

                        <div className={styles.infoSection}>
                            <h1 className={styles.title}>{product.name}</h1>

                            <div className={styles.priceSection}>
                                <div className={styles.currentPrice}>{product.price} ₴</div>
                                {product.oldPrice && <div className={styles.oldPrice}>{product.oldPrice} ₴</div>}
                            </div>

                            <div className={styles.description}>
                                <h3>Опис товару</h3>
                                <p>{product.description}</p>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.buyButton} onClick={() => goTo(pageLinks.buyNow)}>
                                    Купити зараз
                                </button>
                                <button className={styles.cartButton} onClick={addToCart}>
                                    Додати в кошик
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </Container>
    )
}

export default ProductDetail
