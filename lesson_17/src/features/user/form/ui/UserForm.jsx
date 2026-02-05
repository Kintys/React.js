import { roles } from '@/shared/config/roles'
import { UserFormFields } from '@/entities/user/ui/UserFormFields'
import useForm from '@/shared/hooks/useForm'
import { useCreateUserMutation } from '@/entities/user/api/userApi'

export function UserForm() {
    const { values, handleChange, resetForm } = useForm({
        name: '',
        email: '',
        password: '',
        role: ''
    })

    const [createUser, { isLoading }] = useCreateUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createUser({ ...values })
            resetForm()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
            <UserFormFields values={values} onChange={handleChange} roles={roles} />
            <div>
                <button
                    type="submit"
                    style={{ padding: '6px 12px', borderRadius: 6, backgroundColor: '#2d6cdf', color: '#fff' }}
                    disabled={isLoading}
                >
                    Додати користувача
                </button>
            </div>
        </form>
    )
}
