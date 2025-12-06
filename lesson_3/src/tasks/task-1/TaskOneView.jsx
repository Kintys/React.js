import DynamicSearch from './DynamicSearch'
import style from './Search.module.css'
function TaskOneView() {
    return (
        <div className={style['container']}>
            <h2>Завдання №1</h2>
            <p>
                Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять
                вказаний фрагмен
            </p>
            <DynamicSearch />
        </div>
    )
}

export default TaskOneView
