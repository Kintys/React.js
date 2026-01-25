import { deleteTask, repeatTask } from '@/store/task/tasksSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './ExpenseList.module.css'

function ExpenseList() {
    const someList = useSelector((state) => state.tasks.tasks)

    const dispatch = useDispatch()
    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr>
                    <th>Category</th>
                    <th>Money</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {someList &&
                    someList.map((task, index) => (
                        <tr key={index}>
                            <td>{task.title}</td>
                            <td>{task.money}</td>
                            <td>
                                <div className={styles.actionCell}>
                                    <button className={styles.deleteBtn} onClick={() => dispatch(deleteTask(index))}>
                                        Delete
                                    </button>
                                    <button className={styles.repeatBtn} onClick={() => dispatch(repeatTask(index))}>
                                        Repeat
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default ExpenseList
