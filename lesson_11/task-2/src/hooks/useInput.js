import { useState } from 'react'

function useInput(initValue = '') {
    const [inputValue, setInputValue] = useState(initValue)

    const handleChange = (e) => setInputValue(e.target.value)

    const clearInput = () => setInputValue('')

    return {
        inputProps: { onChange: handleChange, value: inputValue },
        clear: clearInput
    }
}

export default useInput
