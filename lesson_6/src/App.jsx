import { useEffect } from 'react'
import './App.css'
import CalculatorComp from './task-1/CalculatorComp'
import DataGrid from './task-2/DataGrid'
import DeviceScreen from './task-3/DeviceScreen'
import useFetch from './hooks/useFetch'
import SearchComp from './task-4/SearchComp'
function App() {
    let productObj = useFetch('/products')

    return (
        <>
            <div className="body-wrapper">
                <CalculatorComp />
                <br />
                <br />
                <DataGrid {...productObj} />
                <br />
                <br />
                <DeviceScreen />
                <br />
                <br />
                <SearchComp {...productObj} />
            </div>
        </>
    )
}

export default App
