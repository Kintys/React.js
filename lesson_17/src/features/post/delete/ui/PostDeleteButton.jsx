import { useDeletePostMutation } from '@/entities/post/api/postApi'

function PostDeleteButton({ postId, onDeleteDone }) {
    const [deletePost] = useDeletePostMutation()

    const onDelete = async (id) => {
        await deletePost(id)
        if (onDeleteDone) onDeleteDone(true)
    }

    return <button onClick={() => onDelete(postId)}>Видалити</button>
}

export default PostDeleteButton
