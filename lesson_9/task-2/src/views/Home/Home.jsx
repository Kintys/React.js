import { useTheme } from '@/context/theme/useTheme'
import Container from '../../layout/Container/Container'
import styles from './Home.module.css'

function Home() {
    const { theme, toggleTheme } = useTheme()
    return (
        <>
            <Container>
                <div className={styles.hero}>
                    <h1>
                        Актуальна тема сторіник<b> {theme}</b>
                        <br />
                        <button onClick={toggleTheme}>Змінити тему </button>
                    </h1>
                </div>
            </Container>
        </>
    )
}

export default Home
