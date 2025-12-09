import { useEffect, useState } from 'react'
import styles from './GamePlayerControl.module.css'

function GamePlayerControl({ title, onMove, playerId, isQueue, isValidate, onClearValidate }) {
    const [inputValue, setInputValue] = useState('')

    const isActive = !!isQueue

    const onEmitMove = () => {
        onMove(inputValue, playerId)
        setInputValue('')
    }

    const btnClass = `${styles.button} ${isActive ? styles.green : ''} ${isValidate ? styles.red : ''}`

    useEffect(() => {
        if (!isValidate) return
        const timer = setTimeout(() => {
            onClearValidate?.(playerId)
        }, 5000)
        return () => clearTimeout(timer)
    }, [isValidate, onClearValidate, playerId])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <label className={styles.label}>
                <span className={styles.labelText}>Введіть цифру</span>
                <input
                    className={styles.input}
                    type="text"
                    maxLength="1"
                    inputMode="numeric"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.replace(/\D/g, '').slice(0, 1))}
                />
            </label>
            <button className={btnClass} onClick={onEmitMove} disabled={!isActive || isValidate}>
                Зробити хід
            </button>
            {isValidate && <small>Цю цифру вже введено</small>}
        </div>
    )
}

export default GamePlayerControl
