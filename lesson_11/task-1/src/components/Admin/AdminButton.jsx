import { useNavigate } from 'react-router'
import { pageLinks } from '@routes/router'
import styles from './AdminButton.module.css'

function AdminButton({ id, onDelete }) {
    const goTo = useNavigate()

    return (
        <>
            <button onClick={() => goTo(pageLinks.getProductEdit(id))} className={styles.editButton}>
                ✏️ Редагувати
            </button>
            <button onClick={() => onDelete(id)} className={styles.deleteButton}>
                🗑️ Видалити
            </button>
        </>
    )
}

export default AdminButton
