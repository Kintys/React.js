import { Link } from 'react-router'
import styles from './ProductItem.module.css'
import pageLinks from '../../router/pageLinks'

function ProductItem({ product, admin }) {
    return (
        <div className={styles.productWrapper}>
            <Link to={pageLinks.getProductDetail(product.id)} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                    <img src={product.imageUrl} alt={product.name} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{product.name}</h3>
                    <div className={styles.footer}>
                        <span className={styles.price}>{product.price} ₴</span>
                    </div>
                </div>
            </Link>
            {admin && <div className={styles.adminActions}>{admin(product.id)}</div>}
        </div>
    )
}

export default ProductItem
