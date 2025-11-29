import { useState } from 'react'
import style from './Task-6.module.css'

const initInput = ''

function Task_6() {
    const [input, setInput] = useState(initInput)
    const [waitingList, setWaitingList] = useState([])
    const [processingList, setProcessingList] = useState([])
    const [completedList, setCompletedList] = useState([])

    const onAddNewOrder = () => {
        const newOrder = input.trim()
        if (!newOrder) return
        setWaitingList((prevList) => [...prevList, newOrder])
        setInput(initInput)
    }

    // Можливо треба було об'єднати ці 2 фукції в одну для уникнення дубляжу

    const onAddToProcessingList = (indexItem) => {
        const foundItem = waitingList[indexItem]
        if (!foundItem) return
        setProcessingList((prevList) => [...prevList, foundItem])
        setWaitingList((prevList) => prevList.filter((_, index) => index !== indexItem))
    }

    const onAddToCompletedList = (indexItem) => {
        const foundItem = processingList[indexItem]
        if (!foundItem) return
        setCompletedList((prevList) => [...prevList, foundItem])
        setProcessingList((prevList) => prevList.filter((_, index) => index !== indexItem))
    }

    const onDeleteOrder = (indexItem) => {
        setCompletedList((prevList) => prevList.filter((_, index) => index !== indexItem))
    }

    const getTableRow = (listArr, btnName, callBack) =>
        listArr.map((item, index) => (
            <tr key={index} className={style.row}>
                <td className={style.cell}>{item}</td>

                <td className={`${style.cell} ${style['cell-right']}`}>
                    <button onClick={() => callBack(index)} className={style.btn}>
                        {btnName}
                    </button>
                </td>
            </tr>
        ))

    const getFullTable = ({ title, list, btnName, callBack }) => {
        return (
            <table className={style.table}>
                <thead>
                    <tr className={style['head-row']}>
                        <th colSpan={list.length} className={style['title-cell']}>
                            {title}
                        </th>
                    </tr>
                </thead>

                <tbody>{getTableRow(list, btnName, callBack)}</tbody>
            </table>
        )
    }

    const settingList = [
        {
            title: 'Очікують на виконання',
            btnName: 'Готувати',
            list: waitingList,
            callBack: onAddToProcessingList
        },
        {
            title: 'Виконуєтся',
            btnName: 'Приготовлено',
            list: processingList,
            callBack: onAddToCompletedList
        },
        {
            title: 'Готові до виносу',
            btnName: 'Подано',
            list: completedList,
            callBack: onDeleteOrder
        }
    ]

    const getList = () => settingList.map((item) => getFullTable(item))

    return (
        <>
            <div className={style.container}>
                <div className={style['input-block']}>
                    <label>
                        Нова замовлена страва:{' '}
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    </label>
                    <button onClick={onAddNewOrder}>Додати</button>
                </div>
                <div className={style['table-block']}> {getList()}</div>
            </div>
        </>
    )
}

export default Task_6
