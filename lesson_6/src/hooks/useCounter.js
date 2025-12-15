import { useState } from 'react'

function useCounter(initValue = 0) {
    const [count, setCount] = useState(initValue)

    const handlerCount = () => setCount((prevCount) => ++prevCount)

    return { value: count, increment: handlerCount }
}

export default useCounter
