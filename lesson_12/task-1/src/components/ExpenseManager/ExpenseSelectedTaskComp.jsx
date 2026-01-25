import useInput from '@/hooks/useInput'
import { setTask } from '@/store/task/tasksSlice'
import { memo, useId, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './ExpenseSelectedTaskComp.module.css'

function ExpenseSelectedTaskComp({ taskList }) {
    const input = useInput()
    const inputId = useId()
    const selectId = useId()

    const [selectedTask, setSelectedTask] = useState()

    const dispatch = useDispatch()

    const handleSelect = (e) => {
        setSelectedTask(e.target.value)
    }

    const onAddTask = () => {
        if (!selectedTask && input.inputProps.value) return

        dispatch(setTask({ title: selectedTask, money: input.inputProps.value }))
    }

    const isTaskList = taskList && Array.isArray(taskList)
    return (
        <div className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor={inputId} className={styles.label}>
                    Money
                </label>
                <input
                    id={inputId}
                    type="number"
                    className={styles.input}
                    placeholder="0"
                    value={input.inputProps.value}
                    {...input.inputProps}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor={selectId} className={styles.label}>
                    Category
                </label>
                <select name="task" id={selectId} className={styles.select} onChange={handleSelect}>
                    <option value="">Зробіть вибір</option>
                    {isTaskList &&
                        taskList.map((task, index) => (
                            <option key={index} value={task}>
                                {task}
                            </option>
                        ))}
                </select>
            </div>

            <button className={styles.addBtn} onClick={onAddTask}>
                Add
            </button>
        </div>
    )
}

export default memo(ExpenseSelectedTaskComp)
