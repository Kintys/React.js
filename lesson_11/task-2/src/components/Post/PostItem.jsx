import { memo } from 'react'
import styles from './PostItem.module.css'

function PostItem({ post }) {
    const { title, body } = post

    return (
        <li className={styles.postItem}>
            <h3>{title}</h3>
            <p>{body}</p>
        </li>
    )
}

export default memo(PostItem)
