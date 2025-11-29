function LiElement({ workerName, salary }) {
    return (
        <>
            <li>
                <span>{workerName}</span> : <span>{salary}</span>
            </li>
        </>
    )
}

export default LiElement
