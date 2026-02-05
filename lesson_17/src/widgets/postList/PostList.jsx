import { useState } from 'react'

import { useGetPostsQuery } from '@/entities/post/api/postApi'
import { PostCard } from '@/entities/post/ui/PostCard'

import { roles } from '@/shared/config/roles'
import { CommentList } from '../commentList/CommentList'
import PostEditButton from '@/features/post/edit/ui/PostEditButton'
import PostDeleteButton from '@/features/post/delete/ui/PostDeleteButton'
import ToggleSection from '@/shared/ui/ToggleSection'

export function PostList({ user }) {
    const [page, setPage] = useState(1)
    const limit = 10
    const { data, isLoading, error } = useGetPostsQuery({ page, limit })

    const posts = data?.items || []

    const totalPages = data?.totalPages || 1

    const onDeleteDone = async (isDelete) => {
        if (!isDelete) return
        if (posts.length === 1) setPage((p) => Math.max(p - 1, 1))
    }

    const canManagePost = (postItem) => {
        return user?.role === roles.admin || (user?.role === roles.manager && postItem.authorId === user.id)
    }

    if (isLoading) return <div>Завантаження оголошень...</div>
    if (error) return <div>Помилка: {error.toString()}</div>

    return (
        <div>
            {posts.map((post) => (
                <PostCard key={post.id} post={post}>
                    {(postItem) => (
                        <>
                            {canManagePost(postItem) && (
                                <div style={{ marginTop: 10 }}>
                                    <PostEditButton post={postItem} />
                                    <PostDeleteButton postId={postItem.id} onDeleteDone={onDeleteDone} />
                                </div>
                            )}
                            <ToggleSection btnText={(isShow) => (isShow ? 'Сховати коментарі' : 'Показати коментарі')}>
                                <CommentList postId={postItem.id} user={user} />
                            </ToggleSection>
                        </>
                    )}
                </PostCard>
            ))}

            <div style={{ marginTop: 10 }}>
                <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
                    Назад
                </button>
                <span style={{ margin: '0 10px' }}>
                    Сторінка {page} з {totalPages}
                </span>
                <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
                    Вперед
                </button>
            </div>
        </div>
    )
}
