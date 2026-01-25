import { useDispatch } from 'react-redux'
import styles from './PostCard.module.css'
import { deletePost } from '@/store/slices/postsThunk'
import { useNavigate } from 'react-router'

import { addPostId } from '@/store/slices/postsSlice'

function PostCard({ post }) {
    const dispatch = useDispatch()
    const onDeletePost = () => {
        if (!post.id) return
        dispatch(deletePost(post.id))
    }
    const goTo = useNavigate()

    const onUpdate = (id) => {
        if (id) dispatch(addPostId(id))
        goTo(`/form/${id}`)
    }
    return (
        <div className={styles.postCard}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <div className={styles.postBody}>{post.body}</div>
            <div className={styles.cardFooter}>
                <div className={styles.actions}>
                    <div className={styles.likeBtn}>👍 {post.likesNumber}</div>
                    <div className={styles.dislikeBtn}>👎 {post.dislikesNumber}</div>
                </div>
                <div className={styles.author}>{post.authorId}</div>
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.deleteBtn} onClick={onDeletePost}>
                    Видалити
                </button>
                <button className={styles.editBtn} onClick={() => onUpdate(post.id)}>
                    Редагувати
                </button>
            </div>
        </div>
    )
}

export default PostCard
