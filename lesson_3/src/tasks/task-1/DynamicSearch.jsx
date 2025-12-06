import { useEffect, useState } from 'react'
import RequestManager from '../../helper/data.js'
import WorkerList from './WorkersList'
import Spinner from '../../components/SpinnerComp.jsx'
import style from './Search.module.css'

function DynamicSearch() {
    const [workerList, setWorkerList] = useState([])
    const [filterWorkerList, setFilterWorkerList] = useState([])
    const [isSpinner, setSpinner] = useState(false)

    const handelInput = (e) => {
        const input = e.target.value.trim()
        onFilteredWorkerList(input)
    }

    const getFilteredWorkerList = (filterValue) =>
        workerList.filter((worker) => worker.toUpperCase().includes(filterValue))

    function onFilteredWorkerList(name) {
        const filterValue = name.toUpperCase()

        if (!filterValue) {
            setFilterWorkerList([...workerList])
            return
        }
        const newWorkerList = getFilteredWorkerList(filterValue)

        setFilterWorkerList([...newWorkerList])
    }

    useEffect(() => {
        async function loadWorkers() {
            try {
                setSpinner(true)
                const initWorkerList = await RequestManager.getData()
                if (initWorkerList && Array.isArray(initWorkerList)) {
                    setWorkerList(initWorkerList)
                    setFilterWorkerList(initWorkerList)
                } else {
                    throw new Error('Дані не завантажилися')
                }
            } catch (err) {
                console.error(err.message)
            } finally {
                setSpinner(false)
            }
        }

        loadWorkers()
    }, [])

    return (
        <>
            <label className={style['label']}>
                Ім'я
                <input type="text" onChange={handelInput} />
            </label>
            <WorkerList workerList={filterWorkerList} />
            <Spinner isSpinnerShow={isSpinner} />
        </>
    )
}

export default DynamicSearch
