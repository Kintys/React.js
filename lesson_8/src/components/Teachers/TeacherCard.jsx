import styles from './TeacherCard.module.css'
function TeacherCard({ teacher, onSelect, isSelected }) {
    return (
        <div className={styles.container}>
            <div className={styles.section1}>
                <img src={teacher.photo} alt="teacher" />
                <div>
                    <div>{teacher.name}</div>
                    <div>{`Subject:${teacher.subject}`}</div>
                </div>
            </div>
            <div className={styles.section2}>
                {onSelect ? (
                    <button
                        onClick={() => onSelect(teacher.id)}
                        style={{ backgroundColor: isSelected ? '#4988EF' : '' }}
                    >
                        {isSelected ? '✓' : 'Обрати'}
                    </button>
                ) : null}
            </div>
        </div>
    )
}

export default TeacherCard
