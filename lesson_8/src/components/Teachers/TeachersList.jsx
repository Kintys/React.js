import { useEffect, useState } from 'react'
import useTeachersApi from '../../hooks/useTeachersApi'
import pageLinks from '../../router/pageLinks'
import Spinner from '../Spinner/Spinner'
import Card from '../Card/Card'
import TeacherCard from './TeacherCard'
import GoToBtn from '../Buttons/GoToBtn'
import stlBtn from '../Buttons/GoTo.module.css'
import { useNavigate } from 'react-router'

function TeachersList() {
    const [selectedTeachersId, setSelectedTeacherId] = useState([])

    const { data: teachersList, isLoading, error, fetchTeachers, deleteTeacher } = useTeachersApi()

    useEffect(() => {
        fetchTeachers()
    }, [fetchTeachers])

    const onSelectTchId = (tchId) => {
        if (selectedTeachersId.includes(tchId)) {
            setSelectedTeacherId((prevIdList) => prevIdList.filter((id) => id !== tchId))
        } else setSelectedTeacherId((prevIdList) => [...prevIdList, tchId])
    }

    const goToMeeting = () => {
        const chosenTeachersForMeet = teachersList.filter((teacher) => selectedTeachersId.includes(teacher.id))
        return {
            to: pageLinks.meetings,
            options: {
                state: {
                    selectedTeachersList: chosenTeachersForMeet
                }
            }
        }
    }

    const onDeleteTeacherFromList = async (id) => {
        await deleteTeacher(id)
        fetchTeachers()
    }

    return (
        <>
            <Card
                header={<h2>Список вчителів</h2>}
                body={
                    <>
                        {isLoading && <Spinner />}
                        {!error && (
                            <>
                                <div className={stlBtn.actions}>
                                    <GoToBtn route={pageLinks.add}>Додати нового вчителя</GoToBtn>
                                    {!!selectedTeachersId.length && (
                                        <GoToBtn route={goToMeeting} bgColor="#4988EF">
                                            Перейти до зустрічей
                                        </GoToBtn>
                                    )}
                                </div>
                                {Array.isArray(teachersList) &&
                                    teachersList.map((teacher) => {
                                        return (
                                            <div key={teacher.id}>
                                                <TeacherCard
                                                    teacher={teacher}
                                                    onSelect={onSelectTchId}
                                                    isSelected={selectedTeachersId.includes(teacher.id)}
                                                />
                                                <div className={stlBtn.actions}>
                                                    <GoToBtn route={pageLinks.edit(teacher.id)} bgColor="#4988EF">
                                                        Редагувати
                                                    </GoToBtn>
                                                    <button
                                                        className={stlBtn.button}
                                                        style={{ backgroundColor: 'red' }}
                                                        onClick={() => onDeleteTeacherFromList(teacher.id)}
                                                    >
                                                        Видалити
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </>
                        )}
                    </>
                }
            />
        </>
    )
}

export default TeachersList
