class RequestManager {
    constructor(apiPath) {
        this.apiBase = apiPath
    }

    getServerRoute = (path) => {
        return `${this.apiBase}${path}`
    }

    fetchData = async (url) => {
        try {
            const headers = { 'Content-Type': 'application/json' }
            const response = await fetch(this.getServerRoute(url), {
                method: 'GET',
                headers: headers
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            return { data, error: null }
        } catch (error) {
            console.error('GET Error:', error)
            return { data: null, error: error.message }
        }
    }

    postRequest = async (url, data, redirectRoute = null, callback = null) => {
        try {
            const headers = { 'Content-Type': 'application/json' }
            const response = await fetch(this.getServerRoute(url), {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
            }

            const resData = await response.json()

            if (callback) {
                callback(resData)
            }

            if (redirectRoute) {
                window.location.href = redirectRoute
            }

            return { data: resData, error: null }
        } catch (error) {
            console.error('POST Error:', error)
            return { data: null, error: error.message }
        }
    }

    putRequest = async (url, data, redirectRoute = null, callback = null) => {
        try {
            const headers = { 'Content-Type': 'application/json' }
            const response = await fetch(this.getServerRoute(url), {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
            }

            const resData = await response.json()

            if (callback) {
                callback(resData)
            }

            if (redirectRoute) {
                window.location.href = redirectRoute
            }

            return { data: resData, error: null }
        } catch (error) {
            console.error('PUT Error:', error)
            return { data: null, error: error.message }
        }
    }

    deleteRequest = async (url, id = null) => {
        try {
            const headers = { 'Content-Type': 'application/json' }
            const options = {
                method: 'DELETE',
                headers: headers
            }

            if (id) {
                options.body = JSON.stringify({ id })
            }

            const response = await fetch(this.getServerRoute(url), options)

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            return { data, error: null }
        } catch (error) {
            console.error('DELETE Error:', error)
            return { data: null, error: error.message }
        }
    }
}

export default RequestManager
