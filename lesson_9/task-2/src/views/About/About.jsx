import Container from '@/layout/Container/Container'
import styles from './About.module.css'
import { useTheme } from '@/context/theme/useTheme'

function About() {
    const { theme, toggleTheme } = useTheme()
    return (
        <>
            <Container>
                <div className={styles.about}>
                    <h1>
                        Актуальна тема сторіник<b> {theme}</b>
                        <br />
                        <button onClick={toggleTheme}>Змінити тему</button>
                    </h1>
                </div>
            </Container>
        </>
    )
}

export default About
