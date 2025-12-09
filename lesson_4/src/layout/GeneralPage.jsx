import styles from './GeneralPage.module.css'

function GeneralPage({ children }) {
    return (
        <>
            <div className={styles.wrapper}>
                <main className={styles.main}>{children}</main>
            </div>
        </>
    )
}

export default GeneralPage
