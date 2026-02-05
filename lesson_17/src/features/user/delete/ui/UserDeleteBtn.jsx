import { useDeleteUserMutation } from '@/entities/user/api/userApi'

function UserDeleteBtn({ id }) {
    const [deleteUser, { isLoading }] = useDeleteUserMutation()
    const handlerDeleteUser = () => {
        if (!id) return
        deleteUser(id)
    }
    return (
        <>
            <button onClick={() => handlerDeleteUser()} disabled={isLoading}>
                Видалити
            </button>
        </>
    )
}

export default UserDeleteBtn
