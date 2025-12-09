import styles from './TaskMaster.module.css'

function TaskMaster({ title, description, children }) {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                {children}
            </div>
        </>
    )
}

export default TaskMaster
