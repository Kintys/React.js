import { useId, useMemo } from 'react'
import useInput from '../hooks/useInput'
import ResultDisplay from './ResultDisplay'
import useCounter from '../hooks/useCounter'
import styles from './CalculatorComp.module.css'

function CalculatorComp() {
    const inpId_1 = useId()
    const inpId_2 = useId()
    const firstInput = useInput()
    const secondInput = useInput()

    const number = useCounter()

    const result = useMemo(() => {
        const firstNumb = Number(firstInput.inputProps.value)
        const secondNumb = Number(secondInput.inputProps.value)
        return firstNumb + secondNumb
    }, [firstInput.inputProps.value, secondInput.inputProps.value])

    const onClearInput = () => {
        firstInput.clear()
        secondInput.clear()
    }

    console.log('Render ----------> CalculatorComp')
    return (
        <div className={styles.wrapper}>
            <div className={styles.panel}>
                <label className={styles.label} htmlFor={inpId_1}>
                    First Input
                </label>
                <input className={styles.input} type="number" id={inpId_1} {...firstInput.inputProps} />

                <label className={styles.label} htmlFor={inpId_2}>
                    Second Input
                </label>
                <input className={styles.input} type="number" id={inpId_2} {...secondInput.inputProps} />

                <button className={styles.button} onClick={onClearInput}>
                    Clear Input
                </button>
            </div>
            <div className={styles.counter}>
                <p className={styles.counterValue}>{number.value}</p>
                <button className={styles.button} onClick={number.increment}>
                    count
                </button>
            </div>
            <ResultDisplay result={result} />
        </div>
    )
}

export default CalculatorComp
