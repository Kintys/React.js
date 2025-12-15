import { useId, useMemo } from 'react'
import useInput from '../hooks/useInput'
import ResultDisplay from './ResultDisplay'
import useCounter from '../hooks/useCounter'

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
        firstInput.clear(), secondInput.clear()
    }

    console.log('Render ----------> CalculatorComp')
    return (
        <>
            <div className="container">
                <label htmlFor={inpId_1}>First Input</label>
                <input type="number" id={inpId_1} {...firstInput.inputProps} />

                <label htmlFor={inpId_2}>Second Input</label>
                <input type="number" id={inpId_2} {...secondInput.inputProps} />

                <button onClick={onClearInput}>Clear Input</button>
            </div>
            <div>
                <p>{number.value}</p>
                <button onClick={number.increment}>add</button>
            </div>
            <ResultDisplay result={result} />
        </>
    )
}

export default CalculatorComp
