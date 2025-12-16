import { memo } from 'react'
import styles from './GridRow.module.css'

function GridRow({ product }) {
    return (
        <div className={styles.row}>
            <div className={styles.imageWrapper}>
                <img src={product.imageUrl} alt={product.name} className={styles.image} />
            </div>
            <span className={styles.name}>{product.name}</span>
            <span className={styles.price}>${product.price}</span>
        </div>
    )
}

export default memo(GridRow)
