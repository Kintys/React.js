import { useState, useEffect, useCallback } from 'react'

function useLocalStorage(key, initialValue) {
    const getStoredValue = useCallback(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.error('Error reading from localStorage:', error)
            return initialValue
        }
    }, [key, initialValue])

    const [value, setValue] = useState(getStoredValue)

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === key) {
                try {
                    const newValue = getStoredValue()
                    setValue(newValue)
                } catch (error) {
                    console.error('Error parsing storage value:', error)
                }
            }
        }

        window.addEventListener('storage', handleStorageChange)

        const handleCustomChange = (e) => {
            if (e.detail?.key === key) {
                setValue(e.detail.value)
            }
        }
        window.addEventListener('localStorageUpdate', handleCustomChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
            window.removeEventListener('localStorageUpdate', handleCustomChange)
        }
    }, [key, initialValue])

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            window.dispatchEvent(
                new CustomEvent('localStorageUpdate', {
                    detail: { key, value }
                })
            )
        } catch (error) {
            console.error('Error writing to localStorage:', error)
        }
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage
