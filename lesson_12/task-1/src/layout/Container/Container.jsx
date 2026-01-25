import styles from './Container.module.css'
function Container({ children, isPaddingTop }) {
    return (
        <>
            <div className={`${styles.container} ${!isPaddingTop ? styles.pt : ''}`}>{children}</div>
        </>
    )
}

export default Container
