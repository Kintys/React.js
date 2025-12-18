import { useState, useEffect, useRef } from 'react'

const API_BASE_URL = 'https://react-js-56p6.onrender.com/api'

function useFetch(urlPath, method = 'GET', body = null, { skip = false } = {}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    if (skip) {
        const execute = async (newBody = body) => {
            setLoading(true)
            setError(null)
            const fullUrl = `${API_BASE_URL}${urlPath}`
            const abortController = new AbortController()
            const signal = abortController.signal

            try {
                const fetchOptions = {
                    method,
                    signal,
                    headers: {}
                }

                if (newBody && ['POST', 'PUT'].includes(method)) {
                    fetchOptions.body = JSON.stringify(newBody)
                    fetchOptions.headers['Content-Type'] = 'application/json'
                }

                const response = await fetch(fullUrl, fetchOptions)

                if (!response.ok) {
                    let errorMessage = `HTTP error! status: ${response.status}`
                    try {
                        const errorData = await response.json()
                        errorMessage = errorData.error || errorData.message || errorMessage
                    } catch (jsonError) {
                        console.error('Failed to parse error response JSON:', jsonError)
                    }
                    throw new Error(errorMessage)
                }

                const contentType = response.headers.get('content-type')
                if (contentType && contentType.includes('application/json')) {
                    const json = await response.json()
                    setData(json)
                    return json
                } else {
                    setData(true)
                    return true
                }
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch request aborted during manual execution.')
                    return null
                }
                setError(err.message)
                throw err
            } finally {
                setLoading(false)
            }
        }

        return { data, loading, error, execute }
    }

    const optionsRef = useRef({ method, body })

    useEffect(() => {
        optionsRef.current = { method, body }
    }, [method, body])

    useEffect(() => {
        if (!urlPath) {
            setData(null)
            setLoading(false)
            setError(null)
            return
        }

        const fullUrl = `${API_BASE_URL}${urlPath}`
        const abortController = new AbortController()
        const signal = abortController.signal

        setLoading(true)
        setError(null)

        const fetchData = async () => {
            try {
                const fetchOptions = {
                    method: optionsRef.current.method,
                    signal,
                    headers: {}
                }

                if (optionsRef.current.body && ['POST', 'PUT'].includes(optionsRef.current.method)) {
                    fetchOptions.body = JSON.stringify(optionsRef.current.body)
                    fetchOptions.headers['Content-Type'] = 'application/json'
                }

                const response = await fetch(fullUrl, fetchOptions)

                if (!response.ok) {
                    let errorMessage = `HTTP error! status: ${response.status}`
                    try {
                        const errorData = await response.json()
                        errorMessage = errorData.error || errorData.message || errorMessage
                    } catch (jsonError) {
                        console.error('Failed to parse error response JSON:', jsonError)
                    }
                    throw new Error(errorMessage)
                }

                const contentType = response.headers.get('content-type')
                if (contentType && contentType.includes('application/json')) {
                    const json = await response.json()
                    setData(json)
                } else {
                    setData(true)
                }
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch request aborted.')
                    return
                }
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => {
            abortController.abort()
            console.log('Мережевий запит скасовано при очищенні.')
        }
    }, [urlPath])

    const execute = async (newBody = body) => {
        setLoading(true)
        setError(null)
        const fullUrl = `${API_BASE_URL}${urlPath}`
        const abortController = new AbortController()
        const signal = abortController.signal
        try {
            const fetchOptions = {
                method: optionsRef.current.method,
                signal,
                headers: {}
            }

            if (newBody && ['POST', 'PUT'].includes(optionsRef.current.method)) {
                fetchOptions.body = JSON.stringify(newBody)
                fetchOptions.headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(fullUrl, fetchOptions)

            if (!response.ok) {
                let errorMessage = `HTTP error! status: ${response.status}`
                try {
                    const errorData = await response.json()
                    errorMessage = errorData.error || errorData.message || errorMessage
                } catch (jsonError) {
                    console.error('Failed to parse error response JSON:', jsonError)
                }
                throw new Error(errorMessage)
            }

            const contentType = response.headers.get('content-type')
            if (contentType && contentType.includes('application/json')) {
                const json = await response.json()
                setData(json)
                return json
            } else {
                setData(true)
                return true
            }
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('Fetch request aborted during manual execution.')
                return null
            }
            setError(err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error, execute }
}

export default useFetch
