import styles from './MessageComp.module.css'

function MessageComp({ id, msg, like, dislike, onLikeUp, onLikeDown }) {
    return (
        <>
            <div className={styles.message}>
                <p className={styles.text}>{msg}</p>
                <div className={styles.meta}>
                    <div className={styles.controls}>
                        <span className={styles.like}>{like}</span>
                        <button className={styles.btn} onClick={() => onLikeUp(id, 'likeUp')}>
                            like
                        </button>
                        <span className={styles.like}>{dislike}</span>
                        <button className={styles.btn} onClick={() => onLikeDown(id, 'likeDown')}>
                            dislike
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageComp
