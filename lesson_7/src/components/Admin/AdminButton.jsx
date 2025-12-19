import { useNavigate } from 'react-router'
import pageLinks from '../../router/pageLinks'
import styles from './AdminButton.module.css'
import useFetch from '../../hooks/useFetch'
import apiRoutes from '../../api/apiRoutes'

function AdminButton({ id }) {
    const goTo = useNavigate()
    const deleteRequest = useFetch(apiRoutes.getDeleteProductLink(id), 'DELETE', null, { skip: true }) || {}

    const handleDelete = async () => {
        try {
            await deleteRequest.execute()
            goTo(pageLinks.home)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <button onClick={() => goTo(pageLinks.getProductEdit(id))} className={styles.editButton}>
                ✏️ Редагувати
            </button>
            <button onClick={handleDelete} className={styles.deleteButton}>
                🗑️ Видалити
            </button>
        </>
    )
}

export default AdminButton
