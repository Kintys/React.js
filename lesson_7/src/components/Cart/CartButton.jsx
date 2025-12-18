import { Link } from 'react-router'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useEffect, useState } from 'react'
import cartIcon from '../../assets/cart.svg'
import pageLinks from '../../router/pageLinks'
import styles from './CartButton.module.css'

function CartButton() {
    const [values] = useLocalStorage('cart')
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        setCartCount(Array.isArray(values) ? values.length : 0)
    }, [values])

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
