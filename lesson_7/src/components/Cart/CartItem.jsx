import styles from './CartItem.module.css'

function CartItem({ product, index, onRemove }) {
    const handleRemove = () => {
        onRemove(index)
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.imageWrapper}>
                <img src={product.imageUrl} alt={product.name} className={styles.image} />
            </div>

            <div className={styles.info}>
                <h3 className={styles.name}>{product.name}</h3>
                {product.description && <p className={styles.description}>{product.description.substring(0, 80)}...</p>}
            </div>

            <div className={styles.priceSection}>
                <div className={styles.price}>{product.price} ₴</div>
                {product.oldPrice && <div className={styles.oldPrice}>{product.oldPrice} ₴</div>}
            </div>

            <button className={styles.removeBtn} onClick={handleRemove}>
                🗑️
            </button>
        </div>
    )
}

export default CartItem
