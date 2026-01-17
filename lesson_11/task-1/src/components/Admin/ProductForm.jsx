import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import useForm from '@hooks/useForm'
import Input from './InputForm'
import { pageLinks } from '@routes/router'
import Container from '@layout/Container/Container'
import styles from './ProductForm.module.css'
import Spinner from '@components/Spinner/Spinner'
import ErrorComp from '@components/ErrorComp'
import { useDispatch, useSelector } from 'react-redux'
import { clearProduct } from '@store/products/productsSlice'
import { fetchProductById, createProduct, updateProduct } from '@store/products/productsThunk'

function ProductForm() {
    const { values, handleChange, setValues } = useForm({
        name: '',
        imageUrl: '',
        price: '',
        oldPrice: '',
        description: ''
    })

    const goTo = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const isEditing = !!id

    const { product, loading, error } = useSelector((state) => state.products)

    useEffect(() => {
        if (isEditing && id) {
            dispatch(fetchProductById(id))
        }

        return () => {
            dispatch(clearProduct())
        }
    }, [dispatch, id, isEditing])

    useEffect(() => {
        if (product && isEditing) {
            const { id, ...productWithoutId } = product
            setValues(productWithoutId)
        }
    }, [product, isEditing, setValues])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (isEditing) {
                await dispatch(updateProduct({ id, productData: values })).unwrap()
            } else {
                await dispatch(createProduct(values)).unwrap()
            }
            goTo(`/${pageLinks.admin}`)
        } catch (err) {
            console.error('Помилка збереження:', err)
        }
    }

    if (loading && isEditing) {
        return (
            <Container>
                <Spinner />
            </Container>
        )
    }

    return (
        <Container>
            {error && <ErrorComp msg={error} />}
            <div className={styles.formContainer}>
                <h2>{isEditing ? 'Редагувати продукт' : 'Створити новий продукт'}</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    {Object.entries(values).map(([key, value]) => (
                        <div key={key} className={styles.inputGroup}>
                            <Input name={key} value={value} handleChange={handleChange} label={key} />
                        </div>
                    ))}
                    <button type="submit" className={styles.submitButton} disabled={loading}>
                        {loading ? 'Збереження...' : isEditing ? 'Оновити' : 'Створити'}
                    </button>
                </form>
            </div>
        </Container>
    )
}

export default ProductForm
