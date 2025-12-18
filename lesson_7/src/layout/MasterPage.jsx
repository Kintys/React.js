import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import styles from './MasterPage.module.css'

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
