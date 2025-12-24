import { Outlet } from 'react-router'

import styles from './MasterPage.module.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'

function MasterPage() {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default MasterPage
