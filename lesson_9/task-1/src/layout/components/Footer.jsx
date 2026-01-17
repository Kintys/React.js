import styles from './Footer.module.css'

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <p className={styles.text}>© {new Date().getFullYear()} React Додаток. Всі права захищено ❤️</p>
                    <p className={styles.subtext}>Зроблено з любов'ю до React</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
