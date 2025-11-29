import LiElement from './LiElement'

function OlComponent({ workerList }) {
    const getSalaryList = () =>
        workerList.map((item) => <LiElement key={item.id} workerName={item.name} salary={item.salary} />)

    return (
        <>
            <ol>{getSalaryList()}</ol>
        </>
    )
}

export default OlComponent
