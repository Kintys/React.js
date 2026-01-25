import { useNavigate } from 'react-router'
import PostCard from './PostCard'
import styles from './PostsList.module.css'

function PostsList({ posts }) {
    const goTo = useNavigate()

    return (
        <div className={styles.container}>
            {posts.length === 0 ? (
                <div className={styles.emptyMessage}>Список порожній</div>
            ) : (
                <>
                    <button className={styles.addButton} onClick={() => goTo('/form')}>
                        Додати новий пост
                    </button>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </>
            )}
        </div>
    )
}

export default PostsList
