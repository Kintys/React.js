import { Outlet } from 'react-router'
import { Suspense } from 'react'
import styles from './MasterPage.module.css'
import Header from './components/Header/Header'
import Spinner from '@/components/Spinner/Spinner'
import Footer from './components/Footer'

function MasterPage() {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Outlet />
                    </Suspense>
                </main>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default MasterPage
