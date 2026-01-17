import styles from './Header.module.css'
import { Link } from 'react-router'
import NavBar from '@layout/components/NavBar/NavBar'
import Container from '@layout/Container/Container'
import { pageLinks } from '@routes/router'

function Header() {
    return (
        <header className={styles.header}>
            <Container isPaddingTop={true}>
                <div className={styles.headerInner}>
                    <Link to={pageLinks.home} className={styles.logo}>
                        <img
                            src="https://p7.hiclipart.com/preview/713/232/925/computer-icons-source-code-coder.jpg"
                            alt="logo"
                        />
                    </Link>
                    <NavBar />
                </div>
            </Container>
        </header>
    )
}

export default Header
