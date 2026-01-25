import { Link } from 'react-router'
import NavBar from '@layout/components/NavBar/NavBar'
import Container from '@layout/Container/Container'

function Header() {
    return (
        <header >
            <Container >
                <div >
                    <Link>
                    </Link>
                    <NavBar />
                </div>
            </Container>
        </header>
    )
}

export default Header
