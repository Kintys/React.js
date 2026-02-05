import { useState } from 'react'
import { useGetCommentsByPostQuery } from '../../entities/post/comments/api/commentApi'
import { CommentItem } from '@/entities/post/comments'
import CommentDelete from '@/features/post/comments/ui/CommentDelete'
import { CommentForm } from '@/features/post/comments'
import { roles } from '@/shared/config/roles'

export function CommentList({ postId, user }) {
    const [deletingIds, setDeletingIds] = useState(new Set())

    const { data, isLoading, error } = useGetCommentsByPostQuery({
        postId
    })

    const handleDeleteStart = (id) => {
        setDeletingIds((prev) => new Set(prev).add(id))
    }

    const handleDeleteEnd = (id) => {
        setDeletingIds((prev) => {
            const next = new Set(prev)
            next.delete(id)
            return next
        })
    }

    const comments = data || []

    const canDeleteComment = (comment) => {
        return user && (user.role === roles.admin || user.role === roles.manager || comment.authorId === user.id)
    }

    const renderDeletingStatus = (isDeleting) => {
        return isDeleting && <span style={{ marginLeft: 8, color: '#888' }}>Видаляється...</span>
    }

    if (isLoading) return <div>Завантаження коментарів...</div>
    if (error) return <div>Помилка: {error.toString()}</div>

    return (
        <div style={{ marginTop: 10 }}>
            <h4>Коментарі</h4>
            {comments.map((c) => (
                <CommentItem key={c.id} comment={c} renderDeletingStatus={renderDeletingStatus(deletingIds.has(c.id))}>
                    {canDeleteComment(c) && (
                        <CommentDelete
                            commentId={c.id}
                            isDeleting={deletingIds.has(c.id)}
                            onDeleteStart={handleDeleteStart}
                            onDeleteEnd={handleDeleteEnd}
                        />
                    )}
                </CommentItem>
            ))}
            <CommentForm postId={postId} />
        </div>
    )
}
