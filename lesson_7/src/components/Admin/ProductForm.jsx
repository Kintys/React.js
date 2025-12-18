import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import apiRoutes from '../../api/apiRoutes'
import useFetch from '../../hooks/useFetch'
import useForm from '../../hooks/useForm'
import Input from './InputForm'
import pageLinks from '../../router/pageLinks'
import Container from '../../layout/Container'
import styles from './ProductForm.module.css'
import Spinner from '../Spinner/Spinner'
import ErrorComp from '../ErrorComp'

function ProductForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { values, handleChange, setValues } = useForm({
        name: '',
        imageUrl: '',
        price: '',
        oldPrice: '',
        description: ''
    })

    const goTo = useNavigate()

    const { id } = useParams()
    const isEditing = !!id

    const currentButtonLabel = isEditing ? 'Зберегти' : 'Створити'

    const url = isEditing ? apiRoutes.getProductById(id) : ''

    const addProduct = useFetch(apiRoutes.productsList, 'POST', null, { skip: true }) || {}

    const changeProduct =
        useFetch(isEditing ? apiRoutes.getUpdateProductLink(id) : '', 'PUT', null, { skip: true }) || {}

    const { data: product, loading, error } = useFetch(url, 'GET', null, { skip: !isEditing }) || {}

    useEffect(() => {
        if (product) {
            const { id, ...productWithoutId } = product
            setValues(productWithoutId)
        }
    }, [product, setValues])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            if (!id) {
                await addProduct.execute(values)
            } else {
                await changeProduct.execute(values)
            }
            goTo(pageLinks.admin)
        } catch (err) {
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (loading) {
        return (
            <Container>
                <Spinner />
            </Container>
        )
    }

    return (
        <>
            <Container>
                {!!error && <ErrorComp msg={error} />}
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        {Object.entries(values).map(([key, value]) => (
                            <div key={key} className={styles.inputGroup}>
                                <Input name={key} value={value} handleChange={handleChange} label={key} />
                            </div>
                        ))}
                        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                            {currentButtonLabel}
                        </button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default ProductForm
