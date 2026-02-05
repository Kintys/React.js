import { useId } from 'react'

export function UserFormFields({ values, onChange, roles }) {
    const userName = useId()
    const emailId = useId()
    const passwordId = useId()
    const roleId = useId()
    console.log(values)

    return (
        <div style={{ display: 'grid', gap: 10 }}>
            <label htmlFor={userName} style={{ display: 'grid', gap: 4 }}>
                Ім'я
                <input
                    type="text"
                    name="name"
                    id={userName}
                    value={values.name}
                    onChange={onChange}
                    style={{ backgroundColor: 'grey', color: 'black', padding: '6px 8px', borderRadius: 6 }}
                />
            </label>
            <label htmlFor={emailId} style={{ display: 'grid', gap: 4 }}>
                Пошта
                <input
                    type="text"
                    name="email"
                    id={emailId}
                    value={values.email}
                    onChange={onChange}
                    style={{ backgroundColor: 'grey', color: 'black', padding: '6px 8px', borderRadius: 6 }}
                />
            </label>
            <label htmlFor={passwordId} style={{ display: 'grid', gap: 4 }}>
                Пароль
                <input
                    type="password"
                    name="password"
                    id={passwordId}
                    value={values.password}
                    onChange={onChange}
                    style={{ backgroundColor: 'grey', color: 'black', padding: '6px 8px', borderRadius: 6 }}
                />
            </label>
            <label htmlFor={roleId} style={{ display: 'grid', gap: 4 }}>
                Роль
                <select
                    name="role"
                    id={roleId}
                    value={values.role}
                    onChange={onChange}
                    style={{ backgroundColor: 'grey', color: 'black', padding: '6px 8px', borderRadius: 6 }}
                >
                    <option value="">Виберіть роль</option>
                    {Object.entries(roles).map(([key, value]) => (
                        <option key={value} value={value}>
                            {key}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}
