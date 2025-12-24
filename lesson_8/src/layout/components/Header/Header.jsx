import styles from './Header.module.css'
import { Link } from 'react-router'
import pageLinks from '../../../router/pageLinks.js'
import Container from '../../Container/Container.jsx'
import navRoutes from '../../../router/NavRoutes.js'
import { useMemo } from 'react'
import NavBar from '../NavBar/NavBar.jsx'

function Header() {
    const memoNavRoutes = useMemo(() => navRoutes, [])

    return (
        <header className={styles.header}>
            <Container isPaddingTop={true}>
                <div className={styles.headerInner}>
                    <Link to={pageLinks.home} className={styles.logo}>
                        <img src="https://www.freeiconspng.com/uploads/teachers-icon-8.png" alt="logo" />
                    </Link>
                    <NavBar navSetting={memoNavRoutes} />
                </div>
            </Container>
        </header>
    )
}

export default Header
