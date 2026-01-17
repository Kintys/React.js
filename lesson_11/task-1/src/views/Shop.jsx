import FilterPanel from '@/components/Filter/FilterPanel'
import ProductsList from '@components/Product/ProductsList'
import Container from '@layout/Container/Container'

function Shop() {
    return (
        <>
            <Container>
                <FilterPanel />
                <ProductsList />
            </Container>
        </>
    )
}

export default Shop
