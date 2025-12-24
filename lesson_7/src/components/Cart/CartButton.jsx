import { Link } from 'react-router'
import useLocalStorage from '../../hooks/useLocalStorage'
import cartIcon from '../../assets/cart.svg'
import pageLinks from '../../router/pageLinks'
import styles from './CartButton.module.css'

function CartButton() {
    const [values] = useLocalStorage('cart', [])
    const cartCount = Array.isArray(values) ? values.length : 0

    return (
        <Link to={pageLinks.cart} className={styles.cartButton}>
            <div className={styles.iconWrapper}>
                <img src={cartIcon} alt="cart" className={styles.icon} />
                {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </div>
        </Link>
    )
}

export default CartButton
