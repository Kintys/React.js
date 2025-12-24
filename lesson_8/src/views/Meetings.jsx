import { useLocation } from 'react-router'
import Container from '../layout/Container/Container'
import TeacherCard from '../components/Teachers/TeacherCard'
import GoToBtn from '../components/Buttons/GoToBtn'
import pageLinks from '../router/pageLinks'
import Card from '../components/Card/Card'

function Meetings() {
    const { state } = useLocation()
    const teacherList = state?.selectedTeachersList
    return (
        <>
            <Container>
                <>
                    {teacherList?.length ? (
                        <Card
                            header={<h2>Учасники зборів</h2>}
                            body={
                                <>
                                    {teacherList.map((teacher) => {
                                        return <TeacherCard key={teacher.id} teacher={teacher} />
                                    })}
                                </>
                            }
                            footer={<GoToBtn route={pageLinks.home}>Повернутися до списку вчителів</GoToBtn>}
                        />
                    ) : (
                        <Card header={<h2>Немає обраних вчителів 🤷‍♂️</h2>} />
                    )}
                </>
            </Container>
        </>
    )
}

export default Meetings
