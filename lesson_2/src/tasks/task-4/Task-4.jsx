import OlComponent from './OlComponent.jsx'
import dataWorker from './data.js'
import { container } from './Task-4.module.css'
function Task_4() {
    return (
        <>
            <h2>Task 4</h2>
            <div className={container}>
                <OlComponent workerList={dataWorker} />
            </div>
        </>
    )
}

export default Task_4
