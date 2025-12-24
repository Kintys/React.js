import { useId } from 'react'
import styles from './InputForm.module.css'

function Input({ name, value, type, handleChange, label, placeholder }) {
    const id = useId()

    const formatCamelCase = (str) => {
        if (!str) return ''

        const words = str.replace(/([A-Z])/g, ' $1').trim()

        return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
    }

    return (
        <div className={styles.inputGroup}>
            {label && <label htmlFor={id}>{formatCamelCase(name)}</label>}
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
