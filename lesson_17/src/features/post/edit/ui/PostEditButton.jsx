function PostEditButton({ post }) {
    const onEdit = (post) => {
        console.log(post)
    }
    return <button onClick={() => onEdit(post)}>Редагувати</button>
}

export default PostEditButton
