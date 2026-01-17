import FilterPanel from '@/components/Filter/FilterPanel'
import ProductsList from '@components/Product/ProductsList'
import Container from '@layout/Container/Container'

function Admin() {
    return (
        <>
            <Container>
                <FilterPanel />
                <ProductsList admin={true} />
            </Container>
        </>
    )
}

export default Admin
