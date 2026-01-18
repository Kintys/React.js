import { useDispatch, useSelector } from 'react-redux'
import PostItem from './PostItem'
import { useEffect } from 'react'
import Spinner from '../Spinner/Spinner'
import ErrorComp from '../ErrorComp'
import { fetchPosts } from '@/store/posts/postsThunk'
import styles from './PostsList.module.css'

function PostsList() {
    const { postsList, loading, error } = useSelector((state) => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const isPosts = !loading && !error && Array.isArray(postsList)

    return (
        <>
            {loading && (
                <div className={styles.loading}>
                    <Spinner />
                </div>
            )}
            {!!error && (
                <div className={styles.error}>
                    <ErrorComp msg={error} />
                </div>
            )}

            {isPosts && (
                <ul className={styles.postsList}>
                    {postsList.map((post) => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </ul>
            )}
        </>
    )
}

export default PostsList
