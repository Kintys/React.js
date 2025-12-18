import NavBar from '../NavBar/NavBar'
import styles from './Header.module.css'
import { Link } from 'react-router'
import pageLinks from '../../router/pageLinks'
import CartButton from '../Cart/CartButton'

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerInner}>
                    <Link to={pageLinks.home} className={styles.logo}>
                        <img
                            src="https://endlessicons.com/wp-content/uploads/2013/11/html-tag-icon-614x460.png"
                            alt="logo"
                        />
                    </Link>
                    <NavBar />

                    <div>
                        <CartButton />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
