export function CommentItem({ comment, children, renderDeletingStatus }) {
    return (
        <div
            style={{
                borderBottom: '1px solid #ddd',
                padding: '5px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <span>
                <b>{comment.authorName}</b>: {comment.text}
                {renderDeletingStatus}
            </span>
            {children}
        </div>
    )
}
