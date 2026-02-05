export function PostCard({ post, children }) {
    return (
        <div style={{ border: '1px solid #ddd', marginBottom: 20, padding: 15 }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
                <small>Автор: {post.author?.name}</small>
            </div>
            {children(post)}
        </div>
    )
}
