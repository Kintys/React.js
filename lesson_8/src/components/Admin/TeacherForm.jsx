import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import useTeachersApi from '../../hooks/useTeachersApi'
import useForm from '../../hooks/useForm'
import Spinner from '../Spinner/Spinner'
import ErrorComp from '../ErrorComp'
import Input from './InputForm'
import pageLinks from '../../router/pageLinks'
import Card from '../Card/Card'
import stlBtn from '../Buttons/GoTo.module.css'
import GoToBtn from '../Buttons/GoToBtn'

function TeacherForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { values, handleChange, setValues } = useForm({
        name: '',
        subject: '',
        photo: ''
    })

    const goTo = useNavigate()

    const { id } = useParams()
    const isEditing = !!id

    const currentForm = !isEditing
        ? {
              h2: 'Додати нового вчителя',
              btn: 'Додати вчителя'
          }
        : {
              h2: 'Редагувати вчителя',
              btn: 'Оновити вчителя'
          }

    const { data: teacher, isLoading, error, changeTeachers, addNewTeacher, getTeacherById } = useTeachersApi()

    useEffect(() => {
        if (id) {
            getTeacherById(id)
        }
    }, [id, getTeacherById])

    useEffect(() => {
        if (teacher && Object.keys(teacher).length > 0) {
            const { id, ...teacherWithoutId } = teacher
            setValues(teacherWithoutId)
        }
    }, [teacher, setValues])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            if (!id) {
                await addNewTeacher({ ...values })
            } else {
                await changeTeachers(id, { ...values })
            }
            goTo(pageLinks.home)
        } catch (err) {
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {isLoading && <Spinner />}
            {!!error && <ErrorComp msg={error} />}
            <div>
                <Card
                    header={<h2>{currentForm.h2}</h2>}
                    body={
                        <form onSubmit={handleSubmit}>
                            {Object.entries(values).map(([key, value]) => (
                                <div key={key}>
                                    <Input
                                        name={key}
                                        value={value}
                                        type="text"
                                        handleChange={handleChange}
                                        label={key}
                                    />
                                </div>
                            ))}
                            <div className={stlBtn.actions}>
                                <button type="submit" disabled={isSubmitting} className={stlBtn.button}>
                                    {currentForm.btn}
                                </button>
                                <GoToBtn route={pageLinks.home} bgColor="grey">
                                    Скасувати
                                </GoToBtn>
                            </div>
                        </form>
                    }
                />
            </div>
        </>
    )
}

export default TeacherForm
