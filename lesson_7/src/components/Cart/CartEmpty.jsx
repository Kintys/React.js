import { useNavigate } from 'react-router'
import pageLinks from '../../router/pageLinks'
import styles from './CartList.module.css'

function CartEmpty() {
    const goTo = useNavigate()
    return (
        <div className={styles.emptyCart}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2>Ваш кошик порожній</h2>
            <p>Додайте товари для покупки</p>
            <button onClick={() => goTo(pageLinks.shop)} className={styles.shopButton}>
                Перейти до магазину
            </button>
        </div>
    )
}

export default CartEmpty
