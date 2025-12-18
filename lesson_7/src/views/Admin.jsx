import ProductsList from '../components/Product/ProductsList'
import Container from '../layout/Container'

function Admin() {
    return (
        <>
            <Container>
                <ProductsList admin={true} />
            </Container>
        </>
    )
}

export default Admin
