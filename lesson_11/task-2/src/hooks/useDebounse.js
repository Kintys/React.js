import { useRef, useCallback, useEffect } from 'react'

function useDebounce(func, timeout = 300) {
    const timer = useRef()
    useEffect(() => {
        return () => {
            if (timer.current) clearTimeout(timer.current)
        }
    }, [])

    const debouncedFunction = useCallback(
        (...args) => {
            if (timer.current) clearTimeout(timer.current)

            timer.current = setTimeout(() => {
                func(...args)
            }, timeout)
        },
        [func, timeout]
    )

    return debouncedFunction
}

export default useDebounce
