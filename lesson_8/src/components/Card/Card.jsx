import { memo } from 'react'
import styles from './Card.module.css'

function Card({ header, body, footer }) {
    return (
        <div className={styles.card}>
            <header className={styles.header}>{header}</header>
            <div className={styles.content}>{body}</div>
            <footer className={styles.footer}>{footer}</footer>
        </div>
    )
}

export default memo(Card)
