import { Outlet } from 'react-router'
import { Suspense } from 'react'
import Header from '@layout/components/Header/Header'
import Spinner from '@components/Spinner/Spinner'
import Footer from '@layout/components/Footer'

function MasterPage() {
    return (
        <>
            <div>
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
