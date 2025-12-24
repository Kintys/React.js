import { useNavigate } from 'react-router'
import Container from '../layout/Container/Container'
import pageLinks from '../router/pageLinks'

function NotFoundPage() {
    const goTo = useNavigate()
    return (
        <>
            <Container>
                <button
                    onClick={() => {
                        goTo(pageLinks.home)
                    }}
                >
                    Back to Home
                </button>
                <h1>Page not Found 404</h1>
                <br />
                <div>
                    <img
                        src="https://media.istockphoto.com/id/860463522/vector/404-error-page-template-for-website-404-alert-flat-design.jpg?s=612x612&w=0&k=20&c=ad0D5cQqnRMRcyQtaFdrk4GgO9LYRYl06V4MReZKsOE="
                        alt="404"
                    />
                </div>
            </Container>
        </>
    )
}

export default NotFoundPage
