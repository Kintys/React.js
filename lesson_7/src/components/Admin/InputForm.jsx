import { useId } from 'react'
import styles from './InputForm.module.css'

function Input({ name, value, handleChange, label, placeholder }) {
    const id = useId()

    const formatCamelCase = (str) => {
        if (!str) return ''

        const words = str.replace(/([A-Z])/g, ' $1').trim()

        return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
    }

    const getType = (key) => {
        if (key === 'price' || key === 'oldPrice') return 'number'
        if (key === 'imageUrl') return 'url'
        return 'text'
    }
    return (
        <div className={styles.inputGroup}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {formatCamelCase(name)}
                </label>
            )}
            <input
                type={getType(name)}
                name={name}
                id={id}
                value={value}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    )
}

export default Input
