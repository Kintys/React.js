import { useState } from 'react'
import styles from './InputChat.module.css'

function InputChat({ onAddMsg }) {
    const [inputValue, setInputValue] = useState('')

    const onEmitMsg = () => {
        if (!inputValue) return
        onAddMsg(inputValue)
        setInputValue('')
    }
    return (
        <>
            <div className={styles.form}>
                <label className={styles.label}>
                    <input
                        className={styles.input}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') onEmitMsg()
                        }}
                        placeholder="Type a message..."
                    />
                </label>
                <div>
                    <button className={styles.sendBtn} onClick={onEmitMsg}>
                        New Msg
                    </button>
                </div>
            </div>
        </>
    )
}

export default InputChat
