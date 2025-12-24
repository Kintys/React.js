import axios from 'axios'
import { useCallback, useState } from 'react'
import apiRoutes from '../api/apiRoutes'

const useTeachersApi = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchTeachers = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        try {
            const res = await axios.get(apiRoutes.getAllTeachers)
            setData(res.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const getTeacherById = useCallback(async (id) => {
        setIsLoading(true)
        setError(null)
        try {
            const res = await axios.get(apiRoutes.getTeacherById(id))
            setData(res.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const changeTeachers = useCallback(async (id, teacher) => {
        setIsLoading(true)
        setError(null)
        try {
            const res = await axios.put(apiRoutes.getTeacherById(id), teacher)
            setData(res.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const addNewTeacher = useCallback(async (teacher) => {
        setIsLoading(true)
        setError(null)
        try {
            const res = await axios.post(apiRoutes.addTeacher, teacher)
            setData(res.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const deleteTeacher = useCallback(async (id) => {
        setIsLoading(true)
        setError(null)
        try {
            const res = await axios.delete(apiRoutes.deleteTeacher(id))
            setData(res.status)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    return {
        data,
        isLoading,
        error,
        fetchTeachers,
        changeTeachers,
        addNewTeacher,
        getTeacherById,
        deleteTeacher
    }
}

export default useTeachersApi
