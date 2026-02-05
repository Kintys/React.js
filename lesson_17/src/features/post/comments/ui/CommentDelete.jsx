import { useDeleteCommentMutation } from '@/entities/post/comments'

function CommentDelete({ commentId, isDeleting, onDeleteStart, onDeleteEnd }) {
    const [deleteComment] = useDeleteCommentMutation()

    const handleDelete = async () => {
        onDeleteStart(commentId)
        try {
            await deleteComment(commentId).unwrap()
        } catch (e) {
            console.log(e)
            onDeleteEnd(commentId)
        }
    }
    return (
        <button onClick={handleDelete} disabled={isDeleting} style={{ marginLeft: 10 }}>
            Видалити
        </button>
    )
}

export default CommentDelete
