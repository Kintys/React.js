import UlComp from './UlComp'
import dataList from './data.js'

function Task_5() {
    const getData = () => dataList

    return (
        // Зробив багато компонентів для практики
        <>
            <h2>Task 5</h2>
            <UlComp webList={getData()} />
        </>
    )
}

export default Task_5
