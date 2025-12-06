import GameField from './GameField'
import style from '../task-1/Search.module.css'
const initGameField = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
function TaskTwoView() {
    return (
        <div className={style['container']}>
            <h2>Завдання №2</h2>
            <p>Хрестики-нулики. З історією (можна повернутись назад)</p>
            <GameField initGameField={initGameField} />
        </div>
    )
}

export default TaskTwoView
