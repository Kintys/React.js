import { useParams } from 'react-router'
import GoToBtn from '../components/Buttons/GoToBtn'
import Card from '../components/Card/Card'
import Container from '../layout/Container/Container'
import pageLinks from '../router/pageLinks'

function About() {
    const { section } = useParams()

    const content = {
        app: {
            h2: 'Про додаток "Вчителі"',
            body: 'Цей додаток допомагає обирати вчителів і проводити збори. Ви можете переглядати інформацію про вчителів, редагувати дані та додавати нових вчителів.'
        },
        dev: {
            h2: 'Про розробника',
            body: 'Вивчаємо React-router!'
        }
    }

    return (
        <>
            <Container>
                <Card
                    header={<h2>{content[section].h2}</h2>}
                    body={<p>{content[section].body}</p>}
                    footer={<GoToBtn route={pageLinks.home}>На головну</GoToBtn>}
                />
            </Container>
        </>
    )
}

export default About
