import { selectAuthUser } from '@/features/auth'
import { UserList } from '@/widgets/userList/UserList'
import { useSelector } from 'react-redux'

export default function UsersPage() {
    const user = useSelector(selectAuthUser)
    return (
        <div>
            <h1>Користувачі</h1>
            <UserList user={user} />
        </div>
    )
}
