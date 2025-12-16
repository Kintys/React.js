import { useId } from 'react'
import useInput from '../hooks/useInput'
import styles from './FilterPanel.module.css'

function FilterPanel({ onSelect, onEmit, selectOptions, selectLabel }) {
    const inputId = useId()
    const filterInput = useInput()

    const handlerChange = (e) => {
        filterInput.inputProps?.onChange(e)
        onEmit(e.target.value)
    }
    const onClear = () => {
        filterInput.clear()
        onEmit('')
    }

    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={inputId}>
                    Пошук по назві
                </label>
                <div className={styles.controls}>
                    <input
                        id={inputId}
                        type="text"
                        className={styles.input}
                        value={filterInput.inputProps.value}
                        onChange={handlerChange}
                    />
                    <button className={styles.button} onClick={onClear}>
                        Очистити
                    </button>
                </div>
            </div>

            <div className={styles.group}>
                <label className={styles.label} htmlFor="sort">
                    {selectLabel || 'Сортування'}
                </label>
                <select className={styles.select} onChange={(e) => onSelect(e.target.value)}>
                    {Array.isArray(selectOptions) &&
                        selectOptions.map((opt, index) => {
                            return (
                                <option key={index} value={index}>
                                    {opt.name}
                                </option>
                            )
                        })}
                </select>
            </div>
        </div>
    )
}

export default FilterPanel
