import { useNavigate, useParams } from 'react-router'
import Container from '@layout/Container/Container'
import styles from './ProductDetail.module.css'
import { pageLinks } from '@routes/router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { clearProduct } from '@store/products/productsSlice'
import Spinner from '@components/Spinner/Spinner'
import { fetchProductById } from '@/store/products/productsThunk'

function ProductDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const goTo = useNavigate()

    const { product, loading, error } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProductById(id))

        return () => {
            dispatch(clearProduct())
        }
    }, [dispatch, id])

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
                                <button className={styles.cartButton}>Додати в кошик</button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </Container>
    )
}

export default ProductDetail
