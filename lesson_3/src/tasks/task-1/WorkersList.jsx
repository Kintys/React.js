function WorkerList({ workerList }) {
    const getList = () => (
        <div>{Array.isArray(workerList) && workerList.map((name, index) => <p key={index}>{name}</p>)}</div>
    )
    return <>{getList()}</>
}

export default WorkerList
